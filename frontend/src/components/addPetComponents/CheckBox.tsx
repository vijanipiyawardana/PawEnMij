import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

type CheckBoxProps = {
    id: string;
    label: string;
    onChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckBox = (props: CheckBoxProps) => {
  return (
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id={props.id} onChange={props.onChange} />
      <label className="form-check-label" htmlFor="flexCheckDefault">
        {props.label}
      </label>
    </div>
  );
};

export default CheckBox;
