import Evaluation from '../util/Evaluation';
import "../styles/Letter.css";

type Props = {
    evaluation: Evaluation,
    letter: String,
}
function Letter(props: Props) {
    return (<div
        className={`letter ${props.letter ? "occupied" : ""}`}>
        {props.letter}
    </div>)
}
export default Letter
