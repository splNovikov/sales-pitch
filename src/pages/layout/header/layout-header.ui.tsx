import { useMemo } from 'react';
import { CloseOutlined, MenuOutlined } from '@ant-design/icons';
import { Button, Drawer, Flex, Layout as AntLayout, Menu } from 'antd';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { pathKeys } from '~shared/router';
import Logo from '~shared/ui/logo';
import { getMenuItems } from './layout-header.config';
import { useHeaderNavigation } from './layout-header.hook';
import styles from './layout-header.module.css';

const { Header } = AntLayout;

export default function LayoutHeader() {
  const { selectedKey, drawerOpen, toggleDrawer, handleMenuClick, isMobile } =
    useHeaderNavigation();

  const menuItems = useMemo(() => getMenuItems(), []);

  return (
    <Header className={clsx(styles.layoutHeader, isMobile && styles.mobile)}>
      <Flex
        align="center"
        justify="space-between"
        className={styles.headerContainer}
      >
        <Flex align="center" className={styles.headerStart}>
          {isMobile && (
            <Button
              type="text"
              icon={<MenuOutlined />}
              onClick={toggleDrawer}
              aria-label="Toggle menu"
              className={styles.headerToggle}
            />
          )}
          <NavLink to={pathKeys.home} className={styles.logoLink}>
            <Logo
              className={clsx(isMobile && styles.mobileLogoSize)}
              size="xs"
            />
          </NavLink>
        </Flex>

        {/* Desktop Navigation */}
        {!isMobile && (
          <Menu
            mode="horizontal"
            selectedKeys={[selectedKey]}
            items={menuItems}
            className={styles.desktopMenu}
          />
        )}

        {isMobile && (
          <Drawer
            title={null}
            placement="left"
            open={drawerOpen}
            onClose={toggleDrawer}
            closeIcon={false}
            styles={{
              body: { padding: 0, display: 'flex', flexDirection: 'column' },
            }}
          >
            {/* Drawer Header with Logo and Close Button */}
            <Flex
              align="center"
              justify="space-between"
              className={styles.drawerHeader}
            >
              <NavLink
                to={pathKeys.home}
                className={styles.logoLink}
                onClick={toggleDrawer}
              >
                <Logo className={styles.mobileLogoSize} />
              </NavLink>
              <Button
                type="text"
                icon={<CloseOutlined />}
                onClick={toggleDrawer}
                aria-label="Close menu"
                className={styles.headerToggle}
              />
            </Flex>

            {/* Menu Content */}
            <Flex className={styles.drawerContent}>
              <Menu
                mode="vertical"
                selectedKeys={[selectedKey]}
                items={menuItems}
                onClick={handleMenuClick}
                className={styles.drawerMenu}
              />
            </Flex>
          </Drawer>
        )}
      </Flex>
    </Header>
  );
}
