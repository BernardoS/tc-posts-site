import {
    SearchInputContainer,
    SearchInputText,
    SearchButton
} from "./SearchBarStyle";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import { useSearchContext } from "../../contexts/SearchContext";
import { useNavigate } from "react-router-dom";


interface SearchBarProps {
    redirectToSearch: boolean;
}


//TO DO: Receber como parâmetro as funções handleSearch e handleInputSearch
const SearchBar: React.FC<SearchBarProps> = ({ redirectToSearch }) => {

    const [termInput, setTermInput] = useState<string>('');
    const {updateSearchTerm} = useSearchContext();
    const navigate = useNavigate();


    const handleInputSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const term = event.target.value;
        setTermInput(term);
    }


    const handleSearch = () => {
        if (redirectToSearch) {
            navigate(`/search?term=${encodeURIComponent(termInput)}`);
        } else {
            updateSearchTerm(termInput);
        }
    }


    return (
        <SearchInputContainer>
            <SearchInputText
                value={termInput}
                onChange={handleInputSearch}
                placeholder="O que você quer saber ?"
                id="pesquisa"
                name="pesquisa"
                type="text" />

            <SearchButton
                type="button"
                onClick={handleSearch} >
                <FontAwesomeIcon
                    icon={faSearch} />
            </SearchButton>

        </SearchInputContainer>
    )
}

export default SearchBar;