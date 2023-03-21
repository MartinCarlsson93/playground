import Link from "next/link";

const Header = () => {
  return (
    <nav className="header">
      <div className="logo"></div>
      <div>
        <h2>Martins Playground</h2>
      </div>
      <div className="links">
        {/*    <Link> Home link here</Link> */}

        <Link href="/">Home</Link>
      </div>
    </nav>
  );
};

export default Header;
