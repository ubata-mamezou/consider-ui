import { ChangeEvent } from '../../../node_modules/react';
/**
 * テキストプロパティ
 */
export type TextProps = {
    /** ID(default: txt+日時から生成した文字列) */
    id?: string;
    /** Key(default: IDと同じ、Keyが未設定でIDが設定されている場合はIDと同じ値を設定) */
    key?: string;
    /** 種類(default: text) */
    type?: "text" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "range" | "search" | "tel" | "time" | "url" | "week";
    /** 表示名 */
    label?: string;
    /** 値 */
    value?: string;
    /** 必須(default: false) */
    required?: boolean;
    /** 活性/非活性(default: false) */
    disabled?: boolean;
    /** 読み取り専用(default: false) */
    readOnly?: boolean;
    /** 初期値(default: blank) */
    defaultValue?: string;
    /** ヘルプテキスト(default: blank) */
    helperText?: string;
    /** onFocusイベント */
    /** onChangeイベント */
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};
/**
 * テキスト
 * @param param0 各種パラメーター
 * @returns テキスト
 */
export declare const Text: ({ id, key, type, label, value, required, disabled, readOnly, defaultValue, helperText, onChange, ...props }: TextProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Text.d.ts.map