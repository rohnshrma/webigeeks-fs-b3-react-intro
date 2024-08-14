import "../style.css";
// import Card from "./Card";
// import Counter from "./Counter";
// import Time from "./Time";
import Form from "./Form";

const App = () => {
  console.log("app running");

  return (
    <div>
      <h1>Counter</h1>
      <div className="row">
        <Form />
      </div>
    </div>
  );
};

export default App;
