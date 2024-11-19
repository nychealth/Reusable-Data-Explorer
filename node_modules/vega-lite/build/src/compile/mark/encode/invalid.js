import { isCountingAggregateOp } from '../../../aggregate';
import { getFieldDef, vgField } from '../../../channeldef';
import { isScaleInvalidDataIncludeAsValue } from '../../../invalid';
import { fieldValidPredicate } from '../../../predicate';
import { isSignalRef } from '../../../vega.schema';
import { getScaleInvalidDataMode } from '../../invalid/ScaleInvalidDataMode';
import { scaledZeroOrMinOrMax } from './scaledZeroOrMinOrMax';
export function getConditionalValueRefForIncludingInvalidValue({ scaleChannel, channelDef, scale, scaleName, markDef, config }) {
    const scaleType = scale?.get('type');
    const fieldDef = getFieldDef(channelDef);
    const isCountAggregate = isCountingAggregateOp(fieldDef?.aggregate);
    const invalidDataMode = getScaleInvalidDataMode({
        scaleChannel,
        markDef,
        config,
        scaleType,
        isCountAggregate
    });
    if (fieldDef && invalidDataMode === 'show') {
        const includeAs = config.scale.invalid?.[scaleChannel] ?? 'zero-or-min';
        return {
            test: fieldValidPredicate(vgField(fieldDef, { expr: 'datum' }), false),
            ...refForInvalidValues(includeAs, scale, scaleName)
        };
    }
    return undefined;
}
function refForInvalidValues(includeAs, scale, scaleName) {
    if (isScaleInvalidDataIncludeAsValue(includeAs)) {
        const { value } = includeAs;
        return isSignalRef(value) ? { signal: value.signal } : { value };
    }
    return scaledZeroOrMinOrMax({
        scale,
        scaleName,
        mode: 'zeroOrMin'
    });
}
//# sourceMappingURL=invalid.js.map