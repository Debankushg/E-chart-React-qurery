import { data } from "./data";
import * as echarts from "echarts/core";

export const options = {
    animation: false,
    grid: { left: 5, right: 5, top: 5, bottom: 50 },
    tooltip: { show: true },
    series: [
        {
            breadcrumb: {
                show: true
            },
            colorMappingBy: "id",
            childrenVisibleMin: 1000,
            data,
            label: {
                // show: true
                formatter: function (info) {
                    let arr = [`{name|${info.data.name}}`, `{hr|}`, `{Quantity|${info.data.value}}{label|Quantity}`, `{household|${info.data.value}}{label|Capacity}`];
                    return arr.join("\n");
                },
                rich: {
                    Quantity: {
                        fontSize: 22,
                        lineHeight: 30,
                        color: "yellow",
                    },
                    household: {
                        fontSize: 14,
                        color: "#fff",
                    },
                    label: {
                        fontSize: 9,
                        backgroundColor: "rgba(0,0,0,0.3)",
                        color: "#fff",
                        borderRadius: 2,
                        padding: [2, 4],
                        lineHeight: 25,
                        align: "right",
                    },
                    name: {
                        fontSize: 12,
                        color: "#fff",
                    },
                    hr: {
                        width: "100%",
                        borderColor: "rgba(255,255,255,0.2)",
                        borderWidth: 0.5,
                        height: 0,
                        lineHeight: 10,
                        color: "#c73316",
                        fontSize: 14,
                    },
                },
            },
            upperLabel: {
                // show: true
                formatter: function (info) {
                    return info.data.name;
                },
            },
            levels: [
                {
                    upperLabel: { show: false },
                    itemStyle: {
                        borderWidth: 0,
                        gapWidth: 1,
                        
                    }
                },
                {
                    // colorSaturation: [0.4, 0.6],
                    itemStyle: {
                        borderWidth: 0,
                        gapWidth: 1,
                        borderColor: 'black'
                        
                    }
                },
                {
                    upperLabel: {
                        show: true
                    },
                    //              colorSaturation: [0.35, 0.5],
                    itemStyle: {
                        gapWidth: 1,
                        borderColor: 'black'
                    }
                }
            ],
            name: "aaa",
            roam: true,
            tooltip: {
                formatter: function (info) {
                    return [
                        `<div class="tooltip-title">${echarts.format.encodeHTML(
                            info.name
                        )}</div>`,
                        echarts.format.addCommas(Number(info.value))
                    ].join("");
                }
            },

            type: "treemap",
            //   zoomToNodeRatio: 0.8
        }
    ]
};
