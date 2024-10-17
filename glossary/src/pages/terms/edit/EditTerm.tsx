import { BackwardButton } from '@/components/ui/BackwardButton';
import { getTerm, Term, updateTerm, UpdateTermReq } from '@/features/term';
import { Typography } from '@mui/material';
import { Button, Text } from 'mau-ds-ui';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditTerm: React.FC = () => {
  const { id = "" } = useParams();
  const [term, setTerm] = useState<Term>({
    id: "", version: 0, nameJp: "", nameEn: "", shortName: "", description: ""
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTerm = async () => {
      setTerm(await getTerm(id));
    };
    fetchTerm();
  }, []);

  const handleSave = () => {
    console.log(term);
    updateTerm(id, term.version, term as UpdateTermReq);
    navigate("/terms/list");
  };

  return (
    <div>
      <Typography variant="h4">用語変更画面</Typography>
      <Text id="name_jp" key="name_jp" label='用語（和名）' value={term.nameJp} onChange={(event) => { setTerm({ ...term, nameJp: event.target.value }); }} /><br />
      <Text id="name_en" key="name_en" label='用語（英名）' value={term.nameEn} onChange={(event) => { setTerm({ ...term, nameEn: event.target.value }); }} /><br />
      <Text id="short-name" key="short-name" label='用語（略称）' value={term.shortName} onChange={(event) => { setTerm({ ...term, shortName: event.target.value }); }} /><br />
      <Text id="description" key="description" label='説明' value={term.description} onChange={(event) => { setTerm({ ...term, description: event.target.value }); }} /><br />
      <Button id='btnRegister' key="btnRegister" label='登録' onClick={() => { handleSave() }} />
      <BackwardButton />
    </div>

  );
};

export default EditTerm;
