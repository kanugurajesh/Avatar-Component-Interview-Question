import "./App.css";

function App() {
  return (
    <main>
      <div className="relative" style={{width: '120px', height: '120px', position:'relative'}}>
        <div className="loader"></div>
        <img
          src="https://api.dicebear.com/9.x/adventurer/svg"
          alt="data"
          className="image"
          width={120}
          height={120}
        />
      </div>
    </main>
  );
}

export default App;
