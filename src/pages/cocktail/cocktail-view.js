// Architectural imports
import React, { useState, useEffect, useRef, useCallback } from "react";

// Styled imports
import { StyledColumn } from "./cocktail-style";

// Components
import PageHeader from "../../components/constructs/page-header/page-header-view";
import SearchBar from "../../components/constructs/searchbar/searchbar-view";
import Filters from "../../components/constructs/filters/filters-view";

// Endpoints
import Cocktails from "../../api/Cocktails";

const CocktailPage = () => {
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState("");
  const [glasses, setGlasses] = useState(null);
  const [filter, setFilter] = useState(null);
  const [cocktails, setCocktails] = useState(null);

  let api = useRef(null);

  const getCats = useCallback(async () => {
    const cats = await api.current.getCategories();
    setCategories(cats);
  }, []);

  const getGlass = useCallback(async () => {
    const glass = await api.current.getGlasses();
    setGlasses(glass);
  }, []);

  const getDrinks = useCallback(async () => {
    const drink = await api.current.getCocktail(filter);
    setCocktails(drink);
  }, [filter]);

  useEffect(() => {
    api.current = new Cocktails();
    getCats();
    getGlass();
    getDrinks();
  }, [getCats, getGlass, getDrinks]);

  const handleSubmit = () => {};

  const handleFilter = (filterTerm, key) => {
    const value = filterTerm.replace(/" "/g, "_");
    key === 1
      ? setFilter(...filter, { c: value })
      : setFilter(...filter, { g: value });
  };

  return (
    <>
      <PageHeader title="Search for a cocktail" />
      <StyledColumn>
        <SearchBar
          onSubmit={handleSubmit}
          onChange={(e) => setSearch(e.target.value)}
          buttonText="search"
        />
        {categories ? (
          <>
            <Filters
              objectKey="strCategory"
              filters={categories.data.drinks}
              handleFilter={handleFilter}
            />
            <Filters
              objectKey="strGlass"
              filters={glasses.drinks}
              handleFilter={handleFilter}
            />
            {console.log(glasses)}
            {console.log(categories.data.drinks)}
          </>
        ) : null}
      </StyledColumn>
    </>
  );
};

export default CocktailPage;
