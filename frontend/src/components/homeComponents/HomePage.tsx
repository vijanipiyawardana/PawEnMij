import { useEffect, useState } from "react";
import PetGallery from "./PetGallery"
import axios from 'axios';
import './HomePage.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

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
  description: string;
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
      <div className="jumbotron welcome-message">
        <h1 className="display-6 intro-title">Welcome to Paw en Mij</h1>
        <p className="lead intro-desc">"Adopting a pet is not just about giving them a home, but about finding a forever companion who will fill your life with unconditional love and joy."</p>
      </div>
      <PetGallery petInfo={petList}/> 
    </div>
  )
}

export default homePage
