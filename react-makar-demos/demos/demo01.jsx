function App() {
  const name = "John";
  const [num, numberAdd] = useState(0);
  function numberAdd(params) {
    num++;
  }
  return (
    <div>
      <h1>Hello World</h1>
      <h2>My name is {name}</h2>
      <button onClick={numberAdd}>numberAdd</button>
      <button onClick={numberAdd}>numberAdd2</button>
      <h3>{num}</h3>
    </div>
  );
}
