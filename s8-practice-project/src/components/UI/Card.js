import classes from "./Card.module.css";

const Card = (props) => {
	return <div className={`${classes.card} ${props.className}`}>{props.children}</div>; // className = { } will add the card class from the css module and any classes added by the child component.
};

export default Card;
