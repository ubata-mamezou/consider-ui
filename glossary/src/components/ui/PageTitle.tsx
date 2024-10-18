import { AppBar, Toolbar, Typography } from "@mui/material";
import { FC } from "react";

/**
 * ページタイトル。
 * @param {string} title タイトル 
 * @returns ページタイトル
 */
export const PageTitle: FC<{ title: string }> = ({ title }) => {
  return (<>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5">{title}</Typography>
      </Toolbar>
    </AppBar>
    <br/>
  </>);
};
