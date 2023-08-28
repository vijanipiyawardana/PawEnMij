import PetGalleryItem from "./PetGalleryItem";
import { PetInfoType } from "./HomePage";
import { Col, Container, Row } from "react-bootstrap";

type PetGalleryProps = {
  petInfo: PetInfoType[];
};

const PetGallery = (props: PetGalleryProps) => {

  return (
    <section className= 'pet-gallery'>
      <Container>
        <Row xs={1} sm={2} md={3} lg={3}>
          {props.petInfo && props.petInfo.map((pet) => (
            <Col key={pet.id}>
              <PetGalleryItem pet={pet} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default PetGallery;
