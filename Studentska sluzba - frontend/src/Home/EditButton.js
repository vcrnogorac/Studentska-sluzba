import "../bootstrap.css";

function EditButton(props) {
  return (
    <button type="button" className="btn btn-primary">
      {props.text}
    </button>
  );
}

export default EditButton;
