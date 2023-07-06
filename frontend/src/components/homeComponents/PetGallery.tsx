import PetGalleryItem from "./PetGalleryItem"
import './PetGallery.css'
import { PetInfoType } from "./HomePage"

type PetGalleryProps = {
    petInfo: PetInfoType[];
}

const PetGallery = (props: PetGalleryProps) => {
  return (
    <div className="gallery">
        {/* <div className="row"> */}
        {props.petInfo.map(pet => <PetGalleryItem pet={pet}/>)}
        {/* </div> */}
        
    </div>
  )
}

export default PetGallery
