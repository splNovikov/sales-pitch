import type { ReactNode } from 'react';
import { ConfigProvider } from 'antd';
import ruRU from 'antd/locale/ru_RU';
import { appTheme } from './theme.config';
import { ThemeCSSVariables } from './theme-css-variables';

interface AntProviderProps {
  children: ReactNode;
}

export function AntProvider({ children }: AntProviderProps) {
  return (
    <ConfigProvider theme={appTheme} locale={ruRU}>
      <ThemeCSSVariables />
      {children}
    </ConfigProvider>
  );
}
