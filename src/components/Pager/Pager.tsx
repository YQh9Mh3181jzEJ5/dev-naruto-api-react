import { Character } from "../../types/character";
import "./Pager.css";

interface PagerProps {
  page: number;
  handlePrev: () => void;
  handleNext: () => void;
  characters: Character[];
  limit: number;
}
const Pager = ({
  page,
  handlePrev,
  handleNext,
  characters,
  limit,
}: PagerProps) => {
  return (
    <div className="pager">
      <button disabled={page === 1} className="prev" onClick={handlePrev}>
        Previous
      </button>
      <span className="page-number">{page}</span>
      <button
        disabled={limit > characters.length}
        className="next"
        onClick={handleNext}
      >
        next
      </button>
    </div>
  );
};

export default Pager;
