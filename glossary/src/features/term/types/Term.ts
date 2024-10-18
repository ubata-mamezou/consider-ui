export type Term = {
  id: string;
  version: number;
  nameJp: string;
  nameEn: string;
  shortName: string;
  description: string;
};

export const initTerm = () => {
  return {
    id: "", version: 0, nameJp: "", nameEn: "", shortName: "", description: ""
  }
}

export type SaveTermReq = Omit<Term, 'id' | 'version'>;

export type UpdateTermReq = Omit<Term, 'id' | 'version'>;
// export type UpdateTermReq = Omit<Term, 'id'> & { version: number };
