import { ErrorMessage, Field, Formik } from "formik";
import React from "react";
import { initialValues } from "./constant";
import { updateSchema } from "./schema";
const UpdateForm = ({ handleSubmit, selectedUser }) => {
  initialValues.name = selectedUser.name;
  initialValues.email = selectedUser.email;
  initialValues.phone = selectedUser.phone;
  initialValues.website = selectedUser.website;

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={updateSchema}
      >
        {({ handleSubmit, isSubmitting, setFieldValue }) => (
          <form onSubmit={handleSubmit}>
            <div className="mb-4 ">
              <label className="d-flex align-items-center gap-2 ">
                <span className="">Name:</span>
                <Field
                  type="text"
                  className="form-control ms-2 "
                  placeholder="Enter your name"
                  name="name"
                />
              </label>
              <span className="ms-5 ps-3 text  fs-6 text-danger">
                {" "}
                <ErrorMessage className="ps-2" name="name" />{" "}
              </span>
            </div>
            <div className="mb-4">
              <label className="d-flex align-items-center gap-2  ">
                <span className="">Email:</span>
                <Field
                  type="email"
                  className="form-control ms-3 "
                  placeholder="Enter your name"
                  name="email"
                />
              </label>
              <span className="ms-5 ps-3 text  fs-6 text-danger">
                {" "}
                <ErrorMessage name="email" />{" "}
              </span>
            </div>
            <div className="mb-4">
              <label className="d-flex align-items-center gap-2 ">
                <span className="">Phone:</span>
                <Field
                  type="text"
                  className="form-control ms-2  "
                  placeholder="Number"
                  name="phone"
                />
              </label>
              <span className="ms-5 ps-3 text  fs-6 text-danger">
                <ErrorMessage name="phone" />{" "}
              </span>
            </div>
            <div className="mb-4">
              <label className="d-flex align-items-center gap-2 ">
                <span className="">Website:</span>
                <Field
                  type="text"
                  className="form-control w-10 "
                  placeholder="Enter your name"
                  name="website"
                />
              </label>
              <span className="ms-5 ps-3 text  fs-6 text-danger">
                <ErrorMessage name="website" />
              </span>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="submit"
                data-bs-dismiss="modal"
                className="btn btn-primary"
              >
                save
              </button>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
};

export default UpdateForm;
