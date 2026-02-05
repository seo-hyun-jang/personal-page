import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import TopBtn from "../components/TopBtn.jsx";
import "../App.css";  

export default function Layout({ children }) {
  return (
    <>
    <div>
      <Header />    
      <main>{children}</main>
      <Footer />
      <TopBtn />
    </div>
    </>
  );
}
