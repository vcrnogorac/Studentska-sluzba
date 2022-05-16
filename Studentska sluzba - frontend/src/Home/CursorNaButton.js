import "../bootstrap.css";

function CoursorNaButton(props) {
  return (
    <button type="button" className="btn btn-secondary cursor-na">
      {props.text}
    </button>
  );
}

export default CoursorNaButton;
