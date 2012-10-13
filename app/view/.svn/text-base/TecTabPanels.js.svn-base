Ext.define('CDS.view.TecTabPanels', {
    extend: 'Ext.TabPanel',
    xtype: 'tectabpanels',
    requires: [
        'CDS.view.tec.PerformanceView',
        'CDS.view.tec.RessourcesView',
        'CDS.view.tec.IncompleteView',
        'CDS.view.tec.DispatcherView'
    ],

    config: {
        title: 'Tec',

        items: [
            {
                xtype: 'performanceview',
                title: 'Perfo'
            },
            {
                xtype: 'ressourcesview',
                title: 'Resso'
            },
            {
                xtype: 'dispatcherview',
                title: 'Disp'
            },
            {
                xtype: 'incompleteview',
                title: 'Incom'
            }
        ]
    }
});