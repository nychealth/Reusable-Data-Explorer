import { ChannelDef } from '../../../channeldef';
import { GuideEncodingConditionalValueDef } from '../../../guide';
import { VgEncodeEntry, VgValueRef } from '../../../vega.schema';
import { UnitModel } from '../../unit';
/**
 * Return a VgEncodeEntry that includes a Vega production rule for a scale channel's encoding or guide encoding, which includes:
 * (1) the conditional rules (if provided as part of channelDef)
 * (2) invalidValueRef for handling invalid values (if provided as a parameter of this method)
 * (3) main reference for the encoded data.
 */
export declare function wrapCondition<CD extends ChannelDef | GuideEncodingConditionalValueDef>({ model, channelDef, vgChannel, invalidValueRef, mainRefFn }: {
    model: UnitModel;
    channelDef: CD;
    vgChannel: string;
    /**
     * invalidValue for a scale channel if the invalidDataMode is include for the channel.
     * For scale channel with other invalidDataMode or non-scale channel, this value should be undefined.
     */
    invalidValueRef: VgValueRef | undefined;
    mainRefFn: (cDef: CD) => VgValueRef;
}): VgEncodeEntry;
//# sourceMappingURL=conditional.d.ts.map