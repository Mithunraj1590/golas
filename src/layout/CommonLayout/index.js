import Footer from "../../components/Footer";
import Menu from "../../components/Menu";


const CommonLayout = ({ children }) => {
  return (
    <>
      <Menu/>
      <div className="switcher">{children}</div>
      <Footer />
    </>
  );
};

export default CommonLayout;
