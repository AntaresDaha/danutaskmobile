Ext.define('CDS.view.BizTabPanels', {
    extend: 'Ext.TabPanel',
    xtype: 'biztabpanels',
    requires: [
        'CDS.view.biz.ActiveProjectsView',
        'CDS.view.biz.ProjectDetailsView'
    ],

    config: {
        title: 'Biz',

        items: [
            {
                xtype: 'activeprojectsview'
            },
            {
                xtype: 'projectdetailsview'
            }
        ]

        /* ,tabBar:{
         items:[{
         xtype: 'button',
         ui: 'round',
         text: 'Button1',
         dock: 'left',
         handler: function(){
         alert('Botton1 Working Now');
         }
         }]
         }*/
    }
});