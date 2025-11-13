import { Chart } from 'highcharts';
import { PresentationView, PresentationVisualCartesianViewType, PresentationVisualContentConfig, PresentationVisualPolarViewType, PresentationVisualRangeViewType } from '@datapos/datapos-shared';
export interface HighchartsView extends PresentationView {
    chart: Chart;
}
export default class HighchartsTool {
    constructor();
    renderCartesianChart(type: PresentationVisualCartesianViewType, contentConfig: PresentationVisualContentConfig, element: HTMLElement, callback?: () => void): Promise<HighchartsView>;
    renderPolarChart(type: PresentationVisualPolarViewType, content: PresentationVisualContentConfig, element: HTMLElement, callback?: () => void): Promise<HighchartsView>;
    renderRangeChart(type: PresentationVisualRangeViewType, content: PresentationVisualContentConfig, element: HTMLElement, callback?: () => void): Promise<HighchartsView>;
    private loadHighchartsMoreModule;
}
