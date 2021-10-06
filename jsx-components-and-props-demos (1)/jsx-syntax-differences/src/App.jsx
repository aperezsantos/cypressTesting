import demoImage from './demo-image.png';

const App = () => {
  return (
    <section className="card">
      <h1 className="main-heading">JSX vs HTML:</h1>
      <p>
        JSX offers a streamlined syntax to generate HTML structure through React while injecting dynamic data and triggering DOM modifications based on changing data. Although JSX dramatically resembles HTML syntaxwise, there are a few differences to be aware of.
      </p>

      <section>
        <h2>Demo JSX:</h2>
        <form className="form">
          <label htmlFor="searchTerm" className="form__label">
            Search:
          </label>
          <input type="text" name="searchTerm" placeholder="Input search term here" className="form__input" />
        </form>
        <img src={demoImage} alt="demo image" className="card__img" />
        {/* example JSX comment */}
      </section>

      <section>
        <h2>Differences:</h2>
        <ul>
          <li>CSS class names must be added to the 'className' attribute rather than 'class' attribute.</li>
          <li>
            Any other HTML attributes that conflict with JavaScript keywords must be renamed; for example the label element's 'for' must instead be changed to 'htmlFor'.
          </li>
          <li>
            Any self-closing tags HTML tags (img, input, br, hr, link, meta, embed, etc) must be explicitly closed.
          </li>
          <li>
            In JSX, comments take the form of{' '}
            <code className="code-snippet">&#123;/* example React comment */&#125;</code> instead of{' '}
            <code className="code-snippet">&lt;!-- example HTML comment --&gt;</code>.
          </li>
          <li>
            You can insert dynamic values (variables, function return values, calculations, etc) into your JSX using the JSX curly braces.
          </li>
          <li>
            Images are typically handled by importing the image from a relative path with the '/src' folder and specifying the import name within the JSX curly braces.
          </li>
          <li style={{ color: 'orangered', fontSize: 16 }}>
            Inline styling (or in-component styling) has a few syntax differences.{' '}
            <strong>Note: styling inline or in-component should generally be avoided.</strong>
            <ul>
              <li>Inline styles are wrapped in double curly braces.</li>
              <li>Property/value pairs are separated with commas rather than semicolons.</li>
              <li>Hyphenated property names must be camel-cased.</li>
              <li>
                Any non-numeric values (or those that use non-pixel/non-multiplier units of measurement must be wrapped in quotes.
              </li>
              <li>
                Any values <em>not</em> wrapped in quotes are assumed to be either pixels, multiplier, or a variable name.
              </li>
            </ul>
          </li>
        </ul>
      </section>
    </section>
  );
};

export default App;
