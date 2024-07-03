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

function App() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async () => {
    const apiUrl = "https://narutodb.xyz/api/character";
    try {
      setIsLoading(true);
      const result = await axios.get(apiUrl);
      setCharacters(result.data.characters);
    } catch (error) {
      setError("キャラクター情報の取得に失敗しました。");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) return <div>読み込み中……</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container">
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
      </main>
    </div>
  );
}

export default App;
