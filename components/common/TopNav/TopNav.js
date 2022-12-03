import Header from "./Header";
import Nav from "./Nav/Nav";

const TopNav = () => {
  return (
    <>
      <header className="sticky top-0 bg-[#FFF] z-[100]">
        <Header />
        <Nav />
      </header>
    </>
  );
};

export default TopNav;
