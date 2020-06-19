import yodaImage from "../../assets/images/yoda-image.gif";
import cocktailsImage from "../../assets/images/cocktail-image.gif";
import moviesImage from "../../assets/images/movie-image.gif";
import aboutImage from "../../assets/images/about-image.gif";

import { PATHNAMES } from "../../config/pathnames";

export const menuItems = [
  {
    menuTitle: "About",
    image: aboutImage,
    link: PATHNAMES.ABOUT,
  },
  {
    menuTitle: "Cocktails",
    image: cocktailsImage,
    link: PATHNAMES.COCKTAIL,
  },
  {
    menuTitle: "Movies",
    image: moviesImage,
    link: PATHNAMES.MOVIE,
  },
  {
    menuTitle: "Yoda",
    image: yodaImage,
    link: PATHNAMES.YODA,
  },
];
