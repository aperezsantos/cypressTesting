import Grandchild1 from './Grandchild1';
import Grandchild2 from './Grandchild2';

const Child2 = () => {
  return (
    <>
      <h2>Child 2 Content</h2>
      <section>
        <Grandchild1 />
        <Grandchild2 />
      </section>
    </>
  );
};

export default Child2;
