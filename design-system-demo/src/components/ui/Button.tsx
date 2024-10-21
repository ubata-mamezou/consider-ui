import { Button as BaseButton } from '@mui/material';

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
  type = `primary`,
  label,
  disabled = false,
  ...props
}: ButtonProps) => {
  return (
    <BaseButton
      variant={type === `primary` ? 'contained' : type === `secondary` ? `outlined` : `text`}
      disabled={disabled}
      sx={styleObj}
      {...props}
    >
      {label}
    </BaseButton>
  );
};
