import { PageTitle } from '@/components';
import { deleteTerm, getTerms, Term, TermKey } from '@/features/term';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { Button } from 'mau-ds-ui';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ShowTermList: React.FC = () => {
  const [terms, setTerms] = useState<Term[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTermList = async () => {
      setTerms(await getTerms());
    };
    fetchTermList();
  }, []);

  const [filter, setFilter] = useState('');
  const [deleteKey, setDeleteKey] = useState<TermKey | null>(null);

  const filteredTerms = terms.filter(term => term.nameJp.includes(filter));

  const handleDelete = (key: TermKey) => {
    deleteTerm(key.id, key.version);
    setTerms(terms.filter(term => term.id !== key.id));
    setDeleteKey(null);
  };

  return (
    <div>
      {/* <Typography variant="h4">用語検索画面</Typography> */}
      <PageTitle title='用語一覧'/>
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
                <Button type='other' label='削除' onClick={() => setDeleteKey({id: term.id, version: term.version})}/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button type='secondary' label='新規登録' onClick={() => navigate(`/terms/register`)}/>

      <Dialog open={deleteKey !== null} onClose={() => setDeleteKey(null)}>
        <DialogTitle>削除確認</DialogTitle>
        <DialogContent>
          <DialogContentText>削除してよろしいですか？（ID:{deleteKey !== null ? deleteKey.id : ''}）</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button type='primary' label='いいえ' onClick={() => setDeleteKey(null)}/>
          <Button type='secondary' label='はい' onClick={() => deleteKey && handleDelete(deleteKey)}/>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ShowTermList;
