declare module 'react-scroll-slider' {
  export interface ActiveItemProps {
    forwardStyle?: React.CSSProperties;
    backwardStyle?: React.CSSProperties;
    children?: React.ReactNode;
  }
  
  export const ActiveItem: React.FC<ActiveItemProps>;
} 