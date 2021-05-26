import React from "react";
import { connect } from "react-redux";
import { logOut } from "../../redux/auth/authActions";

const UserMenu = ({ email, isAuth, logOut }) => {
  return (
    <>
      <p className="">{email}</p>
      {isAuth && (
        <button className="logOutBtn" type="button" onClick={() => logOut()}>
          LogOut
        </button>
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    email: state.auth.tokens.email,
    isAuth: state.auth.tokens.idToken
  };
};

export default connect(mapStateToProps,{ logOut })(UserMenu);