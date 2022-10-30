import { CommonModule } from "@angular/common";

export function Standalone(target: any) {
    console.log('Standalone');
  
    Object.defineProperty(target.prototype, 'standalone', {
      value: true,
      writable: false
    });
  
    Object.defineProperty(target.prototype, 'imports', {
      value: [CommonModule],
      writable: false
    });
  }
  