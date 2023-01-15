import Nav from "./Nav";
import HeadFooter from "./HeadFooter";
import Footer from "./Footer";
import SignComponent from "./SignComponent";
import Hamburger from "./hamburger";
import Cookie from "./Cookie.js";
import useWindowDimensions from "./setWindowSize";

import "../style/sass/SignSection.sass";

function SignSection() {
  const { width } = useWindowDimensions();
  if (width > 768) {
    return (
      <div className="signSection">
        <Cookie />
        <header>
          <Nav />
        </header>
        <main>
          <SignComponent />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
  return (
    <div className="signSection">
      <Cookie />
      <header>
        <Hamburger />
        <HeadFooter />
      </header>
      <main>
        <SignComponent />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default SignSection;
