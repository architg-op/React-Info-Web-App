import logo from '../logo.svg';

export default function Header() {
    return (
      <nav>
        <img
          className="nav--icon"
          src={logo}
          alt="Hum karte hai prabandh, aap chinta mat kijiye!"
        />
        <h3 className="nav--logo_text"> React Facts</h3>
        <h4 className="nav--title">React Course - Project 1</h4>
      </nav>
    );
  }