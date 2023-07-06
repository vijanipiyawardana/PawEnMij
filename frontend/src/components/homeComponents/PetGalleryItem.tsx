import { PetInfoType } from './HomePage';
import './PetGalleryItem.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

type PetGalleryItemProps = {
    pet: PetInfoType;
}

const PetGalleryItem = (props: PetGalleryItemProps) => {
  return (
    <div>
      <div className="gallery-item card col mx-2 my-2">
        <img src={`http://localhost:3000/api/pets/photo/${props.pet.coverPhoto}`} className="card-img-top" alt=".aa.." />
        <div className="card-body">
          <h5 className="card-title">{props.pet.name}</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item-breed">{props.pet.breed}</li>
            <li className="list-group-item-gender">{props.pet.gender}</li>
            <li className="list-group-item-age">{props.pet.age}</li>
            <li className="list-group-item-status">{props.pet.status}</li>
          </ul>
          <a href={`/viewPet/${props.pet.id}`} className="btn btn-primary">
            More Info
          </a>
        </div>
      </div>
    </div>
  );
};

export default PetGalleryItem;
