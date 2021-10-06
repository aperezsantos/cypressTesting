import Child1 from './components/Child1';
import Child2 from './components/Child2';

const App = () => {
  // ! Note the JSX fragment below – since a React component is a function, and since a function can have only one return value (remember that the `return` keyword breaks you out of the containing function) – this fragment acts as a wrapper around multiple elements, allowing us to return both the Child1 AND Child2 components without adding any bloat to our HTML document.
  return (
    <>
      <Child1 />
      <Child2 />
    </>

    //MY NOTES:  you can return other things besides a JSX fragment:

    //  <section className = "childrenSection">
          // <Child1 />
          // <Child2 />
    //  </section>

    // <section>
    // <Child1 />
    // <Child2 />
    //</section>
  );
};

export default App;
