import { useState } from 'react';
import { Segmented, Space, Card, Divider, Typography } from 'antd';

const { Text } = Typography;

type PricingViewMode = 'МОИ ЦЕНЫ' | 'ДЕМОНСТРАЦИЯ ПОКУПАТЕЛЮ';

interface PricingSegmentedToggleProps {
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
 * Интерактивный пример с Segmented-переключателем
 * Показывает, как один и тот же товар отображается в разных режимах
 */
export function PricingSegmentedToggle({
  productName = 'Керамогранит Coliseum Brenta Grey 22,5х90',
  sku = 'CB-22590-BRENTA-GR',
  supplierPrice = 580,
  markupCoeff = 1.8,
  retailPrice,
}: PricingSegmentedToggleProps) {
  const [mode, setMode] = useState<PricingViewMode>('МОИ ЦЕНЫ');

  const calculatedRetailPrice =
    retailPrice || Math.round(supplierPrice * markupCoeff);
  const margin = calculatedRetailPrice - supplierPrice;
  const marginPercent = Math.round((margin / supplierPrice) * 100);

  const isOwner = mode === 'МОИ ЦЕНЫ';

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
        {/* Segmented-переключатель */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Segmented
            options={['МОИ ЦЕНЫ', 'ДЕМОНСТРАЦИЯ ПОКУПАТЕЛЮ']}
            value={mode}
            onChange={value => setMode(value as PricingViewMode)}
            size="large"
            style={{ fontSize: '16px', fontWeight: 600 }}
          />
        </div>

        <Divider style={{ margin: '12px 0' }} />

        {/* Описание товара (общее для обоих режимов) */}
        <Card
          size="small"
          style={{
            backgroundColor: '#fafafa',
            border: '1px solid #d9d9d9',
          }}
        >
          <Space direction="vertical" size="small" style={{ width: '100%' }}>
            <Text strong style={{ fontSize: '16px' }}>
              {productName}
            </Text>
            <Text type="secondary" style={{ fontSize: '13px' }}>
              Артикул: {sku}
            </Text>
          </Space>
        </Card>

        {/* Контент в зависимости от выбранного сегмента, с подсветкой выбранного режима */}
        {isOwner ? (
          <Card
            size="small"
            style={{
              backgroundColor: '#f6ffed',
              border: '2px solid #52c41a',
            }}
          >
            <Space direction="vertical" size="small" style={{ width: '100%' }}>
              <Text strong style={{ fontSize: '14px', color: '#52c41a' }}>
                Режим "МОИ ЦЕНЫ"
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
          <Card
            size="small"
            style={{
              backgroundColor: '#e6f7ff',
              border: '2px solid #1890ff',
            }}
          >
            <Space direction="vertical" size="small" style={{ width: '100%' }}>
              <Text strong style={{ fontSize: '14px', color: '#1890ff' }}>
                Режим "ДЕМОНСТРАЦИЯ ПОКУПАТЕЛЮ"
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
