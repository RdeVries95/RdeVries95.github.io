// Architectural imports
import React, { useState, useEffect, useRef, useCallback } from "react";
import { navigate } from "@reach/router";

// Styled imports
import { StyledColumn, StyledRow } from "./cocktail-style";

// Components
import PageHeader from "../../components/constructs/page-header/page-header-view";
import SearchBar from "../../components/constructs/searchbar/searchbar-view";
import Table from "../../components/constructs/table/table-view";
import BackButton from "../../components/constructs/back-button/back-button-view";

// Endpoints
import Cocktails from "../../api/Cocktails";

// Content
import { columns } from "./table-content";

const CocktailPage = () => {
  const [search, setSearch] = useState("mojito");
  const [cocktails, setCocktails] = useState(null);
  const [params] = useState(new URLSearchParams("s=cocktail"));

  let api = useRef(null);

  const getDrinks = useCallback(async () => {
    const drink = await api.current.getCocktail(params);
    setCocktails(drink.data.drinks);
  }, [params]);

  useEffect(() => {
    api.current = new Cocktails();
    async function fetchData() {
      await getDrinks();
    }
    fetchData();
  }, [getDrinks]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = search.split(" ").join("_");
    params.delete("s", "cocktail");
    params.append("s", value);
    getDrinks();
  };

  const handleRowClick = (id) => {
    navigate(`/cocktail/${id}`)
  }

  return (
    <>
      <PageHeader title="Search for a cocktail" />
      <BackButton />
      <StyledRow>
        <StyledColumn>
          <SearchBar
            onSubmit={(e) => handleSubmit(e)}
            onChange={(e) => setSearch(e.target.value)}
            buttonText="search"
          />
        </StyledColumn>
        {cocktails ? (
          <Table tableColumns={columns} tableData={cocktails} onClick={handleRowClick} />
        ) : null}
      </StyledRow>
    </>
  );
};

export default CocktailPage;
