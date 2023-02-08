import { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";

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
      <div className="p-2 w-100">
        <div>
          <input
            id="searchTerm"
            className="form-control me-2"
            placeholder="Enter an ingredient"
            value={formik.values.searchTerm}
            onChange={formik.handleChange}
          ></input>
          {formik.errors.searchTerm && (
            <div className="form-text text-danger">
              {formik.errors.searchTerm}
            </div>
          )}
        </div>
      </div>
      <div className="p-2 flex-shrink-1">
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </div>
    </form>
  );
};
