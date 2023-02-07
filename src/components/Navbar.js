import { FaPizzaSlice } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <section>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <FaPizzaSlice />
          </a>
          <h1 className="titleRecipe">Recipe Finder</h1>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <Link className="nav-link" to="/">
                <li class="nav-item">Home</li>
              </Link>
              <Link className="nav-link" to="/favourites">
                <li class="nav-item">Favourites</li>
              </Link>
              <Link className="nav-link" to="/popular">
                <li class="nav-item">Popular</li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};
