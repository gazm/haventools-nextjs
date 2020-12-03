import Link from "next/link";
import React from "react";

const Header = () => (
  <header className="masthead mb-auto">
    <div className="inner">
      <h3 className="masthead-brand">Haven Tools</h3>
      <nav className="nav nav-masthead justify-content-center">
        <Link href="/">
          <a className="nav-link active">Home</a>
        </Link>
        <Link href="stats">
          <a className="nav-link active">Stats</a>
        </Link>
        <Link href="resources">
          <a className="nav-link active">Resources</a>
        </Link>
      </nav>
    </div>
  </header>
);

export default Header;
