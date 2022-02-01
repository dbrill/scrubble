import Evaluation from '../util/Evaluation'

type Props = {
    evaluation: Evaluation,
    letter: String,
}
function Letter(props: Props) {
    return (<div className="letter" style={letterStyle}>{props.letter}</div>)
}
export default Letter

const letterStyle = {
    width: "4rem",
    fontWeight: "bold",
    fontSize: "2.3rem",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    height: "4rem",
    borderStyle: "solid",
    borderWidth: ".15rem",
    borderColor: "#565758",
    margin: ".2rem",
    textTransform: "uppercase" as const,
    userSelect: "none" as const,
}
