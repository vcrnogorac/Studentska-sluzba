import "../bootstrap.css";

function AddButton(props) {
  return (
    <button type="button" className="btn btn-primary" onClick={props.onClick}>
      {props.text}
    </button>
  );
}

export default AddButton;
