import { FaPizzaSlice } from "react-icons/fa";

export const Navbar = () => {
  return (
    <section className="navBarSection">
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
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Favourites
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Popular
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Diets and Allergies
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Vegan
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Vegetarian
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Gluten Free
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Dairy Free
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};
