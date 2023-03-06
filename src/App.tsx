import Card, { CardVariant } from "./components/Card";


function App() {
  return (
    <div className="App">
      <Card width="200px" height="200px" variant={CardVariant.outlinde} clickFunc={(num) => console.log('click ' + num)
      }>
        <button>Btn</button>
      </Card>
    </div>
  );
}

export default App;
