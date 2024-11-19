import { MarkInvalidDataMode } from '../../invalid';
import { DataSourceType } from '../../data';
type PreOrPostFilteringInvalidValues = 'include-invalid-values' | 'exclude-invalid-values';
export interface DataSourcesForHandlingInvalidValues {
    marks: PreOrPostFilteringInvalidValues;
    scales: PreOrPostFilteringInvalidValues;
}
interface GetDataSourcesForHandlingInvalidValuesProps {
    invalid: MarkInvalidDataMode | null | undefined;
    isPath: boolean;
}
export declare function getDataSourcesForHandlingInvalidValues({ invalid, isPath }: GetDataSourcesForHandlingInvalidValuesProps): DataSourcesForHandlingInvalidValues;
export declare function getScaleDataSourceForHandlingInvalidValues(props: GetDataSourcesForHandlingInvalidValuesProps): DataSourceType;
export {};
//# sourceMappingURL=datasources.d.ts.map