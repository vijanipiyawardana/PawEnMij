import { MyPetInfoType } from "./MyPetListings"
import "./MyPetListing.css";

type MyPetItemProps = {
    myPet: MyPetInfoType;
}

const onEditMyPet = () => {
    
};

const onDeleteMyPet = () => {
    
};

function MyPetItem(props: MyPetItemProps) {

    return (
        <div className='col'>
            <div className="gallery-item card ">
                <img src={`http://localhost:3000/api/pets/photo/${props.myPet.coverPhoto}`} className="card-img-top" alt=".aa.." />
                <div className="card-body">
                    <h5 className="card-title">
                        {props.myPet.name}
                        <span className="badge badge-pill badge-green">{props.myPet.status}</span>
                    </h5>

                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="card-label">Breed</span> &nbsp;&nbsp;&nbsp;
                            {props.myPet.breed}
                        </li>
                        <li className="list-group-item">
                            <span className="card-label">Gender</span> &nbsp;&nbsp;&nbsp;
                            {props.myPet.gender}
                        </li>
                        <li className="list-group-item">
                            <span className="card-label">Age</span> &nbsp;&nbsp;&nbsp;
                            {props.myPet.age} &nbsp;
                            <span>years</span> &nbsp;&nbsp;&nbsp;
                        </li>
                    </ul>

                    <div className="card-body card-body-button">
                        <button className='listing_button listing_button-edit_pet' onClick={onEditMyPet}>Edit</button>
                        <button className='listing_button listing_button-delete_pet' onClick={onDeleteMyPet}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default MyPetItem