export type Term = {
  id: string;
  version: number;
  nameJp: string;
  nameEn: string;
  shortName: string;
  description: string;
};

export type SaveTermReq = Omit<Term, 'id' | 'version'>;

export type UpdateTermReq = Omit<Term, 'id' | 'version'>;
// export type UpdateTermReq = Omit<Term, 'id'> & { version: number };
