import Link from "next/link";

const header = () => (
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
      </nav>
    </div>
  </header>
);

export default header;
