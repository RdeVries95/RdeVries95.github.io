import yodaImage from "../../assets/images/yoda-image.jpg"
import cocktailsImage from "../../assets/images/cocktail-image.jpg"
import moviesImage from "../../assets/images/movies-image.jpg"
import formsImage from "../../assets/images/forms-image.jpeg"

import { PATHNAMES } from "../../config/pathnames"


export const menuItems = [
  {
    menuTitle: "Yoda",
    image: yodaImage,
    link: PATHNAMES.YODA
  },
  {
    menuTitle: "Cocktails",
    image: cocktailsImage,
    link: PATHNAMES.COCKTAIL
  },
  {
    menuTitle: "Movies",
    image: moviesImage,
    link: PATHNAMES.MOVIE
  },
  {
    menuTitle: "Forms",
    image: formsImage,
    link: PATHNAMES.FORMS
  },
];
