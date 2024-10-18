import { TextField as BaseText } from '@mui/material';
import { ChangeEvent } from 'react';
// import { generateUk as generateUk4DateTime } from '../../utils';

/**
 * テキストプロパティ
 */
export type TextProps = {
  /** ID(default: txt+日時から生成した文字列) */
  // id?: string;
  /** Key(default: txt+日時から生成した文字列) */
  // key?: string;
  /** 種類(default: text) */
  type?: "text"
  // | "button"
  // | "checkbox"
  | "color"
  | "date"
  | "datetime-local"
  | "email"
  | "file"
  | "hidden"
  | "image"
  | "month"
  | "number"
  | "password"
  // | "radio"
  | "range"
  // | "reset"
  | "search"
  // | "submit"
  | "tel"
  | "time"
  | "url"
  | "week";
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
  // onFocus?: () => void;
  /** onChangeイベント */
  onChange?:  (event: ChangeEvent<HTMLInputElement>) => void;
}

/**
 * テキスト
 * @param param0 各種パラメーター
 * @returns テキスト
 */
export const Text = ({
  // id,
  // key,
  type = `text`,
  label,
  value,
  required = false,
  disabled = false,
  readOnly = false,
  defaultValue,
  helperText,
  // onFocus,
  onChange,
  ...props
}: TextProps) => {
  // const defaultUk = `txt${generateUk4DateTime()}`;

  return (
    <BaseText
      // id={id !== undefined ? id : defaultUk}
      // key={key !== undefined ? key : defaultUk}
      type={type}
      variant='outlined'
      {...(label !== undefined && { label })}
      {...(value !== undefined && { value })}
      required={required}
      disabled={disabled}
      {...(defaultValue !== undefined && { defaultValue })}
      {...(helperText !== undefined && { helperText })}
      slotProps={{
        inputLabel: {
          // shrink: type === 'number' ? true : false,
        },
        input: {
          readOnly: readOnly,
        },
      }}
      // onFocus={onFocus}
      onChange={onChange}
      {...props}
    >
    </BaseText>
  );
};
