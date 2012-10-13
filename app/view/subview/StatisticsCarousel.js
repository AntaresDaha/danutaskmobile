Ext.define('CDS.view.subview.StatisticsCarousel', {
    extend: 'Ext.Carousel',
    xtype: 'statisticscarousel',
    requires: [
        'Ext.carousel.Carousel',
        'Ext.chart.PolarChart',
        'Ext.chart.series.Pie',
        'Ext.chart.interactions.Rotate',
        'Ext.chart.Chart',
        'Ext.chart.interactions.PanZoom',
        'Ext.chart.series.Bar',
        'Ext.chart.axis.Numeric',
        'Ext.chart.axis.Category',
        'CDS.view.subview.ColorPatterns'
    ],

    config: {
        title: 'Statistics',
        style: 'background: white',
        xtype: 'carousel',
        ui: 'light',
        id: 'statisticscarouselmain',
        direction: 'vertical',
        directionLock: true,
        items: [{
            xtype: 'carousel',
            id: 'statisticscarouselpies',
            //the direction is horizontal
            direction: 'horizontal',
            //we turn on direction lock so you cannot scroll diagonally
            directionLock: true,
            items: [
                {
                    xtype: 'polar',
                    id: 'DTPieId',
                    store: 'DTPie',
                    html: '<h4><b>Developer Tasks</b></h4>',
                    styleHtmlContent: true,
                    style: 'text-align: center',
                    colors: CDS.view.subview.ColorPatterns.getBaseColors(),
                    //interactions: ['itemhighlight'],
                    showInLegend: true,
                    legend: {
                        id: 'DTPieLegendId',
                        cls: 'DTTESCLS',
                        docked: 'top',
                        scrollable: false
                        //verticalWidth: 100
                    },
                    innerPadding: 15,
                    series: [
                        {
                            type: 'pie',
                            xField: 'g1',
                            labelField: 'name',
                            donut: 30,
                            highlightCfg: {
                                margin: 20
                            },
                            style: {
                                stroke: 'white',
                                miterLimit: 10,
                                lineCap: 'miter',
                                lineWidth: 2
                            }
                        }
                    ],
                    axes: [
                    ]
                },
                {
                    xtype: 'polar',
                    id: 'BTPieId',
                    store: 'BTPie',
                    html: '<h4><b>Business Tasks</b></h4>',
                    styleHtmlContent: true,
                    style: 'text-align: center',
                    colors: CDS.view.subview.ColorPatterns.getBaseColors(),
                    //interactions: ['itemhighlight'],
                    showInLegend: true,
                    legend: {
                        id: 'BTPieLegendId',
                        docked: 'top',
                        scrollable: false
                        //verticalWidth: 100
                    },
                    innerPadding: 15,
                    series: [
                        {
                            type: 'pie',
                            xField: 'g1',
                            labelField: 'name',
                            donut: 30,
                            highlightCfg: {
                                margin: 20
                            },
                            style: {
                                stroke: 'white',
                                miterLimit: 10,
                                lineCap: 'miter',
                                lineWidth: 2
                            }
                        }
                    ],
                    axes: [
                    ]
                },
                {
                    xtype: 'polar',
                    id:'FTPieId',
                    store: 'FTPie',
                    html: '<h4><b>Features</b></h4>',
                    styleHtmlContent: true,
                    style: 'text-align: center',
                    colors: CDS.view.subview.ColorPatterns.getBaseColors(),
                    //interactions: ['itemhighlight'],
                    legend: {
                        id: 'FTPieLegendId',
                        docked: 'top',
                        scrollable: false
                        //verticalWidth: 100
                    },
                    innerPadding: 15,
                    series: [
                        {
                            type: 'pie',
                            xField: 'g1',
                            labelField: 'name',
                            donut: 30,
                            highlightCfg: {
                                margin: 20
                            },
                            style: {
                                stroke: 'white',
                                miterLimit: 10,
                                lineCap: 'miter',
                                lineWidth: 2
                            }
                        }
                    ],
                    axes: [
                    ]
                }
            ]
        },
        {
            xtype: 'carousel',
            id: 'statisticscarouselbars',
            //the direction is horizontal
            direction: 'horizontal',
            //we turn on direction lock so you cannot scroll diagonally
            directionLock: true,

            items: [
                {
                    xtype: 'chart',
                    id: 'DTBarId',
                    cls: 'DTBar',
                    store: 'DTPie',
                    background: 'white',
                    html: '<h4><b>Developer Tasks</b></h4>',
                    styleHtmlContent: true,
                    style: 'text-align: center',
                    colors: CDS.view.subview.ColorPatterns.getBaseColors(),
                    series: [
                        {
                            type: 'bar',
                            xField: 'name',
                            yField: ['g1'],
                            labelField: 'g1',

                            highlightCfg: {
                                strokeStyle: 'red'
                            },

                            style: {
                                stroke: 'rgb(40,40,40)',
                                shadowColor: 'black',
                                shadowOffsetX: 3,
                                shadowOffsetY: 3,
                                minGapWidth: 1,
                                maxBarWidth: 35
                            }
                        }
                    ],
                    axes: [
                        {
                            type: 'numeric',
                            position: 'left',
                            fields: ['g1','g2'],
                            grid: {
                                odd: {
                                    fill: '#e8e8e8'
                                }
                            },
                            label: {
                                rotate: {
                                    degrees: -30
                                }
                            }
                        },
                        {
                            type: 'category',
                            position: 'bottom',
                            fields: 'name',
                            visibleRange: [0, 1.0]
                        }
                    ]
                },
                {
                    xtype: 'chart',
                    id: 'BTBarId',
                    cls: 'BTBar',
                    store: 'BTPie',
                    background: 'white',
                    html: '<h4><b>Business Tasks</b></h4>',
                    styleHtmlContent: true,
                    style: 'text-align: center',
                    colors: CDS.view.subview.ColorPatterns.getBaseColors(),
                    series: [
                        {
                            type: 'bar',
                            xField: 'name',
                            yField: ['g1'],
                            labelField: 'g1',

                            highlightCfg: {
                                strokeStyle: 'red'
                            },

                            style: {
                                stroke: 'rgb(40,40,40)',
                                shadowColor: 'black',
                                shadowOffsetX: 3,
                                shadowOffsetY: 3,
                                minGapWidth: 1,
                                maxBarWidth: 35
                            }
                        }
                    ],
                    axes: [
                        {
                            type: 'numeric',
                            position: 'left',
                            fields: ['g1'],
                            grid: {
                                odd: {
                                    fill: '#e8e8e8'
                                }
                            },
                            label: {
                                rotate: {
                                    degrees: -30
                                }
                            }
                        },
                        {
                            type: 'category',
                            position: 'bottom',
                            fields: 'name',
                            visibleRange: [0, 1.0]
                        }
                    ]
                },
                {
                    xtype: 'chart',
                    id: 'FTBarId',
                    cls: 'FTBar',
                    store: 'FTPie',
                    background: 'white',
                    html: '<h4><b>Features</b></h4>',
                    styleHtmlContent: true,
                    style: 'text-align: center',
                    colors: CDS.view.subview.ColorPatterns.getBaseColors(),
                    series: [
                        {
                            type: 'bar',
                            xField: 'name',
                            yField: ['g1'],
                            labelField: 'g1',

                            highlightCfg: {
                                strokeStyle: 'red'
                            },

                            style: {
                                stroke: 'rgb(40,40,40)',
                                shadowColor: 'black',
                                shadowOffsetX: 3,
                                shadowOffsetY: 3,
                                minGapWidth: 1,
                                maxBarWidth: 35
                            }
                        }
                    ],
                    axes: [
                        {
                            type: 'numeric',
                            position: 'left',
                            fields: ['g1'],
                            grid: {
                                odd: {
                                    fill: '#e8e8e8'
                                }
                            },
                            label: {
                                fields: ['g1'],
                                rotate: {
                                    degrees: -30
                                }
                            }
                        },
                        {
                            type: 'category',
                            position: 'bottom',
                            fields: 'name',
                            visibleRange: [0, 1.0]
                        }
                    ]
                }
            ]
        }
      ],

      listeners: {
          delegate: 'carousel', // listen to xtype of 'polar'
          activeitemchange: function(scope, newCard, oldCard,  eOpts) {
              if(newCard.getId().indexOf("DTPieId") != -1
              || newCard.getId().indexOf("BTPieId") != -1
              || newCard.getId().indexOf("FTPieId") != -1){
                  Ext.get('DTPieLegendId').hide(true);
                  Ext.get('BTPieLegendId').hide(true);
                  Ext.get('FTPieLegendId').hide(true);
              }

              if(newCard.getId().indexOf("DTPieId") != -1){
                  Ext.get('DTPieLegendId').show(true);
              }
              else
                  if(newCard.getId().indexOf("BTPieId") != -1){
                      Ext.get('BTPieLegendId').show(true);
                  }
                  else
                      if(newCard.getId().indexOf("FTPieId") != -1){
                          Ext.get('FTPieLegendId').show(true);
                      }
              if(newCard.getId().indexOf("DTBarId") != -1){
              }
                else
                    if(newCard.getId().indexOf("BTBarId") != -1){
                    }
                else
                    if(newCard.getId().indexOf("FTBarId") != -1){
                    }
          }
        }
    },
    initialize: function () {
        this.callParent();
        Ext.getStore('DTPie').generateData(3);
        Ext.getStore('BTPie').generateData(3);
        Ext.getStore('FTPie').generateData(3);

        //Ext.getCmp('DTPieLegendId').show(true);
        //Ext.getCmp('BTPieLegendId').hide(true);
        //Ext.getCmp('FTPieLegendId').hide(true);
        Ext.get('DTPieLegendId').show(true);
        Ext.get('BTPieLegendId').hide(true);
        Ext.get('FTPieLegendId').hide(true);
    }
});