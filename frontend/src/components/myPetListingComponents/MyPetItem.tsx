import { MyPetInfoType } from "./MyPetListings";
import "../homeComponents/PetGalleryItem.css";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { errorAlert } from '../commonComponents/helpers/ErrorHandler';
import { errorMessages } from '../commonComponents/constants/Constants';
import DeleteMyPetModel from './DeleteMyPetModel';
import { useState } from "react";

type MyPetItemProps = {
    myPet: MyPetInfoType;
    onMyPetRemove: (petId: string) => void;
}

const MyPetItem = (props: MyPetItemProps) => {

    const navigate = useNavigate();
    const [deleteShowModal, setDeleteShowModal] = useState(false);

    // const onEditMyPet = (e: React.MouseEvent<HTMLElement> ) => {
    //     navigate(`/editMyPet/${props.myPet.id}`);
    // };

    const onEditMyPet = (id: string) => {
        navigate(`/editMyPet/${id}`);
    };
    
    const onDeleteMyPet = (id: string) => {
        axios.delete(`http://localhost:3000/api/pets/${id}`)
        .then(_ => {
            props.onMyPetRemove(id);
            setDeleteShowModal(false);
        })
        .catch(err => errorAlert(errorMessages.cannotDelete, 'Cannot delete pet' + id, err));
    };

    return (
        <div className='col'>
            <div className="gallery-item card">
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
                        <button className='listing_button listing_button-edit_pet' onClick={() =>  onEditMyPet(props.myPet.id)}>Edit</button>
                        <button className='listing_button listing_button-delete_pet' onClick={() => setDeleteShowModal(true)}>Delete</button>
                    </div>
                    <DeleteMyPetModel show={deleteShowModal} onClose={() => setDeleteShowModal(false)} onDelete={() => onDeleteMyPet(props.myPet.id)}/>
                </div>
            </div>
        </div>
    )

}

export default MyPetItem