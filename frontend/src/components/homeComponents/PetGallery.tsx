import PetGalleryItem from "./PetGalleryItem";
import "./PetGallery.css";
import { PetInfoType } from "./HomePage";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

type PetGalleryProps = {
  petInfo: PetInfoType[];
};

const PetGallery = (props: PetGalleryProps) => {
  let rowCount = 0;

  // makes the row count considering the number of cases
  if (props.petInfo.length % 3 == 0) {
    rowCount = props.petInfo.length / 3;
  } else {
    rowCount = props.petInfo.length / 3 + 1;
  }

  console.log(
    `${props.petInfo.length / 3} items: ${
      props.petInfo.length
    } row count is ${rowCount}`
  );

  // create rows
  const createRowsItems = (): any[] => {
    let list: any[] = [];
    let count = 0;
    for (let i = 0; i < rowCount; i++) {
      count += 1;
      list.push(<div className="row">{createItems(i)}</div>);
    }
    return list;
  }

  // add cases to rows
  const createItems = (i: number): any[] => {
    let itemList: any[] = [];
    for (let j = 0; j < 3; j++) {
      let currentCell = i * 3 + j;
      console.log(i + " - " + j + " " + currentCell);

      if (props.petInfo[currentCell]) {
        itemList.push(<PetGalleryItem pet={props.petInfo[currentCell]} />);
      }
    }
    return itemList;
  }

  return (
    <>
      <div className="container">{createRowsItems()}</div>
    </>
  );
};

export default PetGallery;
