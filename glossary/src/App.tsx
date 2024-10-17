import './assets/App.css';
import {Layout} from 'mau-ds-ui';
import RouteConfig from './routes/RouteConfig';

function App() {
  return (
    <Layout
      headerProps={{
        label: "UI sample system（from application）",
      }}
      leftPanelProps={{
        links: [
          { label: 'Top', path: '/' },
          { label: '用語集', path: '/terms/list' },
        ]
      }}
      footerProps={{
        copyright: '© 2024 MAU(from application)',
      }}>
      <RouteConfig />
    </Layout>
  )
}

export default App
