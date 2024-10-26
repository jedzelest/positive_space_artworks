import "./Navigation.css";

interface Props {
  isLoggedIn: boolean;
  navList: {
    id: number;
    label: string;
    icon: string;
    help_text: string;
  }[];
}

const Navigation = ({ navList, isLoggedIn }: Props) => {
  return (
    <>
      {isLoggedIn && (
        <div>
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
                  <img
                    src=".././public/img/hamburger.png"
                    alt="hamburger menu"
                  />
                </li>
              </ul>
            </nav>
          </div>
          <div className="responsive-menu">
            <nav className="responsive-nav">
              <ul>
                {navList.map((nav) => (
                  <li key={nav.id}>
                    <img src={nav.icon} alt={nav.help_text} />
                    <h3>{nav.label}</h3>
                  </li>
                ))}
                <li>
                  <img
                    id="user-icon"
                    src=".././public/img/Black_WhiteJiezel.png"
                    alt="upload icon"
                  />
                  <h3>Log-out</h3>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
