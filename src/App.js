import { Navbar } from "./components/Navbar";
import { SearchBar } from "./components/SearchBar";

export const App = () => {
  return (
    <section className="page-body">
      {/* Navigation Bar */}
      <div className="navbar-body">
        <Navbar />
      </div>
      <SearchBar />
    </section>
  );
};
