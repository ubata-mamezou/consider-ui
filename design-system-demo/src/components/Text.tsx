import { TextField as BaseText } from '@mui/material';

/**
 * テキストプロパティ
 */
export type TextProps = {
  /** ID */
  id: string;
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
  onFocus?: () => void;
}

/**
 * テキスト
 * @param param0 各種パラメーター
 * @returns テキスト
 */
export const Text = ({
  id,
  type = `text`,
  label = '',
  required = false,
  disabled = false,
  readOnly = false,
  defaultValue = '',
  helperText = '',
  ...props
}: TextProps) => {
  return (
    <BaseText
      id={id}
      type={type}
      variant='outlined'
      label={label}
      required={required}
      disabled={disabled}
      defaultValue={defaultValue}
      helperText={helperText}
      slotProps={{
        inputLabel: {
          // shrink: type === 'number' ? true : false,
        },
        input: {
          readOnly: readOnly,
        },
      }}
      {...props}
    >
    </BaseText>
  );
};
