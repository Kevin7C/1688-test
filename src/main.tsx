import ReactDOM from 'react-dom/client';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import 'dayjs/locale/zh-cn';
import { App } from './app';
import 'styles/index.css';
import "amfe-flexible";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <ConfigProvider locale={zhCN} theme={{ token: { borderRadius: 2 } }}>
      <App />
    </ConfigProvider>
);
