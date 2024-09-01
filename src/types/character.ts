export interface Character {
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
