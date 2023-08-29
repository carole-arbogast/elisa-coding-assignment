import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCartShopping,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const navbarItems = {
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
      icon: (
        <FontAwesomeIcon icon={faSearch} className="text-primary w-6 px-0" />
      ),
      url: "/",
    },
    {
      title: "Ostokori",
      icon: (
        <FontAwesomeIcon
          icon={faCartShopping}
          className="text-primary w-6 px-0"
        />
      ),
      url: "/",
    },
    {
      title: "Kirjaudu",
      showTitle: true,
      icon: <FontAwesomeIcon icon={faUser} className="text-primary w-6 px-0" />,
      url: "/",
    },
  ],
};

export function Navbar() {
  return (
    <>
      <div className="flex border-b border-zinc-100">
        <div className="flex ml-5">
          <a href="/" className="py-18px pr-6 pl-0">
            <img src="/Elisa_logo_blue_RGB.png" alt="Elisa" width={72} />
          </a>
        </div>
        <nav className="flex flex-1 items-center">
          <ol className="hidden lg:flex">
            {navbarItems.rightSide.map((item) => (
              <li
                key={item.title}
                className="font-semibold text-lg text-primary px-3 py-26px hover:bg-lightBackground"
              >
                <a href="/" className="">
                  {item.title}
                </a>
              </li>
            ))}
          </ol>
          <ol className="flex content-end ml-auto px-6">
            {navbarItems.leftSide.map((item, i) => (
              <li key={i} className="px-3">
                <button title={item.title}>
                  {item.icon}
                  {item.showTitle && (
                    <span className="hidden text-primary ml-1.5 lg:inline">
                      {item.title}
                    </span>
                  )}
                </button>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
