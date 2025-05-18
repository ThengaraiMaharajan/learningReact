// appling styles in react
// event triggering

function Content() {

  // style variable
  const pStyles = {
    textAlign: 'center',
    color: 'blue',
    fontWeight: 'Bolder',
    padding: '0px',
    margin: '0px',
  };

  // value variable
  let user = 'Maharajan';

  function clickMeMethod() {
    user = 'Maha clicked button';
    console.log(user);
  }

  function parameterizedClickMeMethod(name) {
    console.log('Hello ', name);
    user = 'clicked paramClickMeBtn';
    console.log(name, ' ', user);
  }

  function callEvent(e) {
    console.log(e);
  }

  function paramCallEvent(e) {
    console.log(e);
  }

  return (
    <main>
      <h1
        style={{
          backgroundColor: 'Black',
          color: 'white',
          textAlign: 'center',
        }}
      >
        To Do List
      </h1>
      <p style={pStyles}>Content component is working : {user}</p>
      <button className="btn btn-primary btn-sm" onClick={clickMeMethod}>
        Click Me
      </button>
      <button
        className="btn btn-primary btn-sm"
        onClick={() => {
          parameterizedClickMeMethod('Maha');
        }}
      >
        Param Click Me
      </button>
      <button className="btn btn-primary btn-sm" onClick={callEvent}>
        Call event
      </button>
      <button
        className="btn btn-primary btn-sm"
        onClick={(e) => {
          paramCallEvent(e);
        }}
      >
        param Call event
      </button>
    </main>
  );
}
export default Content;
