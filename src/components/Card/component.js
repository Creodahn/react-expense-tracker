import './styles.css';

function Card(props) {
  const classes = `card ${props.classes}`,
    TagName = props.tag ? props.tag : 'div';
  
  return (
    <TagName className={classes}>
      {props.children}
    </TagName>
  );
}

export default Card;