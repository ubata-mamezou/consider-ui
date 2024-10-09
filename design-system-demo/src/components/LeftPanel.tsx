import { Link, List, ListItem, ListItemButton } from "@mui/material";

export type LeftPanelProps = {
  links: { label: string, path: string }[];
}

export const LeftPanel = ({
  links,
}: LeftPanelProps) => {
  return (
    <List>
      {links.map((link, index) => (
        <ListItem disablePadding>
          <ListItemButton id={`sideMenu${index}`} key={link.label}>
            {link.path.length > 0 ?
              <Link href={link.path} underline="none" color="inherit">
                {link.label}
              </Link>
              : link.label}
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );

};
