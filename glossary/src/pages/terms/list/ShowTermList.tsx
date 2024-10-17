import { Term } from '@/types';
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchTerm: React.FC = () => {

  const [terms, setTerms] = useState<Term[]>([
    { id: 1, nameJp: "サーバー", nameEn: "server", shortName: "サーバ", description: "" },
    { id: 2, nameJp: "データベース", nameEn: "database", shortName: "DB", description: "" },
    { id: 3, nameJp: "アプリケーション", nameEn: "application", shortName: "アプリ, app", description: "" },
  ]);

  const [filter, setFilter] = useState('');
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const navigate = useNavigate();

  const filteredTerms = terms.filter(term => term.nameJp.includes(filter));

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>名称（和名）</TableCell>
          <TableCell>説明</TableCell>
          <TableCell>ボタン</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {filteredTerms.map(term => (
          <TableRow key={term.id}>
            <TableCell>{term.nameJp}</TableCell>
            <TableCell>{term.description}</TableCell>
            <TableCell>
              {/* <Button onClick={() => history.push(`/detail/${term.id}`)}>Details</Button>
            <Button onClick={() => history.push(`/edit/${term.id}`)}>Edit</Button>
            <Button onClick={() => setDeleteId(term.id)}>Delete</Button> */}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    //   <div>
    //   <Typography variant="h4">用語検索画面</Typography>
    //   {/* 詳細ボタン例 */}
    //   <Button component={Link} to="/terms/1/detail">詳細</Button>
    //   {/* 変更ボタン例 */}
    //   <Button component={Link} to="/terms/1/edit">変更</Button>
    // </div>
  );
};

export default SearchTerm;
