import { BackwardButton } from '@/components/ui/BackwardButton';
import { Term, TermParts, getTerm } from '@/features/term';
import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ShowTerm: React.FC = () => {
  const { id = "" } = useParams();
  const [term, setTerm] = useState<Term>({
    id: "", version: 0, nameJp: "", nameEn: "", shortName: "", description: ""
  });

  useEffect(() => {
    const fetchTerm = async () => {
      setTerm(await getTerm(id));
    };
    fetchTerm();
  }, []);

  return (
    <div>
      <Typography variant="h4">用語詳細画面</Typography><br />
      {/* <Text id="name_jp" key="name_jp" label='用語（和名）' value={term.nameJp} /><br /><br />
    <Text id="name_en" key="name_en" label='用語（英名）' value={term.nameEn} /><br /><br />
    <Text id="short-name" key="short-name" label='用語（略称）' value={term.shortName} /><br /><br />
    <Text id="description" key="description" label='説明' value={term.description} /><br /><br /> */}
      <TermParts term={term} readonly={true} />
      <BackwardButton />
    </div>
  );
};

export default ShowTerm;