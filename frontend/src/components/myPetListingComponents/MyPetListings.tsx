import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap"
import MyPetItem from "./MyPetItem";

export type MyPetInfoType = {
  id: string;
  type: string;
  breed: string;
  gender: string;
  status: string;
  name: string;
  age: number;
  vaccinated: boolean;
  chipped: boolean;
  neutered: boolean;
  description: string;
  coverPhoto: string;
  allPhotos: string[];
}

const MyPetListings = () => {

  const params = useParams();
  // const ownerId = params["id"];
  // const ownerId = "2cf54cb0-1bd0-11ee-be56-0242ac120002";
  const ownerId = "2cf54efe-1bd0-11ee-be56-0242ac120002";
  const [myPetList, setMyPetList] = useState<MyPetInfoType[]>([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios.get(`http://localhost:3000/api/owner/${ownerId}/pets`)
      .then(response => response.data)
      .then(data => setMyPetList(data));
  }, [count]);

  const onMyPetRemove = (id: string) => {
    setMyPetList(myPetList.filter(pet => pet.id !== id));
  }

  return (

    <section className = 'my-listings'>
      <Container>
      <Row xs={1} sm={2} md={3} lg={4}>
        {myPetList && myPetList.map((myPet) => (
          <Col key={myPet.id}>
            <MyPetItem myPet={myPet} onMyPetRemove={onMyPetRemove} />
          </Col>
        ))}
      </Row>
      </Container>
    </section>

  )
}

export default MyPetListings