import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const NavigationBar = () => {
  return (
    <>
      <Navbar className="bg-dark text-center">
        <Navbar.Brand className="text-light">Anime List</Navbar.Brand>
      </Navbar>
    </>
  );
};

export default NavigationBar;