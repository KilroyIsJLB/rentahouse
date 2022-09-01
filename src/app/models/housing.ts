
export interface TypeHabitat {
  id: number;
  libelle: string;
}

export interface Option {
  id: number;
  libelle: string;
  description: string;
}
export interface OptionPayanteId {
  habitationId: number;
  optionpayanteId: number;
}
export interface OptionPayante {
  id: OptionPayanteId;
  optionpayante: Option;
  prix: number;
}

export interface Housing {
  id: number;
  typehabitat: TypeHabitat;
  items: Option[];
  optionpayantes: OptionPayante[];
  libelle: string;
  description: string;
  adresse: string;
  idVille: number;
  ville: string;
  image: string;
  habitantsmax: number;
  chambres: number;
  lits: number;
  sdb: number;
  superficie: number;
  prixmois: number;
}

