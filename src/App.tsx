import Header from "./components/Header/Header";
import useCharacters from "./hooks/useCharacters";
import Pager from "./components/Pager/Pager";
import Card from "./components/Card/Card";
import { limit } from "./constant/limit";
import "./App.css";

function App() {
  const { isLoading, characters, handleNext, handlePrev, page, error } =
    useCharacters();

  if (error) return <div>{error}</div>;
  return (
    <div className="container">
      <Header />
      {isLoading ? (
        <div className="loading">Now Loading...</div>
      ) : (
        <main>
          <div className="cards-container">
            {characters.map((character) => (
              <Card key={character.id} character={character} />
            ))}
          </div>
          <Pager
            handleNext={handleNext}
            handlePrev={handlePrev}
            page={page}
            characters={characters}
            limit={limit}
          />
        </main>
      )}
    </div>
  );
}

export default App;
