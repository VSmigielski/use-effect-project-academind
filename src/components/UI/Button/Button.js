import classes from './Button.module.css';

function Button(props) {
  return (
    <>
    <React.Fragment>
      
    </React.Fragment>
      <button
      type={props.type || 'button'}
      className={`${classes.button} 
      ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
    <button>

    </button>
    <Hello/>
    </>
    
  );
};

const Hello = () => {
  return <h1>Hello</h1>
}

export default Button;
