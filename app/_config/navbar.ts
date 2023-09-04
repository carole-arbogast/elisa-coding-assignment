import {
  IconDefinition,
  faCartShopping,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

interface NavbarItem {
  title: string;
  url: string;
  icon: IconDefinition;
  showTitle?: boolean;
}

interface NavbarItems {
  rightSide: Omit<NavbarItem, "icon" | "showTitle">[];
  leftSide: NavbarItem[];
}

export const navbarItems: NavbarItems = {
  rightSide: [
    {
      title: "Tuotteet ja palvelut",
      url: "/",
    },
    {
      title: "5G",
      url: "/",
    },
    {
      title: "Ideat",
      url: "/",
    },
    {
      title: "Asiakaspalvelu ja tuki",
      url: "/",
    },
    {
      title: "OmaElisa 24/7",
      url: "/",
    },
  ],
  leftSide: [
    {
      title: "Haku",
      icon: faSearch,
      url: "/",
    },
    {
      title: "Ostokori",
      icon: faCartShopping,
      url: "/",
    },
    {
      title: "Kirjaudu",
      showTitle: true,
      icon: faUser,
      url: "/",
    },
  ],
};

export const upperNavbarItems: Omit<NavbarItem, "icon" | "showTitle">[] = [
  {
    title: "Yksityisille",
    url: "#",
  },
  {
    title: "Yrityksille",
    url: "#",
  },
  {
    title: "Elisa Oyj",
    url: "#",
  },
];
