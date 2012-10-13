Ext.define('CDS.view.biz.DevTaskOverview', {
    extend: 'Ext.form.Panel',
    xtype: 'devtaskoverview',
    requires: ['CDS.view.subview.MembersView'],

    config: {
        scrollable: false,
        title: 'Home',
        items: [
            {
                xtype: 'label',
                html: '<b>Progress</b>',
                styleHtmlContent: true,
                width: '20%',
                left: '5%',
                top: '1%'
            },
            {
                xtype: 'container',
                left: '5.5%',
                top: '12%',
                width: '100%',
                layout: {
                    type: 'hbox'
                },
                items: [
                    {
                        xtype: 'sliderfield',
                        width: '75%',
                        //label: 'Progress',
                        //labelWidth: '30%',
                        labelWrap: true,
                        disabled: true,
                        value: [
                            75
                        ]
                    },
                    {
                        xtype: 'label',
                        html: '75%',
                        styleHtmlContent: true,
                        width: '10%'
                    }
                ]
            },
            {
                xtype: 'label',
                html: 'Some space for devtask description. Aenean quis eros sapien, non ' +
                    'fermentum eros. In hac habitasse platea dictumst.',
                styleHtmlContent: true,
                left: '5%',
                top: '30%',
                width: '90%'
            },

            {
                xtype: 'label',
                html: 'Assigned Developer:',
                styleHtmlContent: true,
                left: '5%',
                bottom: '31%',
                width: '100%'
            },
            {
                xtype: 'image',
                left: '36%',
                bottom: '10%',
                width: '40%',
                height: '100px',
                src: 'resources\\images\\portraitbig.jpg'
            },
            {
                xtype: 'label',
                html: 'Henri Mailer',
                styleHtmlContent: true,
                left: '36%',
                bottom: '2%',
                width: '100%',
                style: 'font-size: 15px'
            }
        ]
    }
});