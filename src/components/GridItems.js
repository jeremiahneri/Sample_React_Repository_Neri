import { Button, Card } from "react-bootstrap";

const GridItems = (props) => {
  return (
    <>
      <div className="col-4">
        <Card>
          <Card.Img variant="top" src={props.imageFile} />{" "}
          <Card.Body className="bg-dark">
            <Card.Title className="text-light">{props.name}</Card.Title>{" "}
            <Card.Text className="text-light">
              {props.desc}
            </Card.Text> 
            <Button variant="light"> Go somewhere </Button>{" "}
          </Card.Body>{" "}
        </Card>{" "}
      </div>{" "}
    </>
  );
};

export default GridItems;
