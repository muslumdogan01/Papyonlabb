declare module 'locomotive-scroll' {
  export interface LocomotiveScrollOptions {
    el: HTMLElement | null;
    smooth?: boolean;
    multiplier?: number;
    class?: string;
    lerp?: number;
  }

  export default class LocomotiveScroll {
    constructor(options: LocomotiveScrollOptions);
    destroy(): void;
  }
} 