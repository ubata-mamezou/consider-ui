import { Button } from 'mau-ds-ui';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const BackwardButton: React.FC = () => {

  const navigate = useNavigate();

  return (
    <Button key='btnBack' label='戻る' type="secondary" onClick={() => navigate(-1)} />
  );
};
