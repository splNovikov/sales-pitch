import type { MenuProps } from 'antd';
import { NavLink } from 'react-router-dom';
import { pathKeys } from '~shared/router';

type HeaderMenuItems = MenuProps['items'];

export const getMenuItems = (): HeaderMenuItems => [
  {
    key: pathKeys.home,
    label: <NavLink to={pathKeys.home}>Home</NavLink>,
  },
];
