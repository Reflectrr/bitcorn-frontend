import React from "react";
import { IgrFinancialChart } from "igniteui-react-charts";
import { IgrFinancialChartModule } from "igniteui-react-charts";
import { useSelector } from "react-redux";

IgrFinancialChartModule.register();

const Chart = () => {
  const data = useSelector((state) => state.data);
  return (
    <IgrFinancialChart
      width="100%"
      height="100%"
      isToolbarVisible={false}
      chartType="Candle"
      chartTitle="Bitcoin BTC:USD"
      titleAlignment="Left"
      titleLeftMargin="25"
      titleTopMargin="10"
      titleBottomMargin="10"
      toolTipType="Default"
      //subtitle="CME - CME Delayed Price, Currency in USD"
      subtitleAlignment="Left"
      subtitleLeftMargin="25"
      subtitleTopMargin="5"
      subtitleBottomMargin="10"
      yAxisLabelLocation="OutsideLeft"
      yAxisMode="Numeric"
      yAxisTitle="Prices"
      yAxisTitleLeftMargin="10"
      yAxisTitleRightMargin="5"
      yAxisLabelLeftMargin="0"
      zoomSliderType="None"
      dataSource={data}
    />
  );
};

export default Chart;
