import { Layout as AntLayout } from 'antd';
import { Outlet } from 'react-router-dom';
import styles from './empty-layout.module.css';

const { Content } = AntLayout;

/**
 * Empty layout without header - used for full-screen pages like slides
 */
export default function EmptyLayout() {
  return (
    <AntLayout className={styles.emptyLayout}>
      <Content className={styles.content}>
        <Outlet />
      </Content>
    </AntLayout>
  );
}
