import axios from "axios";
import { useEffect, useState } from "react";
import dummyImage from "./assets/dummy.png";
import "./App.css";
interface Character {
  id: number;
  name: string;
  images: string[];
  debut?: {
    anime?: string;
    appearsIn?: string;
    game?: string;
    manga?: string;
    movie?: string;
    novel?: string;
    ova?: string;
  };
  personal?: {
    affiliation?: string;
  };
}

const limit = 15;

function App() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  useEffect(() => {
    fetchCharacters(page);
  }, []);

  const fetchCharacters = async (page: number) => {
    const apiUrl = "https://narutodb.xyz/api/character";

    setIsLoading(true);
    try {
      const result = await axios.get(apiUrl, { params: { page, limit } });
      setCharacters(result.data.characters);
    } catch (error) {
      setError("キャラクター情報の取得に失敗しました。");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const hundleNext = async () => {
    const nextPage = page + 1;
    await fetchCharacters(nextPage);
    setPage(nextPage);
  };

  const hundlePrev = async () => {
    const prevPage = page - 1;
    await fetchCharacters(prevPage);
    setPage(prevPage);
  };

  if (error) return <div>{error}</div>;

  return (
    <div className="container">
      <div className="header">
        <div className="header-content">
          <img src="logo.png" alt="logo" className="logo" />
        </div>
      </div>
      {isLoading ? (
        <div>Now Loading...</div>
      ) : (
        <main>
          <div className="cards-container">
            {characters.map((character) => {
              return (
                <div className="card" key={character.id}>
                  <img
                    src={character.images?.[0] ?? dummyImage}
                    alt={`${character.name}の画像`}
                    className="card-image"
                  ></img>
                  <div className="card-content">
                    <h3 className="card-title">{character.name}</h3>
                    <p className="card-description">
                      {character.debut?.appearsIn ?? "情報なし"}
                    </p>
                    <div className="card-fotter">
                      <span className="affiliation">
                        {character.personal?.affiliation ?? "所属なし"}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="pager">
            <button disabled={page == 1} className="prev" onClick={hundlePrev}>
              Previous
            </button>
            <span className="page-number">{page}</span>
            <button
              disabled={limit > characters.length}
              className="next"
              onClick={hundleNext}
            >
              next
            </button>
          </div>
        </main>
      )}
    </div>
  );
}

export default App;
