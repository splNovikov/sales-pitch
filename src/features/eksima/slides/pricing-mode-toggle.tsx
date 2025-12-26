import { useState } from 'react';
import { Switch, Space, Card, Typography } from 'antd';

const { Text } = Typography;

interface PricingModeToggleProps {
  /**
   * Название товара
   */
  productName?: string;
  /**
   * Артикул товара
   */
  sku?: string;
  /**
   * Себестоимость (цена от EKSIMA)
   */
  supplierPrice?: number;
  /**
   * Коэффициент наценки
   */
  markupCoeff?: number;
  /**
   * Розничная цена (рассчитывается автоматически или можно передать)
   */
  retailPrice?: number;
  /**
   * Контролируемое значение переключателя (если передано, компонент становится контролируемым)
   */
  value?: boolean;
  /**
   * Callback при изменении состояния переключателя
   */
  onChange?: (checked: boolean) => void;
}

/**
 * Интерактивный компонент переключения режимов ценообразования
 * Позволяет переключаться между режимом "МОИ ЦЕНЫ" и "ДЕМОНСТРАЦИЯ ПОКУПАТЕЛЮ"
 */
export function PricingModeToggle({ value, onChange }: PricingModeToggleProps) {
  const [internalState, setInternalState] = useState(false);
  const isCustomerMode = value !== undefined ? value : internalState;
  const setIsCustomerMode =
    onChange !== undefined
      ? onChange
      : (checked: boolean) => setInternalState(checked);

  return (
    <Card
      size="small"
      style={{
        backgroundColor: '#fff',
        border: '2px solid #e8e8e8',
      }}
    >
      <Space size="middle" style={{ width: '100%', padding: '8px' }}>
        {/* Switch с подписями */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            padding: '16px',
            backgroundColor: '#fafafa',
            borderRadius: '8px',
          }}
        >
          <Text
            strong
            style={{
              fontSize: '16px',
              color: isCustomerMode ? '#595959' : '#1890ff',
              transition: 'color 0.3s',
            }}
          >
            МОИ ЦЕНЫ
          </Text>
          <Switch checked={isCustomerMode} onChange={setIsCustomerMode} />
          <Text
            strong
            style={{
              fontSize: '16px',
              color: isCustomerMode ? '#1890ff' : '#595959',
              transition: 'color 0.3s',
            }}
          >
            ДЕМОНСТРАЦИЯ ПОКУПАТЕЛЮ
          </Text>
        </div>
      </Space>
    </Card>
  );
}
