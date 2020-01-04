import React from "react";
import createPlotlyRenderers from "react-pivottable/PlotlyRenderers";
import PivotTableUI from "react-pivottable/PivotTableUI";
import TableRenderers from "react-pivottable/TableRenderers";
import createPlotlyComponent from "react-plotly.js/factory";

const Plot = createPlotlyComponent(window.Plotly);

export default class PivotTableUIComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { pivotState: props };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ pivotState: nextProps });
  }

  render() {
    return (
      <PivotTableUI
        PivotData="table"
        renderers={Object.assign(
          {},
          TableRenderers,
          createPlotlyRenderers(Plot)
        )}
        {...this.state.pivotState}
        onChange={s => this.setState({ pivotState: s })}
        unusedOrientationCutoff={Infinity}
      />
    );
  }
}
