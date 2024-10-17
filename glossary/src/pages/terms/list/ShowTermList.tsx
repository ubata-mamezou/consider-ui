import { getTerms, Term } from '@/features/term';
import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import { Button } from 'mau-ds-ui';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchTerm: React.FC = () => {
  // const [terms, setTerms] = useState<Term[]>([
  //   { id: 1, nameJp: "サーバー", nameEn: "server", shortName: "サーバ", description: "" },
  //   { id: 2, nameJp: "データベース", nameEn: "database", shortName: "DB", description: "" },
  //   { id: 3, nameJp: "アプリケーション", nameEn: "application", shortName: "アプリ, app", description: "" },
  // ]);
  const [terms, setTerms] = useState<Term[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTermList = async () => {
      setTerms(await getTerms());
    };
    fetchTermList();
  }, []);

  const [filter, setFilter] = useState('');
  // const [deleteId, setDeleteId] = useState<number | null>(null);

  const filteredTerms = terms.filter(term => term.nameJp.includes(filter));

  return (
    <div>
      <Typography variant="h4">用語検索画面</Typography>
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
                <Button type='other' label='詳細' onClick={() => navigate(`/terms/${term.id}/detail`)}/>
                <Button type='other' label='変更' onClick={() => navigate(`/terms/${term.id}/edit`)}/>
                <Button type='other' label='削除' onClick={() => alert(`${term.id}を削除しました`)}/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button type='secondary' label='新規登録' onClick={() => navigate(`/terms/register`)}/>
    </div>
  );
};

export default SearchTerm;
