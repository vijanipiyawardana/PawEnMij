import { useEffect, useState } from "react";
import PetGallery from "./PetGallery"
import axios from 'axios';

export type PetInfoType = {
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
  ownerId: string;
  ownerName: string;
  ownerEmail: string;
  ownerContact: string;
  ownerHouseNumber: string;
  ownerStreetName: string;
  ownerPostcode: string;
  ownerCity: string;
  coverPhoto: string;
  allPhotos: string[];
}

const homePage = () => { 

  const [petList, setPetList] = useState<PetInfoType[]>([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:3000/api/pets")
        .then(response => response.data)
        .then(data => setPetList(data));
  }, [count]);

  return (
    <div>
      <h1>Home page</h1>
      <PetGallery petInfo={petList}/> 
    </div>
  )
}

export default homePage
