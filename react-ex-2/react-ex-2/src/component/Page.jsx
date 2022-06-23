import React from "react";
import Content from './Content';
import Footer from './Footer';
import Header from './Header';

const Page = ({ isDark, setIsDark }) => {
  return (
    <div className="page">
      <Header isDark={isDark}/>
      <Footer isDark={isDark} setIsDark={setIsDark}/>
      <Content isDark={isDark}/>
    </div>
  )
}

export default Page;