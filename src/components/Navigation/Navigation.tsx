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
    <div className="navigation-container">
      <nav className="navigation-contents">
        <img
          id="positive-space-icon"
          src=".././public/img/positiveSpace.png"
          alt="positive space icon"
        />
        <ul>
          {navList.map((nav) => (
            <li key={nav.id}>
              <img src={nav.icon} alt={nav.help_text} />
            </li>
          ))}
          <li>
            <img
              id="user-icon"
              src=".././public/img/Black_WhiteJiezel.png"
              alt="upload icon"
            />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
