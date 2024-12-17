import { 
    SearchInputContainer, 
    SearchInputText,
    SearchButton } from "./SearchBarStyle";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {
    return( 
    <SearchInputContainer>
        <SearchInputText placeholder="O que você quer saber ?" id="pesquisa" name="pesquisa" type="text"/>
        <SearchButton type="button" ><FontAwesomeIcon icon={faSearch}/></SearchButton>
    </SearchInputContainer>
    )
}

export default SearchBar;