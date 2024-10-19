import "./Navigation.css";

interface Props {
  isLoggedIn: boolean;
  navList: {
    id: number;
    icon: string;
    help_text: string;
  }[];
}

const Navigation = ({ navList, isLoggedIn }: Props) => {
  return (
    <>
      {isLoggedIn && (
        <div className="navigation-container">
          <nav className="navigation-contents">
            <img
              id="positive-space-icon"
              src=".././public/img/positiveSpace.png"
              alt="positive space icon"
            />
            <ul>
              {navList.map((nav) => (
                <li key={nav.id} className="default-menu">
                  <img src={nav.icon} alt={nav.help_text} />
                </li>
              ))}
              <li className="default-menu">
                <img
                  id="user-icon"
                  src=".././public/img/Black_WhiteJiezel.png"
                  alt="upload icon"
                />
              </li>
              <li className="hamburger-menu">
                <img src=".././public/img/hamburger.png" alt="hamburger menu" />
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navigation;
