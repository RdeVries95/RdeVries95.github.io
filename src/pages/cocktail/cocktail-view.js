// Architectural imports
import React from 'react';

// Styled imports
import {
    
} from './cocktail-style'

// Components
import SearchBar from '../../components/constructs/searchbar/searchbar-view'

// Content
import {searchOptions} from './content'
import {filters} from './content'

// Endpoints

const CocktailPage = () => {

    return ( 
        <SearchBar searchOptions={searchOptions} filters={filters}/>
     );
}
 
export default CocktailPage;