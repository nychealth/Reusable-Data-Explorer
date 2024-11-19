import { VgValueRef } from '../../../vega.schema';
import { ScaleComponent } from '../../scale/component';
export interface ScaledZeroOrMinOrMaxProps {
    scaleName: string;
    scale: ScaleComponent;
    mode: 'zeroOrMin' | {
        zeroOrMax: {
            widthSignal: string;
            heightSignal: string;
        };
    };
}
export declare function scaledZeroOrMinOrMax({ scaleName, scale, mode }: ScaledZeroOrMinOrMaxProps): VgValueRef | undefined;
//# sourceMappingURL=scaledZeroOrMinOrMax.d.ts.map