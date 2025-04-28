import FileLoader from "./components/fileLoader";
import Header from "./components/header";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <section className="plate p-1">
          <div className="plate-content h-full w-full">Plate</div>
        </section>
        <aside className="aside p-1">
          <div className="card h-full p-2 overflow-y-auto">Aside</div>
        </aside>
      </main>
      <FileLoader />
    </>
  );
}

export default App;
