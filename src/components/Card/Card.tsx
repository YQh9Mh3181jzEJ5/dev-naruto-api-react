// import dummyImage from "/assets/dummyImage.png";
import "./Card.css";
import { Character } from "../../types/character";

interface CardProps {
  character: Character;
}
const Card = ({ character }: CardProps) => {
  return (
    <div className="card" key={character.id}>
      <img
        src={character.images?.[0] ?? ""}
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
};

export default Card;
