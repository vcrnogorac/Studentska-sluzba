import "../bootstrap.css";

function DeleteButton(props) {
  return (
    <button type="button" className="btn btn-danger">
      {props.text}
    </button>
  );
}

export default DeleteButton;
