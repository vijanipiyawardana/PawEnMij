import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { PetInfoType } from "../homeComponents/HomePage";
import axios from 'axios';

const ViewPetPage = () => {

  const params = useParams();
  const petId = params["id"];
  const [pet, setPet] = useState<PetInfoType>({} as PetInfoType);
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios.get(`http://localhost:3000/api/pets/${petId}`)
        .then(response => response.data)
        .then(data => setPet(data));
  }, [count]);

  return (
    <>
      <div>
        {pet.allPhotos && pet.allPhotos.map(photoName => <img src={`http://localhost:3000/api/pets/photo/${photoName}`}/>)}
      </div>
      <div>
        <h1>Name: {pet.name}</h1>
      </div>
    </>
  )
}

export default ViewPetPage
