import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { loginOperation, registerOperation } from "../../redux/auth/authOperations";
import schema from "./validation/validator";

class AuthForm extends Component {
  state = {};
  render() {
    return (
      <>
        <>
          {this.props.location.pathname === "/registration" ? <h1>SIGN UP</h1> : <h1>SIGN IN</h1>}
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={schema}
            onSubmit={values => {
              console.log(values);
              this.props.location.pathname === "/registration"
                ? this.props.registerOperation(values)
                : this.props.loginOperation(values);
            }}
          >
            {(
              { isSubmitting } 
            ) => (
              <Form>
                <Field className="emailInput" type="email" name="email" placeholder="Write your email" />
                <ErrorMessage name="email" component="div" />
                <Field className="passwordInput" type="password" name="password" placeholder="Write your password" />
                <ErrorMessage name="password" component="div" />
                <button className="btnSign" type="submit" disabled={isSubmitting}>
                  {this.props.location.pathname === "/registration" ? "SIGN UP" : "SIGN IN"}
                </button>
              </Form>
            )}
          </Formik>
        </>
      </>
    );
  }
}

export default connect(
  null,{ registerOperation, loginOperation })(withRouter(AuthForm));