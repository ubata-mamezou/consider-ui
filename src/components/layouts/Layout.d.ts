import { ReactNode } from '../../../node_modules/react';
import { FooterProps } from './Footer';
import { HeaderProps } from './Header';
import { LeftPanelProps } from './LeftPanel';
export type LayoutProps = {
    headerProps: HeaderProps;
    leftPanelProps: LeftPanelProps;
    footerProps: FooterProps;
    children: ReactNode;
};
export declare const Layout: ({ headerProps, leftPanelProps, footerProps, children, }: LayoutProps) => import("react/jsx-runtime").JSX.Element;
export default Layout;
//# sourceMappingURL=Layout.d.ts.map