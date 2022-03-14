import React from "react"
import { Route } from "react-router"
import { Redirect } from "react-router-dom"

import Header from "../../components/Header"

const LayoutHome = (props) => {
  //   let isLogin = false;
  //   if (localStorage.getItem("User")) {
  //     isLogin = true;
  //   }
  let isLogin = true
  return (
    <>
      <Header />
      {props.children}
      {/* <Footer /> */}
    </>
  )
}

const HomeTemplate = ({ Component, ...props }) => {
  return (
    <Route
      {...props}
      render={(propsComponent) => {
        return (
          <LayoutHome>
            <Component {...propsComponent} />
          </LayoutHome>
        )
      }}
    />
  )
}

export default HomeTemplate