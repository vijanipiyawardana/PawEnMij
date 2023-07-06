import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

type DropdownProps = {
    id: string;
    items: string[];
    onChange: (e:React.ChangeEvent<HTMLSelectElement>) => void;
}

const Dropdown = (props: DropdownProps) => {
  return (
    <select className="dropdown form-select form-select-lg mb-3" id={props.id} onChange={props.onChange}>
            {props.items.map((option) => (
                <option className="dropdown-option" key={option}>{option}</option>
            ))}
    </select>
  )
}

export default Dropdown
