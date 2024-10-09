import { Typography } from "@mui/material";

export type FooterProps = {
  /** コピーライト */
  copyright: string;
}

export const Footer = ({
  copyright,
  ...props
}: FooterProps) => {
  return (
    <Typography variant="body2" align="center"
      {...props}
    >
      {copyright}
    </Typography>
  );

};
