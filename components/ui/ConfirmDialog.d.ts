export type ConfirmDialogProps = {
    title: string;
    contentText: string;
    executeKey: {
        id: string;
        version: number;
    };
    onClickExecute: (id: string, version: number) => void;
    onClickCancel: () => void;
    openDialogCondition: boolean;
    onCloseDialog: () => void;
};
export declare const ConfirmDialog: React.FC<ConfirmDialogProps>;
//# sourceMappingURL=ConfirmDialog.d.ts.map