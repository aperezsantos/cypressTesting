{/* 
  Props is the way in React that you receive all of the things that are being passed in from a parent component.  Here, the App is the parent component to the Message

  You have to accept the arguments from the parent by using "props" as a parameter as seen below.  You don't have to call it props, but it makes the most sense to call it that.

  You can disect/destructre the props that you get and turn all the key/value pairs into variables:
      const Message = ({ theme, icon, childre, closeable})

      -Make sure to properly label them below in the code also.  So props.theme would now break since we've taken apart the props object. This makes our component more readable since we are not reading props.theme, etc.
*/} 

const Message = (props) => {
  // console.log(props);

  const closeMessage = () => {
    alert('Add logic to close!');
  };

  return (
    <div className={`message ${props.theme ? 'message--' + props.theme : ''}`}>
      <div>

        {/*
        The below code is logic that will need to be evaluated.  We can tell that from the curly braces.  This is saying if there is an icon passed through props then I want to use that and create and icon tag for it.  The double && are saying that if the value to the left is truthy, then do we return or output this value on the right.  
        
        For props.children, it is referring to any text (or in this case we have that anchor tag as a second child) between the opening tag and closing tag of the component.  This content between the tags automatically becomes a child or children. props.children is what is injecting that text onto the page.  props.children is the only one that we don't get to name.
        */}
        {props.icon && <i className={`message__icon ${props.icon}`}></i>}
        {props.children}
      </div>
      {props.closeable && <i className="message__close-btn fas fa-times-circle" onClick={closeMessage}></i>}
    </div>
  );
};

export default Message;
