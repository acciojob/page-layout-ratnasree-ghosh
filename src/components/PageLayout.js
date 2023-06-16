import React from "react";
import Header from "./Header";
import Footer from "./Footer";


const PageLayout = ({children}) => {
  return (
    <div>
        <Header content="welcome to my website"/>
        {children}
        <Footer content="© 2023 My Website.All rghts reserved"/>
    </div>
  )
}

export default PageLayout;