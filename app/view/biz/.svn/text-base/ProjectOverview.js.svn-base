Ext.define('CDS.view.biz.ProjectOverview', {
    extend: 'Ext.form.Panel',
    xtype: 'projectoverview',
    requires: ['CDS.view.subview.MembersView'],

    config: {
        scrollable: false,
        title: 'Home',
        items: [
            {
                xtype: 'label',
                html: 'Some space for project description and / or other information',
                styleHtmlContent: true,
                left: '5%',
                top: '-1%',
                width: '90%'
            },
            {
                xtype: 'label',
                html: '<b>Progress</b>',
                styleHtmlContent: true,
                width: '20%',
                left: '5%',
                top: '14%'
            },
            {
                xtype: 'container',
                left: '5.5%',
                top: '23%',
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
                html: 'Estimated Date of Completition:<br><h3>28.03.2013</h3>',
                styleHtmlContent: true,
                left: '5%',
                top: '38%',
                width: '100%'
            },
            /*{
                xtype: 'label',
                html: 'Project Members',
                styleHtmlContent: true,
                left: '5%',
                bottom: '148px',
                width: '100%'
            },*/
            {
                xtype: 'container',
                bottom: '53px',
                //top: '77%',
                width: '100%',
                items: [
                    {
                        xtype: 'membersview'
                    }
                ]
            },
            {
                xtype: 'button',
                ui: 'round',
                left: '15%',
                width: '70%',
                bottom: '1%',
                height: '10%',
                //icon: 'resources/icons/TecButtonIcon.png',
                //iconAlign: 'right',
                text: 'Project Details',
                itemId: 'projectoverview_detailsButton'
            }
        ]
    }
});