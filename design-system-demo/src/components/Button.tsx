import { Button as BaseButton } from '@mui/material';

export type ButtonProps = {
  /** ID */
  id: string;
  /** 種類 */
  type?: `primary` | `secondary` | 'other';
  /** 表示名 */
  label: string;
  /** 活性/非活性 */
  disabled?: boolean;
  /** onClickイベント */
  onClick: () => void;
}

export const Button = ({
  id,
  type = `primary`,
  label,
  disabled = false,
  ...props
}: ButtonProps) => {
  return (
    <BaseButton
      id={id}
      variant={type === `primary` ? 'contained' : type === `secondary` ? `outlined` : `text`}
      disabled={disabled}
      {...props}
    >
      {label}
    </BaseButton>
  );
};
