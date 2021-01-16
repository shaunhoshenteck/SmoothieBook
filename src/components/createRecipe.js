import React, { useContext, useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Container, Button } from "react-bootstrap";
import { MyContext } from "../context/";

const CreateRecipe = () => {
  const context = useContext(MyContext);
  const [idIsValid, setValidId] = useState(false);
  const [currIngredientsArr, setcurrIngredientsArr] = useState([]);

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      id: "",
      ingredients: "",
      ingredientsArr: [],
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(1, "Must be at least 1 character")
        .required("Required"),
      description: Yup.string()
        .max(100, "Must be 100 characters or less")
        .required("Required"),
      id: Yup.string().required("Required"),
      ingredients: Yup.string(),
    }),
    onSubmit: (values) => {
      console.log(values);
      context.addSmoothie(values);
      console.log(context.state.smoothies);
    },
  });

  const validateId = () => {
    const id = formik.values.id;
    let tempId = true;
    context.state.smoothies.forEach((smoothie) => {
      if (smoothie.id === id) {
        tempId = false;
      }
    });
    setValidId(tempId);
  };

  const removeIngredient = (idx) => {
    let newArr = [...currIngredientsArr];
    newArr.splice(idx, 1);
    setcurrIngredientsArr(newArr);
    formik.values.ingredientsArr = newArr;
  };

  const addToIngredientsArr = (val) => {
    if (!val) return;
    val = val.trim();
    formik.values.ingredientsArr.push(val);
    setcurrIngredientsArr([...currIngredientsArr, val]);
    formik.values.ingredients = "";
  };

  return (
    <Container>
      <h1 className="text-center mt-5">Create Your Smoothie!</h1>
      <div className="col-md-12 mt-5">
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Smoothie Name</label>
            <input
              className="form-control"
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="mt-2 alert alert-danger">
                {formik.errors.name}
              </div>
            ) : null}
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              className="form-control"
              id="description"
              name="description"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.description}
            />
            {formik.touched.description && formik.errors.description ? (
              <div className="mt-2 alert alert-danger">
                {formik.errors.description}
              </div>
            ) : null}
          </div>
          <div className="form-group">
            <label htmlFor="id">Create a unique ID for your smoothie</label>
            <input
              className="form-control"
              id="id"
              name="id"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.id}
            />
            {formik.touched.id && formik.errors.id ? (
              <div className="mt-2 alert alert-danger">{formik.errors.id}</div>
            ) : null}
            <Button
              className="mt-3 btn"
              type="button"
              onClick={() => validateId()}
            >
              Check id
            </Button>
            {idIsValid ? null : (
              <div className="mt-2 alert alert-danger">
                Id invalid/Already used! Please select another one
              </div>
            )}
          </div>
          <div className="form-group">
            <div className="row">
              <div className="col-8">
                <label htmlFor="ingredients">
                  Add to the ingredients list (Input name of ingredient,
                  quantity and measurement)
                </label>
                <input
                  className="form-control"
                  id="ingredients"
                  name="ingredients"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.ingredients}
                />
                {formik.touched.ingredients && formik.errors.ingredients ? (
                  <div className="alert alert-danger">
                    {formik.errors.ingredients}
                  </div>
                ) : null}
              </div>
              <div className="d-flex align-items-end col-4">
                <Button
                  className="w-50 btn"
                  type="button"
                  onClick={() => addToIngredientsArr(formik.values.ingredients)}
                >
                  Add!
                </Button>
              </div>
            </div>
          </div>
          <div>
            <ul className="list-group">
              {currIngredientsArr.length > 0
                ? currIngredientsArr.map((item, idx) => {
                    return (
                      <li
                        key={idx}
                        className="list-group-item d-flex justify-content-between align-items-center list-group-item-action"
                      >
                        {item}
                        <span
                          className="badge badge-danger"
                          onClick={() => removeIngredient(idx)}
                        >
                          x
                        </span>
                      </li>
                    );
                  })
                : null}
            </ul>
          </div>
          <Button
            onClick={() => validateId()}
            className="mt-3 btn"
            type="submit"
            disabled={!idIsValid ? true : false}
          >
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default CreateRecipe;
