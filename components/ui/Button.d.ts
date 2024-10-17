/**
 * Button properties.
 */
export type ButtonProps = {
    /** ID(default: txt+日時から生成した文字列) */
    id?: string;
    /** Key(default: IDと同じ) */
    key?: string;
    /** 種類 */
    type?: `primary` | `secondary` | 'other';
    /** 表示名 */
    label: string;
    /** 活性/非活性 */
    disabled?: boolean;
    /** onClickイベント */
    onClick: () => void;
};
/**
 * Button.
 * @param param0 {@link ButtonProps}
 * @returns Button
 */
export declare const Button: ({ id, key, type, label, disabled, ...props }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Button.d.ts.map