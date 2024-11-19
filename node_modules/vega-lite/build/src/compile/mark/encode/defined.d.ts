import { Value } from '../../../channeldef';
import { VgEncodeEntry } from '../../../vega.schema';
import { UnitModel } from '../../unit';
/**
 * Create Vega's "defined" encoding to break paths in a path mark for invalid values.
 */
export declare function defined(model: UnitModel): VgEncodeEntry;
export declare function valueIfDefined(prop: string, value: Value): VgEncodeEntry;
//# sourceMappingURL=defined.d.ts.map