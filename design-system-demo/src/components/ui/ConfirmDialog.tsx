import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { Button } from './Button';

export type ConfirmDialogProps = {
  title: string;
  contentText: string;
  executeKey: { id: string, version: number };
  onClickExecute: (id: string, version: number) => void;
  onClickCancel: () => void;
  openDialogCondition: boolean;
  onCloseDialog: () => void;
};

export const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  title,
  contentText,
  executeKey,
  onClickExecute,
  onClickCancel,
  openDialogCondition,
  onCloseDialog
}) => {

  const handleExecute = () => {
    onClickExecute(executeKey.id, executeKey.version);
  }

  const handleCancel = () => {
    onClickCancel();
  }

  return (
    <Dialog open={openDialogCondition} onClose={() => onCloseDialog}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{contentText}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button type='primary' label='いいえ' onClick={handleCancel}/>
        <Button type='secondary' label='はい' onClick={handleExecute} />
      </DialogActions>
    </Dialog>
  );
};
