import { default as Highcharts, Chart, Options } from 'highcharts';
import { PresentationView, PresentationVisualCartesianViewType, PresentationVisualContentConfig, PresentationVisualPolarViewType, PresentationVisualRangeViewType } from '@datapos/datapos-shared';
interface HighchartsView extends PresentationView {
    chart: Chart;
}
declare class HighchartsTool {
    constructor();
    renderCartesianChart(type: PresentationVisualCartesianViewType, contentConfig: PresentationVisualContentConfig, renderTo: HTMLElement, callback?: () => void): Promise<HighchartsView>;
    render(renderTo: HTMLElement, options: Options, callback?: () => void): Promise<{
        chart: Highcharts.Chart;
        resize: () => void;
        vendorId: string;
    }>;
    renderPeriodFlowBoundaries(renderTo: HTMLElement, options: Options, callback?: () => void): Promise<{
        chart: Highcharts.Chart;
        resize: () => void;
        vendorId: string;
    }>;
    renderPolarChart(type: PresentationVisualPolarViewType, content: PresentationVisualContentConfig, renderTo: HTMLElement, callback?: () => void): Promise<HighchartsView>;
    renderRangeChart(type: PresentationVisualRangeViewType, content: PresentationVisualContentConfig, renderTo: HTMLElement, callback?: () => void): Promise<HighchartsView>;
    private loadDependencyWheelAndSankeyModules;
    private loadHighchartsMore;
    private loadStreamgraphModule;
}
export { HighchartsTool, HighchartsView };
