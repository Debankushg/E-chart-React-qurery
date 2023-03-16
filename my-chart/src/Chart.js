
import ReactECharts from 'echarts-for-react';
import React, { useEffect, useRef } from 'react';
import { options } from "./options";

const Chart = () => {



  let echartRef = useRef(null);

  const onChartReady = (e) => {
    console.log(e)
    e.resize();
  }


  return (
    <div>

      <div className="relative flex flex-1 flex-col bg-Blue_5 px-3 py-3 h-full">
        <div className='tree-wrap'>
          <ReactECharts
            ref={echartRef}
            option={options}
            style={{ height: '80vh', width: '100%' }}
            onChartReady={(e) => onChartReady(e)}
          />
        </div>
      </div>

    </div>
  )
}

export default Chart