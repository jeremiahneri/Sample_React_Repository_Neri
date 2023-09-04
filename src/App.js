import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/NavigationBar";
import Banner from "./components/Banner";
import image1 from "./components/images/1.jpeg";
import image2 from "./components/images/2.jpeg";
import image3 from "./components/images/5.jpg";
import image4 from "./components/images/6.jpg";
import image5 from "./components/images/7.jpg";
import image6 from "./components/images/8.jpg";
import GridItems from "./components/GridItems";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavigationBar />
      <Banner />
      <div className="bg-dark p-5">
        <div className="container">
          {/* <h1 className="text-secondary"> Hello World </h1>{" "} */}
          <div className="row g-4 justify-content-center">
            <GridItems name="Black Clover" imageFile={image1} desc="Lorem Ipsum"></GridItems>
            <GridItems name="Dr Stone" imageFile={image2} desc="Lorem Ippo"></GridItems>
            <GridItems name="Reincarnated as a Slime"imageFile={image3} desc="Lorem Ipppa"></GridItems>
            <GridItems name="Dungeon ni Deai wo Motomeru "imageFile={image4} desc="Lorem Ipput"></GridItems>
            <GridItems name="Slamdunk"imageFile={image5} desc="Lorem Ipppi"></GridItems>
            <GridItems name="One Piece"imageFile={image6} desc="Lorem Ipppu"></GridItems>
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <Footer></Footer>
    </>
  );
}

export default App;
