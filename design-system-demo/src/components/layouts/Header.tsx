import { Toolbar, Typography } from "@mui/material";

export type HeaderProps = {
  /** 表示名 */
  label: string;
}

export const Header = ({
  label,
  ...props
}: HeaderProps) => {
  return (
    <Toolbar>
      <Typography variant="h6" noWrap component="div"
        {...props}
      >
        {label}
      </Typography>
    </Toolbar>
  );

};
