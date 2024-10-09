import './assets/App.css';
import Layout from './components/layouts/Layout';
import RouteConfig from './route/RouteConfig';

function App() {

  return (
    <Layout 
      headerProps={{
        label: "UI sample system（from application）", 
      }} 
      leftPanelProps={{
        links: [
          {label: 'Top', path: '/'},
          {label: '用語一覧', path: '/terms/list'},
          {label: '用語登録', path: '/terms/register'},
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
