Ext.define('CDS.view.ManagerOverview', {
    extend: 'Ext.form.Panel',
    xtype: 'manageroverview',
    requires: ['Ext.Img','CDS.store.Staff','CDS.view.subview.StaffView'], // 'CDS.view.subview.StatisticsCarousel' ?

    config: {
        cls: 'clsManagerOverview',
        scrollable: false,
        title: 'Home',
        items: [
            {
                xtype: 'container',
                left: '10%',
                top: '1%',
                width: 327,
                layout: {
                    type: 'hbox'
                },
                items: [
                    {
                        xtype: 'label',
                        html: 'Hello Mr. X, <br> yesterday Y tasks have been finished.',
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
                xtype: 'button',
                ui: 'action-round',
                left: '5%',
                width: '90%',
                top: '29%',
                height: '9%',
                icon: 'resources/icons/BizButtonIcon.png',
                text: 'Biz',
                itemId: 'manageroverview_bizButton'
            },
            {
                xtype: 'button',
                ui: 'action-round',
                left: '5%',
                width: '90%',
                top: '42%',
                height: '9%',
                icon: 'resources/icons/TecButtonIcon.png',
                //iconAlign: 'right',
                text: 'Tec',
                itemId: 'manageroverview_tecButton'
            },
            {
                xtype: 'button',
                ui: 'action-round',
                left: '5%',
                width: '90%',
                top: '55%',
                height: '9%',
                icon: 'resources/icons/StatsButtonIcon.png',
                text: 'Statistics',
                itemId: 'manageroverview_statsButton'
            },
            /*{
                xtype: 'container',
                top: '42%',
                height: '28%',
                width: '100%',
                items: [
                    {
                        xtype: 'image',
                        centered: true,
                        height: '100%',
                        width: '50%',
                        src: 'http://src.sencha.io/150/150/http://88.198.158.108//hosted//PieDT.jpg'
                    }
                ],
                listeners  : {
                    element : 'element',
                    tap     : function() {
                        this.fireEvent('tappedpiechart', this);
                        /*var overlay = Ext.widget('piechartoverlay');
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
            }, */
            {
                xtype: 'container',
                bottom: '2px',
                //top: '77%',
                width: '100%',
                items: [
                    {
                        xtype: 'staffview'
                    }
                ]
            }/**/
        ],
        listeners: {
            delegate: 'container', // listen to xtype of 'textfield'
            tappedpiechart: function() {
                this.fireEvent('tappedpiechart', this);
            }
        }
    },
    listeners:{
        /*painted: function(){
            console.log('PAINTED');
            //Ext.Viewport.setMasked(false);
        }*/
    }
});