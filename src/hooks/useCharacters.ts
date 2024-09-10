import axios from "axios";
import { useEffect, useState } from "react";
import { Character } from "../types/character";
import { limit } from "../constant/limit";

interface useCharactersProps {
  characters: Character[];
  isLoading: boolean;
  handleNext: () => void;
  handlePrev: () => void;
  page: number;
  error: string | null;
}

export const useCharacters = (): useCharactersProps => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    fetchCharacters(page);
  }, [page]);

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

  const handleNext = async () => {
    const nextPage = page + 1;
    await fetchCharacters(nextPage);
    setPage(nextPage);
  };

  const handlePrev = async () => {
    const prevPage = page - 1;
    await fetchCharacters(prevPage);
    setPage(prevPage);
  };

  return {
    characters,
    isLoading,
    handleNext,
    handlePrev,
    page,
    error,
  };
};

export default useCharacters;
