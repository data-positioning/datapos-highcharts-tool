import { default as Highcharts, Chart, Options } from 'highcharts';
import { PresentationView, PresentationVisualCartesianChartViewType, PresentationVisualContentConfig, PresentationVisualPolarChartViewType, PresentationVisualRangeChartViewType } from '@datapos/datapos-shared';
interface HighchartsView extends PresentationView {
    chart: Chart;
}
declare class HighchartsTool {
    constructor();
    renderCartesianChart(viewType: PresentationVisualCartesianChartViewType, contentConfig: PresentationVisualContentConfig, renderTo: HTMLElement, callback?: () => void): Promise<HighchartsView>;
    render(options: Options, renderTo: HTMLElement, callback?: () => void): Promise<{
        chart: Highcharts.Chart;
        resize: () => void;
        vendorId: string;
    }>;
    renderPeriodFlowBoundaries(contentConfig: PresentationVisualContentConfig, renderTo: HTMLElement, callback?: () => void): Promise<{
        chart: Highcharts.Chart;
        resize: () => void;
        vendorId: string;
    }>;
    renderPolarChart(viewType: PresentationVisualPolarChartViewType, contentConfig: PresentationVisualContentConfig, renderTo: HTMLElement, callback?: () => void): Promise<HighchartsView>;
    renderRangeChart(viewType: PresentationVisualRangeChartViewType, contentConfig: PresentationVisualContentConfig, renderTo: HTMLElement, callback?: () => void): Promise<HighchartsView>;
    private loadDependencyWheelAndSankeyModules;
    private loadHighchartsMore;
    private loadStreamGraphModule;
}
export { HighchartsTool, HighchartsView };
