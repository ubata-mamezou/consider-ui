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
export declare const ConfirmDialog: ({ title, contentText, executeKey, onClickExecute, onClickCancel, openDialogCondition, onCloseDialog }: ConfirmDialogProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=ConfirmDialog.d.ts.map