import { deleteTerm, TermKey } from '@/features/term';
import { ConfirmDialog } from 'mau-ds-ui';

export type DeleteTermDialogProps = {
  deleteKey: TermKey | null;
  onClickExecuteDeleteAfterProcess: (termKey: TermKey) => void;
  onClickCancelDelete: () => void;
  openDeleteDialogCondition: boolean;
  onCloseDeleteDialog: () => void;
};

export const DeleteTermDialog: React.FC<DeleteTermDialogProps> = ({
  deleteKey,
  onClickExecuteDeleteAfterProcess,
  onClickCancelDelete,
  openDeleteDialogCondition,
  onCloseDeleteDialog }) => {

  const handleExecuteDelete = (id: string, version: number) => {
    deleteTerm(id, version);
    onClickExecuteDeleteAfterProcess({ id: id, version: version } as TermKey);
  };

  return (
    deleteKey !== null ?
      (
        <ConfirmDialog
          title='削除確認'
          contentText={`用語(${deleteKey.id}:${deleteKey.version})を削除してよろしいですか？`}
          executeKey={{id: deleteKey.id, version: deleteKey.version}}
          onClickExecute={handleExecuteDelete}
          onClickCancel={onClickCancelDelete}
          openDialogCondition={openDeleteDialogCondition}
          onCloseDialog={onCloseDeleteDialog}
        />
      ) :
      (<></>)
  );
};
