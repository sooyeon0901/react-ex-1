import React from "react";
import Content from './Content';
import Footer from './Footer';
import Header from './Header';

const Page = () => {
  // context로 전달한 정보 받아오기 
  // const data = useContext(ThemeContext);
  // console.log('data =',data);

  return (
    <div className="page">
      <Header/>
      <Footer/>
      <Content/>
    </div>
  )
}

export default Page;