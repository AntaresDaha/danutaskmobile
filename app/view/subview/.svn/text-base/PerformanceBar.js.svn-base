Ext.define('CDS.view.subview.PerformanceBar', {
    extend: 'Ext.Container',
    xtype: 'performancebar',
    requires: ['Ext.chart.Chart', 'Ext.chart.interactions.PanZoom',
        'Ext.chart.series.Bar', 'Ext.chart.axis.Numeric', 'Ext.chart.axis.Category',
        'CDS.view.subview.ColorPatterns','CDS.store.PerformanceBar','Ext.draw.modifier.Highlight'],

    config: {
        //cls: 'card1',
        layout: 'vbox',
        items: [
            {
                xtype: 'label',
                //background: 'white',
                cls: 'performanceBarCaption',
                html: '<b>Finished Tasks<b>',
                flex: 1
            },
            {
                xtype: 'chart',
                flex: 11,
                store: 'PerformanceBar',
                background: 'white',
                flipXY: true,
                colors: CDS.view.subview.ColorPatterns.getBarBaseColors(),
                /*interactions: [
                    {
                        type: 'panzoom'
                    },
                    'itemhighlight'
                ], */
                legend: {
                    id: 'PerformanceBarLegendId',
                    docked: 'bottom'
                    //scrollable: false
                    //verticalWidth: 100
                },
                series: [
                    {
                        title: 'Day',
                        labelField: 'day',
                        showInLegend: true,
                        type: 'bar',
                        xField: 'name',
                        yField: 'day',
                        //yField: ['day', 'week', 'month', 'year', 'g5'],
                        highlightCfg: {
                            strokeStyle: 'red',
                            lineWidth: 3
                        },
                        style: {
                            stroke: 'rgb(40,40,40)',
                            shadowColor: 'black',
                            shadowOffsetX: 3,
                            shadowOffsetY: 3,
                            minGapWidth: 1,
                            maxBarWidth: 40
                        }
                    },
                    {
                        title: 'Week',
                        labelField: 'week',
                        showInLegend: true,
                        type: 'bar',
                        xField: 'name',
                        yField: 'week',
                        //yField: ['day', 'week', 'month', 'year', 'g5'],
                        highlightCfg: {
                            strokeStyle: 'red',
                            lineWidth: 3
                        },
                        style: {
                            stroke: 'rgb(40,40,40)',
                            shadowColor: 'black',
                            shadowOffsetX: 3,
                            shadowOffsetY: 3,
                            minGapWidth: 1,
                            maxBarWidth: 45
                        }
                    },
                    {
                        title: 'Month',
                        labelField: 'month',
                        showInLegend: true,
                        type: 'bar',
                        xField: 'name',
                        yField: 'month',
                        //yField: ['day', 'week', 'month', 'year', 'g5'],
                        highlightCfg: {
                            strokeStyle: 'red',
                            lineWidth: 3
                        },
                        style: {
                            stroke: 'rgb(40,40,40)',
                            shadowColor: 'black',
                            shadowOffsetX: 3,
                            shadowOffsetY: 3,
                            minGapWidth: 1,
                            maxBarWidth: 45
                        }
                    },
                    {
                        title: 'Year',
                        labelField: 'year',
                        showInLegend: true,
                        type: 'bar',
                        xField: 'name',
                        yField: 'year',
                        //yField: ['day', 'week', 'month', 'year', 'g5'],
                        highlightCfg: {
                            strokeStyle: 'red',
                            lineWidth: 3
                        },
                        style: {
                            stroke: 'rgb(40,40,40)',
                            shadowColor: 'black',
                            shadowOffsetX: 3,
                            shadowOffsetY: 3,
                            minGapWidth: 1,
                            maxBarWidth: 45
                        }
                    }
                ],
                axes: [
                    {
                        title: 'Number of finished tasks',
                        type: 'numeric',
                        position: 'bottom',
                        fields: ['day','week','month','year'],
                        grid: {
                            odd: {
                                //fill: '#e8e8e8'
                            }
                        },
                        label: {
                            rotate: {
                                degrees: -30
                            }
                        }
                    },
                    {
                        title: 'Last...',
                        type: 'category',
                        position: 'left',
                        fields: 'name'
                    }
                ]
            }
        ]
    },

    initialize: function () {
        this.callParent();
        Ext.getStore('PerformanceBar').generateData();
    }
});