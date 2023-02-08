import { FaPizzaSlice } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <section>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        style={{ fontSize: "20px" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <FaPizzaSlice style={{ fontSize: "30px" }} />
          </a>
          <h1 className="titleRecipe" style={{ fontSize: "35px" }}>
            Recipe Finder{" "}
          </h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link className="nav-link" to="/">
                <li className="nav-item">Home</li>
              </Link>
              <Link className="nav-link" to="/favourites">
                <li className="nav-item">Favourites</li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};
