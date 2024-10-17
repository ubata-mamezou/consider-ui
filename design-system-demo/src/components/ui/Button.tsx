import { Button as BaseButton } from '@mui/material';
import { generateUk as generateUk4DateTime } from '../../utils';

const styleObj = {
  "&:hover": {
    backgroundColor: "red"
  },
  "&:active": {
    backgroundColor: "blue"
  }
};

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
}

/**
 * Button.
 * @param param0 {@link ButtonProps}
 * @returns Button
 */
export const Button = ({
  id,
  key,
  type = `primary`,
  label,
  disabled = false,
  ...props
}: ButtonProps) => {
  const defaultUk = `btn${generateUk4DateTime()}`;

  return (
    <BaseButton
      id={id !== undefined ? id : defaultUk}
      key={key !== undefined ? key : defaultUk}
      variant={type === `primary` ? 'contained' : type === `secondary` ? `outlined` : `text`}
      disabled={disabled}
      sx={styleObj}
      {...props}
    >
      {label}
    </BaseButton>
  );
};
