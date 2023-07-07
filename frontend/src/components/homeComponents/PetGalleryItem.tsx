import { PetInfoType } from "./HomePage";
import "./PetGalleryItem.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

type PetGalleryItemProps = {
  pet: PetInfoType;
};

const PetGalleryItem = (props: PetGalleryItemProps) => {
  return (
    <div className="col-sm-4">
      <div className="gallery-item card ">
        <img src={`http://localhost:3000/api/pets/photo/${props.pet.coverPhoto}`} className="card-img-top" alt=".aa.."/>
        <div className="card-body">
          <h5 className="card-title">
            {props.pet.name}
            <span className="badge badge-pill badge-green">{props.pet.status}</span>
          </h5>

          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="card-label">Breed</span> &nbsp;&nbsp;&nbsp;
              {props.pet.breed}
            </li>
            <li className="list-group-item">
              <span className="card-label">Gender</span> &nbsp;&nbsp;&nbsp;
              {props.pet.gender}
            </li>
            <li className="list-group-item">
              <span className="card-label">Age</span> &nbsp;&nbsp;&nbsp;
              {props.pet.age} &nbsp;
              <span>years</span> &nbsp;&nbsp;&nbsp;
            </li>
          </ul>
          <div className="card-body card-body-button">
            <a href={`/viewPet/${props.pet.id}`} className="btn btn-brown">More Info</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetGalleryItem;
