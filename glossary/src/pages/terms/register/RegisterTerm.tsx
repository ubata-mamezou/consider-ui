import { BackwardButton } from '@/components/ui/BackwardButton';
import { TermType } from '@/types';
import { Typography } from '@mui/material';
import { Button, Text } from 'mau-ds-ui';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterTerm: React.FC = () => {

  const [term, setTerm] = useState<TermType>({
    nameJp: "", nameEn: "", shortName: "", description: ""
  });
  const navigate = useNavigate();

  const handleRegister = () => {
    console.log(term);
    navigate("/");
  };

  return (
    <>
      <Typography variant="h4">用語登録画面</Typography>
      <Text id="name_jp" label='用語（和名）' value={term.nameJp} />
      <Text id="name_en" label='用語（英名）' value={term.nameEn} />
      <Text id="short-name" label='用語（略称）' value={term.shortName} />
      <Text id="description" label='説明' value={term.description} />
      <Button id='btn-register' label='登録' onClick={() => { handleRegister() }} />
      {/* <Button id='btn-back' label='戻る' type="secondary" onClick={() => navigate(-1)} /> */}
      <BackwardButton />
    </>
  );
};

export default RegisterTerm;
