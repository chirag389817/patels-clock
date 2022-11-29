import Segment from "./Segment";
import propTypes from "prop-types";
import "./Display.css";

function Display(props) {
    return (
        <div className={"display number-" + props.number}>
            <Segment type="x" cclass="segment-1" />
            <div className="verticle-segments">
                <Segment type="y" cclass="segment-6" />
                <div className="segment-space"></div>
                <Segment type="y" cclass="segment-2" />
            </div>
            <Segment type="x" cclass="segment-7" />
            <div className="verticle-segments">
                <Segment type="y" cclass="segment-5" />
                <div className="segment-space"></div>
                <Segment type="y" cclass="segment-3" />
            </div>
            <Segment type="x" cclass="segment-4" />
        </div>
    );
}

export default Display;
