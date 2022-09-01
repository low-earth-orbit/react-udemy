import "./Card.css";
// usuable wrapper component
function Card(props) {
  // takes whatever className from child, also use card as className
  const classes = "card " + props.className;
  return <div className={classes}> {props.children} </div>;
}

export default Card;
