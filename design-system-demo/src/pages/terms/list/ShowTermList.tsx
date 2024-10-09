import React from 'react';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const SearchTerm: React.FC = () => (
  <div>
    <Typography variant="h4">用語検索画面</Typography>
    {/* 詳細ボタン例 */}
    <Button component={Link} to="/terms/1/detail">詳細</Button>
    {/* 変更ボタン例 */}
    <Button component={Link} to="/terms/1/edit">変更</Button>
  </div>
);

export default SearchTerm;
