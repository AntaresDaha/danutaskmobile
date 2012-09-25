Ext.define('CDS.view.ManagerOverview', {
    extend: 'Ext.form.Panel',
    xtype: 'manageroverview',
    requires: ['CDS.store.Staff','CDS.view.subview.StaffView','CDS.view.subview.PieChartOverlay'],

    config: {
        scrollable: false,
        title: 'Home',
        items: [
            {
                xtype: 'container',
                left: '10%',
                top: '0%',
                width: 327,
                layout: {
                    type: 'hbox'
                },
                items: [
                    {
                        xtype: 'label',
                        html: 'Hallo Mr. X, <br> gestern wurden Y Aufgaben erledigt.',
                        styleHtmlContent: true,
                        width: '50%'
                    },
                    {
                        xtype: 'image',
                        height: 107,
                        width: 159,
                        src: 'http://88.198.158.108//hosted/Portrait.jpg'
                    }
                ]
            },
            {
                xtype: 'container',
                bottom: '61%',
                top: '30%',
                width: '100%',
                layout: {
                    type: 'hbox'
                },
                items: [
                    {
                        xtype: 'button',
                        ui: 'round',
                        width: '42%',
                        icon: 'resources/icons/BizButtonIcon.png',
                        text: 'Biz',
                        itemId: 'manageroverview_bizButton'
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        ui: 'round',
                        width: '42%',
                        icon: 'resources/icons/TecButtonIcon.png',
                        iconAlign: 'right',
                        text: 'Tec',
                        itemId: 'manageroverview_tecButton'
                    }
                ]
            },
            {
                xtype: 'container',
                bottom: '25%',
                top: '42%',
                width: '100%',
                items: [
                    {
                        xtype: 'image',
                        centered: true,
                        height: '100%',
                        width: '50%',
                        src: 'http://src.sencha.io/150/150/http://88.198.158.108//hosted//Pie1.jpg'
                    }
                ],
                listeners  : {
                    element : 'element',
                    tap     : function() {
                        var overlay = Ext.widget('piechartoverlay');
                        overlay.showBy(this);
                        overlay.setZIndex(999);
                        overlay.setLeft('3%');
                        overlay.setTop('10%');
                        overlay.setWidth('94%');
                        overlay.setHeight('70%');
                        var divImage = Ext.get('ext-image-3');
                        var divInnerPanel = divImage.up('div.x-panel-inner');

                        divImage.setStyle('width',  '285px');
                        divImage.setStyle('height', '285px');

                        console.log('divImage:', divImage);
                        console.log('divInnerPanel:', divInnerPanel);
                    }
                }
            },
            {
                xtype: 'container',
                bottom: '-35px',
                //top: '77%',
                width: '100%',
                items: [
                    {
                        xtype: 'staffview'
                    }
                ]
            }
        ]
    }
});