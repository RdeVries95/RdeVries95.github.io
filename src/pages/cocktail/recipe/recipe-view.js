// Architectural imports
import React, { useState, useEffect, useRef } from "react";
import { useParams } from "@reach/router";

// Styled imports
import { StyledColumn, RecipeCard, RecipeImage, UL, P, Header } from "./recipe-style";

// Components
import PageHeader from "../../../components/constructs/page-header/page-header-view";
import BackButton from "../../../components/constructs/back-button/back-button-view";

// Endpoints
import Cocktails from "../../../api/Cocktails";

const RecipePage = () => {
  const [cocktail, setCocktail] = useState();

  const params = useParams();

  let api = useRef(null);

  useEffect(() => {
    api.current = new Cocktails();
    api.current.getCocktailById({ i: params.cocktailId }).then((result) => {
      setCocktail(result);
    });
  }, [params.cocktailId]);

  return (
    <StyledColumn>
      {cocktail ? (
        <PageHeader title={cocktail.data.drinks[0].strDrink} />
      ) : null}
      <BackButton />
      {cocktail ? (
        <RecipeCard>
          <StyledColumn>
            <Header>Ingredients:</Header>
            <UL>
              {cocktail.data.drinks[0].strIngredient1 ? (
                <li>{cocktail.data.drinks[0].strIngredient1}</li>
              ) : null}
              {cocktail.data.drinks[0].strIngredient2 ? (
                <li>{cocktail.data.drinks[0].strIngredient2}</li>
              ) : null}
              {cocktail.data.drinks[0].strIngredient3 ? (
                <li>{cocktail.data.drinks[0].strIngredient3}</li>
              ) : null}
              {cocktail.data.drinks[0].strIngredient4 ? (
                <li>{cocktail.data.drinks[0].strIngredient4}</li>
              ) : null}
              {cocktail.data.drinks[0].strIngredient5 ? (
                <li>{cocktail.data.drinks[0].strIngredient5}</li>
              ) : null}
              {cocktail.data.drinks[0].strIngredient6 ? (
                <li>{cocktail.data.drinks[0].strIngredient6}</li>
              ) : null}
              {cocktail.data.drinks[0].strIngredient7 ? (
                <li>{cocktail.data.drinks[0].strIngredient7}</li>
              ) : null}
            </UL>
            <Header>How to make:</Header>
            <P>{cocktail.data.drinks[0].strInstructions}</P>
          </StyledColumn>
          <RecipeImage src={cocktail.data.drinks[0].strDrinkThumb} />
        </RecipeCard>
      ) : null}
    </StyledColumn>
  );
};

export default RecipePage;
