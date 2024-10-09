import { AppBar, Box, Container, createTheme, CssBaseline, Drawer, ThemeProvider, Toolbar } from '@mui/material';
import { orange } from '@mui/material/colors';
import { ReactNode } from 'react';
import { Footer, FooterProps } from '../Footer';
import { Header, HeaderProps } from '../Header';
import { LeftPanel, LeftPanelProps } from '../LeftPanel';

const drawerWidth = 240;

// テーマの設定
const theme = createTheme({
  palette: {
    primary: {
      main: orange[500],
    },
    background: {
      default: '#fbe9e7', // 暖色系の背景色
    },
  },
});

export type LayoutProps = {
  headerProps: HeaderProps;
  leftPanelProps: LeftPanelProps;
  footerProps: FooterProps;
  children: ReactNode;
}

export const Layout = ({
  headerProps,
  leftPanelProps,
  footerProps,
  children,
}: LayoutProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        {/* ヘッダー */}
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Header label={headerProps.label}/>
        </AppBar>

        {/* 左サイドパネル */}
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: 'auto' }}>
            <LeftPanel links={leftPanelProps.links}/>
          </Box>
        </Drawer>

        {/* メインコンテンツ */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            bgcolor: 'background.default',
            p: 3,
            marginLeft: `${drawerWidth}px`,
          }}
        >
          <Toolbar />
          <Container>
            {children}
          </Container>
        </Box>

        {/* フッター */}
        <Box
          component="footer"
          sx={{
            p: 2, bgcolor: 'primary.main', color: 'white', position: 'fixed',
            left: `calc(${drawerWidth}px)`,
            bottom: 0, width: `calc(100% - ${drawerWidth}px)`
          }}
        >
          <Footer copyright={footerProps.copyright} />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
