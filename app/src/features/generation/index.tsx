import type { FunctionComponent } from '@lynx-js/react';

type GenerationProps = {
  /** 世代数 */
  value: number;
};

export const Generation: FunctionComponent<GenerationProps> = ({ value }) => {
  return <text>Generation is #{value}</text>;
};
