import "../style.css";
import Card from "./Card";

const App = () => {
  return (
    <div>
      <h1>Top Cartoons</h1>
      <div className="row">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default App;
