import { 
    SearchInputContainer, 
    SearchInputText,
    SearchButton } from "./SearchBarStyle";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

    



const SearchBar = () => {
    
    const [searchTerm,setSearchTerm] = useState<string>('');

    const navigate = useNavigate();

    const handleSearch = () => {
        // Navegar para a rota com o parâmetro `term`
        console.log(searchTerm);
        if(searchTerm?.length > 3){
            navigate(`/search?term=${encodeURIComponent(searchTerm)}`);
        }
    };

    const handleInputSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const term = event.target.value;
        setSearchTerm(term);
    }

    return( 
    <SearchInputContainer>
        <SearchInputText 
            value={searchTerm}
            onChange={handleInputSearch} 
            placeholder="O que você quer saber ?" 
            id="pesquisa" 
            name="pesquisa" 
            type="text"/>

        <SearchButton 
            type="button"
            onClick={handleSearch} >
            <FontAwesomeIcon 
                icon={faSearch}/>
        </SearchButton>

    </SearchInputContainer>
    )
}

export default SearchBar;