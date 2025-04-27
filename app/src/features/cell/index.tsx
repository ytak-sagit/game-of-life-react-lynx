import type { FunctionComponent } from '@lynx-js/react';

type CellProps = {
  /** セルの横幅 */
  width?: number;
  /** セルの縦幅 */
  height?: number;
  /** セルの生死状態（true:生, false:死） */
  alive?: boolean;
  /** セルのタップ可否（true:タップ可能, false:タップ不可能） */
  enabled?: boolean;
  /** セルのタップ時イベントハンドラ */
  onTap: () => void;
};

export const Cell: FunctionComponent<CellProps> = ({
  width = 20,
  height = 20,
  alive = false,
  enabled = true,
  onTap,
}) => {
  const cellStyle = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: alive ? '#00ff2a' : '#333333',
    border: '1px solid transparent',
    borderColor: '#484848',
    borderRadius: '0',
    paddingBlock: 'unset',
    paddingInline: 'inherit',
  };
  return (
    <view
      accessibility-traits="button"
      style={cellStyle}
      user-interaction-enabled={enabled}
      bindtap={onTap}
    />
  );
};
