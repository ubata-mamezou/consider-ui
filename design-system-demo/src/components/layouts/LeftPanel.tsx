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
        <ListItem disablePadding id={`sideMenu-${index}`} key={`sideMenu-${index}`}>
          <ListItemButton id={`btnSideMenu-${index}`} key={`btnSideMenu-${index}`}>
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
