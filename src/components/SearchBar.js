import { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";

//GET random recipies https://api.spoonacular.com/recipes/random

const getApi = () => {
  axios
    .get(
      "https://api.spoonacular.com/recipes/apiKey=a533e2307051473fb5f98b82a7dc306d"
    )
    .then((response) => {
      console.log(response);
    });
};

export const SearchBar = ({ setSearchTerm }) => {
  const initialValues = { searchTerm: "" };

  const validationSchema = Yup.object({
    searchTerm: Yup.string().required("Please enter a search term"),
  });

  const onSubmit = ({ searchTerm }) => {
    setSearchTerm(searchTerm);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit} className="d-flex" role="search">
      <div class="p-2 w-100">
        <div>
          <input
            id="searchTerm"
            className="form-control me-2"
            placeholder="Enter a recipe"
            value={formik.values.searchTerm}
            onChange={formik.handleChange}
          ></input>
          {formik.errors.searchTerm && (
            <div class="form-text text-danger">{formik.errors.searchTerm}</div>
          )}
        </div>
      </div>
      <div class="p-2 flex-shrink-1">
        <button class="btn btn-outline-success" type="submit">
          Search
        </button>
      </div>
    </form>
  );
};
