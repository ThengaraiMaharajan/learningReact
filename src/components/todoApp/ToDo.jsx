import Content from './Content';
import Footer from './Footer';
import Header from './Header';

function ToDo() {
  let version = '0.0.0';

  return (
    <>
      <Header version={version} />
      <Content />
      <Footer version={version} />
    </>
  );
}
export default ToDo;
