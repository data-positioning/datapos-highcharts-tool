import { Chart } from 'highcharts';
import { PresentationView, PresentationVisualCartesianViewType, PresentationVisualContentConfig, PresentationVisualPolarViewType, PresentationVisualRangeViewType } from '@datapos/datapos-shared';
interface HighchartsView extends PresentationView {
    chart: Chart;
}
declare class HighchartsTool {
    constructor();
    renderCartesianChart(type: PresentationVisualCartesianViewType, contentConfig: PresentationVisualContentConfig, renderTo: HTMLElement, callback?: () => void): Promise<HighchartsView>;
    renderPolarChart(type: PresentationVisualPolarViewType, content: PresentationVisualContentConfig, renderTo: HTMLElement, callback?: () => void): Promise<HighchartsView>;
    renderRangeChart(type: PresentationVisualRangeViewType, content: PresentationVisualContentConfig, renderTo: HTMLElement, callback?: () => void): Promise<HighchartsView>;
    private loadDependencyWheelAndSankeyModules;
    private loadHighchartsMore;
    private loadStreamgraphModule;
}
export { HighchartsTool, HighchartsView };
