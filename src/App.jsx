import Message from './components/Message';

const App = () => {
  return (
    <>
      {/* 
      
      //We are calling an instance of the Message functional component.  Because there is text content between the Message call, you have to use a closing tag </Message>.

      In the first instance of the Message component, there are two arguments (props) entered in:  "theme" and "closeable".  Because closeable isn't set to anything, React assumes it is true.

      The "Beware phising scams!" is automatically named as a child, we have no say in that.  On the second Message component call, there are two children:  the "Your account does not permit this action!" text is the first child, and the second child is the link.
      
      */}
      <Message theme="warning" closeable>
        Beware phishing scams!
      </Message>

      <Message icon="fas fa-dollar-sign">
        Your account does not permit this action! <a href="#">Upgrade here...</a>
      </Message>

      <Message theme="success" icon="far fa-thumbs-up" closeable>
        You're now logged in!
      </Message>

      <Message theme="main">Welcome to our app!</Message>

      <Message icon="fas fa-ban" theme="error">
        <strong>There has been an error with your request!</strong> Please try again later.
      </Message>

      {/* non-React syntax: Message("fas fa-exclamation-triangle", "info", true) */}
      <Message icon="fas fa-exclamation-triangle" theme="info" closeable>
        Our application will be down for maintenance from 2:00-3:15am MT.
      </Message>
    </>
  );
};

export default App;
