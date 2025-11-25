import { useMemo, useState } from 'react';
import { Grid } from 'antd';
import { useLocation } from 'react-router-dom';
import { pathKeys } from '~shared/router';

const { useBreakpoint } = Grid;

export interface HeaderNavigationHook {
  selectedKey: string;
  drawerOpen: boolean;
  toggleDrawer: () => void;
  handleMenuClick: () => void;
  isMobile: boolean;
}

export function useHeaderNavigation(): HeaderNavigationHook {
  const location = useLocation();
  const screens = useBreakpoint();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const isMobile = !screens.sm;

  const selectedKey = useMemo(() => {
    const currentPath = location.pathname;
    if (currentPath === pathKeys.home) return pathKeys.home;
    return pathKeys.home;
  }, [location.pathname]);

  const toggleDrawer = () => {
    setDrawerOpen(prev => !prev);
  };

  const handleMenuClick = () => {
    if (isMobile) {
      setDrawerOpen(false);
    }
  };

  return {
    selectedKey,
    drawerOpen,
    toggleDrawer,
    handleMenuClick,
    isMobile,
  };
}
