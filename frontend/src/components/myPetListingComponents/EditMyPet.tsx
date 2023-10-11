import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PetInfoType } from "../homeComponents/HomePage";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import "./EditMyPet.css"
import DeletePetPhotoModel from "./DeletePetPhotoModel";
import { errorAlert } from '../commonComponents/helpers/ErrorHandler';
import { errorMessages } from '../commonComponents/constants/Constants';
import AddNewImage from '../../assets/images/addNew.png';
import Tooltip from "react-bootstrap/Tooltip";
import { OverlayTrigger } from "react-bootstrap";

const EditMyPet = () => {
  const params = useParams();
  const petId = params["id"];
  const [pet, setPet] = useState<PetInfoType>({} as PetInfoType);
  const [count, setCount] = useState(0);
  const [deleteShowModal, setDeleteShowModal] = useState(false);
  const totalNumberOfPhotos = 4;
  let numberOfBlanks = 0;
  if (pet?.allPhotos) {
    numberOfBlanks = totalNumberOfPhotos - pet.allPhotos.length;
  }

  const blankList: JSX.Element[] = [];
  // const [photo, setPhoto] = useState<File>();

  const addPhotoTooltip = (props:any) => (
    <Tooltip {...props}>Add new photo</Tooltip>
  );

  const onFileChange = (e: React.FormEvent<HTMLInputElement>) => {
    // if (e.currentTarget.files) {
    //   setPhoto(e.currentTarget.files[0]);
    // }
    if (!e.currentTarget.files[0]) {
      return;
    }
    const photoFormData = new FormData();
    photoFormData.append("photo", e.currentTarget.files[0]);

    axios.post(`http://localhost:3000/`, photoFormData {

    });

  }

  // const onFileUpload = () => {

  // }

  for (let i = 0; i < numberOfBlanks; i++) {
    blankList.push(
      <>
        <Col>
        <div className="image-upload">
        <label htmlFor="file-input">
            <OverlayTrigger placement='bottom' overlay={addPhotoTooltip}>
              <img className="photo-pane_photo photo-pane_upload" src={AddNewImage} />
            </OverlayTrigger>
        </label>
            <input id="file-input" type="file" onChange={onFileChange}/>
        </div>
        </Col>
      </>
    )
  }

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/pets/${petId}`)
      .then((response) => response.data)
      .then((data) => setPet(data));
  }, [count]);

  const handleDeletePhoto = (photoName: string) => {
    axios.delete(`http://localhost:3000/api/pets/photo/${photoName}`)
      .then(_ => {
        setCount(count + 1);
        setDeleteShowModal(false);
      })
      .catch(err => errorAlert(errorMessages.cannotDelete, 'Cannot delete photo' + photoName, err));
  }

  return (
    <div className="container">
      <h1>{pet.type === 'Dog' ? '🐕' : '😺'} Edit {pet.name}'s info</h1>

      <Container>
        <Row xs={1} sm={2} md={4} lg={4}>
          {pet.allPhotos && pet.allPhotos.map((photoName) => (
            <>
              <Col key={photoName}>
                <img className="photo-pane_photo" src={`http://localhost:3000/api/pets/photo/${photoName}`} alt={`Pet Photo ${photoName}`} />
                <button onClick={() => setDeleteShowModal(true)}>Delete</button>
              </Col>

              <DeletePetPhotoModel show={deleteShowModal} onClose={() => setDeleteShowModal(false)} onDelete={() => handleDeletePhoto(photoName)} />

            </>
          ))}
          {blankList}
        </Row>
      </Container>

    </div>
  )
}

export default EditMyPet