import { PageTitle } from '@/components';
import { getTerms, Term, TermKey } from '@/features/term';
import { DeleteTermDialog } from '@/features/term/components/DeleteTermDialog';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
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
  const [currentKey, setCurrentKey] = useState<TermKey | null>(null);

  const filteredTerms = terms.filter(term => term.nameJp.includes(filter));

  const handleExecuteDeleteAfterProcess = (key: TermKey) => {
    setTerms(terms.filter(term => term.id !== key.id));
    initCurrentKey();
  };
  const initCurrentKey = () => {setCurrentKey(null);};
  

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
                <Button type='other' label='削除' onClick={() => setCurrentKey({id: term.id, version: term.version})}/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button type='secondary' label='新規登録' onClick={() => navigate(`/terms/register`)}/>

      <DeleteTermDialog
        deleteKey={currentKey}
        onClickExecuteDeleteAfterProcess={handleExecuteDeleteAfterProcess}
        onClickCancelDelete={() => initCurrentKey()}
        openDeleteDialogCondition={currentKey != null}
        onCloseDeleteDialog={() => initCurrentKey()}
      />
    </div>
  );
};

export default ShowTermList;
