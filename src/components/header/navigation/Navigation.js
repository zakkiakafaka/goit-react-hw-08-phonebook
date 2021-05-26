import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import mainRoutes from "../../../routes/mainRoutes";
import UserMenu from "../../userMenu/UserMenu";
import NavigationListItem from "./NavigationListItem";

const Navigation = ({ location, isAuth }) => {
  return (
    <>
      <>
        <ul className="list">
          {mainRoutes.map(item => (
            <NavigationListItem item={item} location={location} key={item.path} isAuth={isAuth} />
          ))}
          {isAuth && <UserMenu />}
        </ul>
      </>
    </>
  );
};

const mapStateToProps = state => {
  return {
    isAuth: state.auth.tokens.idToken
  };
};

export default connect(mapStateToProps)(withRouter(Navigation));
