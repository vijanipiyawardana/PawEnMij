
import { useEffect, useState } from "react";
import CheckBox from "./CheckBox";
import Dropdown from "./Dropdown";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AddPetPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

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
};

const AddPetPage = () => {
  const [petFormData, setPetFormData] = useState<PetFormDataType>({
    type: "Dog",
    gender: "Male",
    status: "Available",
    vaccinated: false,
    chipped: false,
    neutered: false,
  } as PetFormDataType);
  const [savedPetIdLocation, setSavedPetIdLocation] = useState("");
  const [photo, setPhoto] = useState<File>();
  const [uploadedPhotos, setUploadedPhotos] = useState<string[]>([]);
  const [uploadedPhotoCount, setUploadedPhotoCount] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const navigator = useNavigate();

  const handleFormOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // for now, hardcoding the petOwner, later remove
      petFormData.ownerId = "2cf54efe-1bd0-11ee-be56-0242ac120002";

      if (validateForm()) {
        await axios
          .post("http://localhost:3000/api/pets", petFormData)
          .then((reponse) => {
            console.log(reponse);
            console.log(reponse.headers);
            setSavedPetIdLocation(reponse.headers.location);
          });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const validateForm = () => {
  
    if (!petFormData.type) {
      setErrorMessage("Please select a type");
      return false;
    }
    if (!petFormData.breed) {
      setErrorMessage("Please enter your pets breed");
      return false;
    }
    console.log(
      petFormData.age +
        "---" +
        !petFormData.age +
        "---" +
        !isNaN(petFormData.age) +
        "---" +
        (petFormData.age <= 0)
    );
    if (!petFormData.age || isNaN(petFormData.age) || petFormData.age <= 0) {
      setErrorMessage("Please select enter a valid age");
      return false;
    }
    if (!petFormData.name) {
      setErrorMessage("Please enter your pets name");
      return false;
    }
    if (!petFormData.description) {
      setErrorMessage("Please enter a description");
      return false;
    }
    setErrorMessage("");
    return true;
  };

  const handleFormOnChange = async (
    e:
      | React.FormEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.FormEvent<HTMLTextAreaElement>
  ) => {
    switch (e.currentTarget.id) {
      case "petTypeInput":
        setPetFormData({ ...petFormData, type: e.currentTarget.value });
        break;
      case "petBreedInput":
        setPetFormData({ ...petFormData, breed: e.currentTarget.value });
        break;
      case "petAgeInput":
        setPetFormData({ ...petFormData, age: Number(e.currentTarget.value) });
        break;
      case "petNameInput":
        setPetFormData({ ...petFormData, name: e.currentTarget.value });
        break;
      case "petGenderInput":
        setPetFormData({ ...petFormData, gender: e.currentTarget.value });
        break;
      case "petIsVaccinated":
        setPetFormData({
          ...petFormData,
          vaccinated: (e.currentTarget as HTMLInputElement).checked,
        });
        break;
      case "petIsChipped":
        setPetFormData({
          ...petFormData,
          chipped: (e.currentTarget as HTMLInputElement).checked,
        });
        break;
      case "petIsNeutered":
        setPetFormData({
          ...petFormData,
          neutered: (e.currentTarget as HTMLInputElement).checked,
        });
        break;
      case "petDescInput":
        setPetFormData({ ...petFormData, description: e.currentTarget.value });
        break;
    }
  };

  const onFileChange = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.files) {
      setPhoto(e.currentTarget.files[0]);
    }
  };

  const onFileUpload = () => {
    if (!photo) {
      return;
    }
    // Create empty form and add the photo to that form, photo has to be uploaded as multipart/form-data
    const photoFormData = new FormData();
    photoFormData.append("photo", photo);

    axios.post(`http://localhost:3000${savedPetIdLocation}/photo`, photoFormData, {
        // set the content-type as multipart/form-data
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((reponse) => {
        console.log(reponse);
        setUploadedPhotoCount(uploadedPhotoCount + 1);
      })
      .catch((err) => console.error(err));
  };

  const onFinishAddingPet = () => {
    navigator("/");
  };

  // to retrieve the uploaded photo, only called if the photo count is changed, otherwise it will be an infinite loop
  useEffect(() => {
    if (uploadedPhotoCount > 0) {
      axios
        .get(`http://localhost:3000${savedPetIdLocation}`)
        .then((response) => response.data)
        .then((data) => setUploadedPhotos(data.allPhotos));
    }
  }, [uploadedPhotoCount]);

  return (
    <div className="border border-white mx-4 my-4 px-4 py-4">
      <h2 className="text-center title-text">Add new pet</h2>

      {/* Add Pet Info form */}
      {savedPetIdLocation.length == 0 && (
        <form id="addNewPetForm" className="form" onSubmit={handleFormOnSubmit}>
          <div className="mb-3">
            <label htmlFor="petTypeDropdown" className="input_label">
              Pet type
            </label>
          </div>
          <div>
            <Dropdown
              id="petTypeInput"
              items={["Dog", "Cat"]}
              onChange={handleFormOnChange}
            />
          </div>

          <div>
            <label htmlFor="petBreedInput" className="input_label">
              Breed
            </label>
          </div>
          <div>
            <input
              className="form_input rounded"
              id="petBreedInput"
              type="text"
              onChange={handleFormOnChange}
            />
          </div>

          <div>
            <label htmlFor="petAgeInput" className="input_label">
              Age
            </label>
          </div>
          <div>
            <input
              className="form_input rounded"
              id="petAgeInput"
              type="text"
              onChange={handleFormOnChange}
            />
          </div>

          <div>
            <label htmlFor="petNameInput" className="input_label">
              Name
            </label>
          </div>
          <div>
            <input
              className="form_input rounded"
              id="petNameInput"
              type="text"
              onChange={handleFormOnChange}
            />
          </div>

          <div>
            <label htmlFor="petGenderInput" className="input_label">
              Gender
            </label>
          </div>
          <div>
            <Dropdown
              id="petGenderInput"
              items={["Male", "Female"]}
              onChange={handleFormOnChange}
            />
          </div>

          <div className="container">
            <div className="checkbox-row">
              <div className="col-md-4">
                <CheckBox
                  id="petIsVaccinated"
                  label="Vaccinated"
                  onChange={handleFormOnChange}
                />
              </div>
              <div className="col-md-4">
                <CheckBox
                  id="petIsChipped"
                  label="Chipped"
                  onChange={handleFormOnChange}
                />
              </div>
              <div className="col-md-4">
                <CheckBox
                  id="petIsNeutered"
                  label="Neutered"
                  onChange={handleFormOnChange}
                />
              </div>
            </div>
          </div>

          <div>
            <label
              htmlFor="petDescInput"
              className="input_label input-description"
            >
              Description
            </label>
          </div>
          <div>
            <textarea
              className="form_input-textarea rounded"
              id="petDescInput"
              onChange={handleFormOnChange}
            ></textarea>
          </div>
          {errorMessage.length > 0 && (
            <div className="alert alert-danger" role="alert">
              {errorMessage}
            </div>
          )}
          <button className="form_button-addPet">Next</button>
        </form>
      )}



      {/* Upload photo form */}
      {savedPetIdLocation.length > 0 && (
        <div>
          <div>
            <h4 className="title-text">Upload photos for {petFormData.name}</h4>

            <input type="file" onChange={onFileChange} />
            <button className="form_button-photo-upload" onClick={onFileUpload}>
              Add Photo
            </button>
            <br />
            <button className="form_button-addPet" onClick={onFinishAddingPet}>
              Finish Adding Pet
            </button>
          </div>

          {/* displays the uploaded photos */}
          <div>
            {uploadedPhotos &&
              uploadedPhotos.map((photo) => (
                <img src={`http://localhost:3000/api/pets/photo/${photo}`} 
                className="img-thumbnail img-uploaded"/>
              ))}
          </div>

        </div>
      )}
    </div>
  );
};

export default AddPetPage;
