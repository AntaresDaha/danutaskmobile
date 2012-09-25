Ext.define('CDS.view.subview.PieChartOverlay', {
    extend: 'Ext.Panel',
    alias: 'widget.piechartoverlay',

    config: {
        cls: 'pieChartOverlay',
        centered: true,
        hideOnMaskTap: true,
        modal: true,
        items: [
            {
                xtype: 'image',
                src: 'http://src.sencha.io/285/285/http://88.198.158.108//hosted//Pie1.jpg'
            }
        ]
    }

});