import ToDo from './components/todoApp/ToDo'; // default export
import { Counter } from './components/counter/Counter'; // named export
import  Counter2  from './components/counter/Counter2'; // named export
import Parent from './components/parentToChild/parent';

function App() {
  return (
    <>
      {/* <ToDo /> */}
      {/* <Counter /> */}
      {/* <Counter2 /> */}
      <Parent/>
    </>
  );
}
export default App;
