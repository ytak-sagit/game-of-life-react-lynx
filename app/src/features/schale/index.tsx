import type { FunctionComponent, ReactNode } from '@lynx-js/react';

type SchaleProps = {
  /** セルの横幅 */
  cellWidth: number;
  /** セルの縦幅 */
  cellHeight: number;
  /** 1行あたりのセル配置件数 */
  numberOfCellsPerRow: number;
  /** 1列あたりのセル配置件数 */
  numberOfCellsPerCol: number;
  /** セルのリスト */
  children: ReactNode;
};

export const Schale: FunctionComponent<SchaleProps> = ({
  cellWidth,
  cellHeight,
  numberOfCellsPerRow,
  numberOfCellsPerCol,
  children: cells,
}) => {
  const maxWidth = cellWidth * numberOfCellsPerRow;
  const maxHeight = cellHeight * numberOfCellsPerCol;
  const schaleStyle = {
    display: 'grid' as const,
    gridTemplateColumns: `repeat(auto-fill, ${cellWidth}px)`,
    gridTemplateRows: `repeat(${numberOfCellsPerCol}, ${cellHeight}px)`,
    gridAutoFlow: 'column',
    maxWidth: `${maxWidth}px`,
    maxHeight: `${maxHeight}px`,
  };
  return <view style={schaleStyle}>{cells}</view>;
};
