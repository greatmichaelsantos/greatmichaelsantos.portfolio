/** A piece of case-study copy: real text, or a TODO(Kel) placeholder. */
export type CopyValue = string | { todo: string };

export interface FigureData {
  file: string;
  alt: string;
  caption?: CopyValue;
  width?: number;
  height?: number;
}
