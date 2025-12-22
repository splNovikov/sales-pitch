import { useState } from 'react';
import { Switch, Space, Card, Divider, Typography } from 'antd';

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
}

/**
 * Интерактивный компонент переключения режимов ценообразования
 * Позволяет переключаться между режимом "МОИ ЦЕНЫ" и "ДЕМОНСТРАЦИЯ ПОКУПАТЕЛЮ"
 */
export function PricingModeToggle({
  productName = 'Керамогранит Coliseum Brenta Grey 22,5х90',
  sku = 'CB-22590-BRENTA-GR',
  supplierPrice = 580,
  markupCoeff = 1.8,
  retailPrice,
}: PricingModeToggleProps) {
  const [isCustomerMode, setIsCustomerMode] = useState(false);

  // Рассчитываем розничную цену и маржу
  const calculatedRetailPrice =
    retailPrice || Math.round(supplierPrice * markupCoeff);
  const margin = calculatedRetailPrice - supplierPrice;
  const marginPercent = Math.round((margin / supplierPrice) * 100);

  return (
    <Card
      size="small"
      style={{
        backgroundColor: '#fff',
        border: '2px solid #e8e8e8',
      }}
    >
      <Space
        direction="vertical"
        size="large"
        style={{ width: '100%', padding: '8px' }}
      >
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

        <Divider style={{ margin: '8px 0' }} />

        {/* Контент в зависимости от режима */}
        {!isCustomerMode ? (
          // Режим "МОИ ЦЕНЫ"
          <Card
            size="small"
            style={{
              backgroundColor: '#f6ffed',
              border: '2px solid #b7eb8f',
            }}
          >
            <Space direction="vertical" size="small" style={{ width: '100%' }}>
              <Text strong style={{ fontSize: '14px', color: '#52c41a' }}>
                Режим "МОИ ЦЕНЫ"
              </Text>
              <Divider style={{ margin: '8px 0' }} />
              <Text style={{ fontSize: '13px' }}>
                Товар: <Text strong>{productName}</Text>
              </Text>
              <Text style={{ fontSize: '13px' }}>
                Артикул: <Text strong>{sku}</Text>
              </Text>
              <Divider style={{ margin: '8px 0' }} />
              <Text style={{ fontSize: '13px' }}>
                Себестоимость:{' '}
                <Text strong>{supplierPrice.toLocaleString('ru-RU')} ₽</Text>
                <Text
                  type="secondary"
                  style={{ fontSize: '11px', marginLeft: 4 }}
                >
                  (цена от EKSIMA)
                </Text>
              </Text>
              <Text style={{ fontSize: '13px' }}>
                Коэффициент наценки:{' '}
                <Text strong>[{markupCoeff.toFixed(2)} ▼]</Text>
              </Text>
              <Text style={{ fontSize: '13px' }}>
                Розничная цена:{' '}
                <Text strong>
                  {calculatedRetailPrice.toLocaleString('ru-RU')} ₽
                </Text>
              </Text>
              <Text style={{ fontSize: '13px' }}>
                Маржа:{' '}
                <Text strong>
                  {margin.toLocaleString('ru-RU')} ₽ ({marginPercent}%)
                </Text>
              </Text>
            </Space>
          </Card>
        ) : (
          // Режим "ДЕМОНСТРАЦИЯ ПОКУПАТЕЛЮ"
          <Card
            size="small"
            style={{
              backgroundColor: '#e6f7ff',
              border: '2px solid #91d5ff',
            }}
          >
            <Space direction="vertical" size="small" style={{ width: '100%' }}>
              <Text strong style={{ fontSize: '14px', color: '#1890ff' }}>
                Режим "ДЕМОНСТРАЦИЯ ПОКУПАТЕЛЮ"
              </Text>
              <Divider style={{ margin: '8px 0' }} />
              <Text style={{ fontSize: '13px' }}>
                <Text strong>{productName}</Text>
              </Text>
              <Text style={{ fontSize: '13px' }}>
                Артикул: <Text type="secondary">{sku}</Text>
              </Text>
              <Divider style={{ margin: '8px 0' }} />
              <Text style={{ fontSize: '16px' }}>
                Цена:{' '}
                <Text strong style={{ fontSize: '20px', color: '#1890ff' }}>
                  {calculatedRetailPrice.toLocaleString('ru-RU')} ₽
                </Text>
              </Text>
              <Text style={{ fontSize: '13px', marginTop: 8 }}>
                <Text strong style={{ color: '#1890ff' }}>
                  [Добавить в корзину]
                </Text>
              </Text>
            </Space>
          </Card>
        )}
      </Space>
    </Card>
  );
}
