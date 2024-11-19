import { SignalRef } from 'vega';
import { ScaleChannel } from '../../channel';
import { Config } from '../../config';
import { MarkInvalidDataMode } from '../../invalid';
import { MarkDef } from '../../mark';
import { ScaleType } from '../../scale';
export type ScaleInvalidDataMode = Omit<MarkInvalidDataMode, 'break-paths-show-path-domains'> | 'always-valid';
export declare function getScaleInvalidDataMode<C extends ScaleChannel>({ markDef, config, scaleChannel, scaleType, isCountAggregate }: {
    markDef: MarkDef;
    config: Config<SignalRef>;
    scaleChannel: C;
    scaleType: ScaleType;
    isCountAggregate: boolean;
}): ScaleInvalidDataMode;
export declare function shouldBreakPath(mode: ScaleInvalidDataMode): boolean;
//# sourceMappingURL=ScaleInvalidDataMode.d.ts.map