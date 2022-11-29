import "./Segment.css";
import propTypes from "prop-types";

const Segment = (props) => {
    return (
        <div className={"segment-" + props.type + " " + props.cclass}>
            <div className={"segment-item-s-" + props.type}></div>
            <div className={"segment-item-m-" + props.type}></div>
            <div className={"segment-item-e-" + props.type}></div>
        </div>
    );
};

Segment.propTypes = {
    cclass: propTypes.string.isRequired,
    type: propTypes.string.isRequired,
};

export default Segment;
