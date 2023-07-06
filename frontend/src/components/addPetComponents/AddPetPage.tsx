import { useState } from "react";
import CheckBox from "./CheckBox";
import Dropdown from "./Dropdown";
import axios from 'axios';

type PetFormDataType = {
  type: string;
  breed: string;
  age: number;
  name: string;
  gender: string;
  vaccinated: boolean;
  chipped: boolean;
  neutered: boolean;
  description: string;
  ownerId: string;
  status: string;
}

const AddPetPage = () => {

  const [savedPetId, setSavedPetId] = useState("");

  const [petFormData, setPetFormData] = useState<PetFormDataType>({type: "Dog", gender: "Male", status: "Available", vaccinated: false, chipped: false, neutered: false} as PetFormDataType);

  const handleFormOnSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {

      // for now, hardcoding the petOwner, later remove
      petFormData.ownerId = "2cf54efe-1bd0-11ee-be56-0242ac120002";

      await axios.post("http://localhost:3000/api/pets", petFormData)
      .then(reponse => {
        console.log(reponse)
        console.log(reponse.headers)
        setSavedPetId(reponse.headers.location);
      });
    } catch (error) {
      console.error("Error:", error);      
    }
  }

  const handleFormOnChange = async (e:React.FormEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement> | React.FormEvent<HTMLTextAreaElement>) => {
    switch(e.currentTarget.id) {
      case "petTypeInput":
        setPetFormData({...petFormData, type:e.currentTarget.value}); break;
      case "petBreedInput":
        setPetFormData({...petFormData, breed:e.currentTarget.value}); break;
      case "petAgeInput":
        setPetFormData({...petFormData, age:Number(e.currentTarget.value)}); break;
      case "petNameInput":
        setPetFormData({...petFormData, name:e.currentTarget.value}); break;
      case "petGenderInput":
        setPetFormData({...petFormData, gender:e.currentTarget.value}); break;
      case "petIsVaccinated":
        setPetFormData({...petFormData, vaccinated:((e.currentTarget as HTMLInputElement).checked)}); break;
      case "petIsChipped":
        setPetFormData({...petFormData, chipped:((e.currentTarget as HTMLInputElement).checked)}); break;  
      case "petIsNeutered":
        setPetFormData({...petFormData, neutered:((e.currentTarget as HTMLInputElement).checked)}); break;
      case "petDescInput":
        setPetFormData({...petFormData, description:e.currentTarget.value}); break;
    }
  }

  return (
    <div className="border border-dark mx-4 my-4 px-4 py-4">
      <h2 className="text-center">Add new pet</h2>
      
      { savedPetId.length == 0 && 
      <form id="addNewPetForm" className="form" onSubmit={handleFormOnSubmit}>

        <div className="mb-3"><label htmlFor="petTypeDropdown" className="input_label">Pet type</label></div>
        <div><Dropdown id="petTypeInput" items={["Dog", "Cat"]} onChange={handleFormOnChange}/></div>

        <div><label htmlFor="petBreedInput" className="input_label">Breed</label></div>
        <div><input className="form_input-breed" id="petBreedInput" type="text" onChange={handleFormOnChange} /></div>

        <div><label htmlFor="petAgeInput" className="input_label">Age</label></div>
        <div><input className="form_input-age" id="petAgeInput" type="number" onChange={handleFormOnChange} /></div>

        <div><label htmlFor="petNameInput" className="input_label">Name</label></div>
        <div><input className="form_input-name" id="petNameInput" type="text" onChange={handleFormOnChange}/></div>

        <div><label htmlFor="petGenderInput" className="input_label">Gender</label></div>
        <div><Dropdown id="petGenderInput" items={["Male", "Female"]} onChange={handleFormOnChange} /></div>

        <div><CheckBox id="petIsVaccinated" label="Vaccinated" onChange={handleFormOnChange} /></div>
        <div><CheckBox id="petIsChipped" label="Chipped" onChange={handleFormOnChange} /></div>
        <div><CheckBox id="petIsNeutered" label="Neutered" onChange={handleFormOnChange} /></div>

        <div><label htmlFor="petDescInput" className="input_label">Description</label></div>
        <div><textarea className="form_input-desc" id="petDescInput" onChange={handleFormOnChange}></textarea></div>

        <button className="form_button-addPet">Add pet</button>

      </form>}
      { savedPetId.length > 0 && 
        <h1>Upload phtos for {petFormData.name}</h1>
      }
    </div>
  )
}

export default AddPetPage
