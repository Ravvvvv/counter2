import "./ButtonsPanel.css";

const ButtonsPanel = (props) => {
  return (
    <div className="buttonsPanel">
      <button
        className="single-button"
        onClick={() => props.buttonMethod("add")}
      >
        Add {props.stepValue}
      </button>
      <button
        className="single-button"
        onClick={() => props.buttonMethod("Reset")}
      >
        Reset
      </button>
      <button
        className="single-button"
        onClick={() => props.buttonMethod("Set 0")}
      >
        Set 0
      </button>
    </div>
  );
};

export default ButtonsPanel;
