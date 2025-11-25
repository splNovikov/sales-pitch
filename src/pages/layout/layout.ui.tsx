import { Layout as AntLayout } from 'antd';
import { Outlet } from 'react-router-dom';
import Spinner from '~shared/ui/spinner';
import LayoutHeader from './header';
import { useLayoutNavigation } from './layout.hook';
import styles from './layout.module.css';

const { Content } = AntLayout;

export default function Layout() {
  const { isNavigating, showLoader, loadingMessage } = useLayoutNavigation();

  return (
    <AntLayout className={styles.layout}>
      <LayoutHeader />
      <Content
        className={styles.content}
        aria-busy={isNavigating}
        aria-live="polite"
        role="main"
      >
        {showLoader && (
          <div className={styles.loadingOverlay}>
            <Spinner tip={loadingMessage} />
          </div>
        )}
        <Outlet />
      </Content>
    </AntLayout>
  );
}
