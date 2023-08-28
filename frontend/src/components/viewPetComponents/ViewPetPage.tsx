import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PetInfoType } from "../homeComponents/HomePage";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Carousel from "react-bootstrap/Carousel";
import './ViewPetPage.css'
import Table from "react-bootstrap/Table";

const ViewPetPage = () => {
  const params = useParams();
  const petId = params["id"];
  const [pet, setPet] = useState<PetInfoType>({} as PetInfoType);
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/pets/${petId}`)
      .then((response) => response.data)
      .then((data) => setPet(data));
  }, [count]);

  return (
    <>
      <div className="container">
        <h1>{pet.type === 'Dog' ? '🐕' : '😺'} This is {pet.name}</h1>

        <Carousel>
          {pet.allPhotos &&
            pet.allPhotos.map((photoName) => (
              <Carousel.Item>
                <img className="d-block w-100 carousel-img" src={`http://localhost:3000/api/pets/photo/${photoName}`} alt="First slide" />
              </Carousel.Item>
            ))}
        </Carousel>

        <p>
          {pet.gender === "Female" && "She"}
          {pet.gender != "Female" && "He"}
          &nbsp; is waiting for you to take &nbsp;
          {pet.gender === "Female" && "her"} 
          {pet.gender != "Female" && "him"}
          &nbsp; home. 🏠 💝
        </p>

        <Table striped bordered hover>
          <tbody>
            <tr>
              <th>Name</th>
              <td>{pet.name}</td>
              <th>Age</th>
              <td>{pet.age} years old</td>
            </tr>
            <tr>
              <th>Gender</th>
              <td>{pet.gender}</td>
              <th>Breed</th>
              <td>{pet.breed}</td>
            </tr>
            <tr>
              <th>Chipped</th>
              <td>{pet.chipped}</td>
              <th>Vaccinated</th>
              <td>{pet.vaccinated}</td>
            </tr>
            <tr>
              <th>Neutered</th>
              <td>{pet.neutered}</td>
              <th></th>
              <td></td>
            </tr>
            <tr>
              <th>Located in</th>
              <td colSpan={3}>{pet.ownerCity}</td>
            </tr>
            <tr>
              <th>Contact Person</th>
              <td colSpan={3}>{pet.ownerName}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{pet.ownerEmail}</td>
              <th>Phone</th>
              <td>{pet.ownerContact}</td>
            </tr>
            <tr>
              <th>Address</th>
              <td colSpan={3}>
                {pet.ownerStreetName} {pet.ownerHouseNumber},{" "}
                {pet.ownerPostcode}, {pet.ownerCity}
              </td>
            </tr>
          </tbody>
        </Table>
        <h3 className="text-item">More about {pet.name} 😉 </h3>
        <p className="text-item">{pet.description}</p>
        <button className="btn btn-brown btn-lg"> Request to Adopt </button>
      </div>
    </>
  );
};

export default ViewPetPage;
