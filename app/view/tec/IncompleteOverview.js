Ext.define('CDS.view.tec.IncompleteOverview', {
    extend: 'Ext.form.Panel',
    xtype: 'incompleteoverview',
    requires: ['CDS.store.Incomplete', 'CDS.view.subview.BetterTextAreaField'],
    config: {
        scrollable: false,
        tpl: [
            //'Hello {firstName}!'
        ],
        title: 'Home',
        items: [
            {
                xtype: 'container',
                left: '5%',
                items: [
                    {
                        xtype: 'fieldset',
                        title: 'Developer\'s request',
                        width: '140%',
                        items: [
                            {
                                xtype: 'textareafield',
                                name: 'devrequest',
                                readOnly: true,
                                cls: 'incompleteTextfield',
                                value:'...'
                            }
                        ]
                    },
                    {
                        xtype: 'fieldset',
                        title: 'Task\'s Description',
                        width: '140%',
                        items: [
                            {
                                //xtype: 'bettertextareafield',
                                xtype: 'textareafield',
                                name: 'desc',
                                cls: 'incompleteTextfield',
                                //maxRows: 8,
                                value: '...'
                            }
                        ]
                    }
                ]
            },
 /*           {
                xtype: 'label',
                html: '<b>Developer\'s request</b>',
                styleHtmlContent: true,
                width: '100%',
                left: '5%',
                top: '1%'
            },
            {
                xtype: 'textareafield',
                name: 'devrequest',
                readOnly: true,
                left: '10%',
                top: '11%',
                maxHeight: '50%',
                width: '80%',
                value:'...'
            },
            {
                xtype: 'label',
                html: '<b>Task</b>',
                styleHtmlContent: true,
                left: '5%',
                bottom: '50%',
                width: '100%'
                //style: 'font-size: 15px'
            },
            {
                xtype: 'textareafield',
                name: 'desc',
                maxRows: 10,
                left: '10%',
                top: '60%',
                maxHeight: '33%',
                width: '80%',
                value: '...'
            },*/
            {
                xtype: 'toolbar',
                docked: 'bottom',
                items: [
                    { xtype: 'spacer' },
                    {
                        text: 'Confirm',
                        itemId: 'incompleteoverview_saveButton',
                        ui: 'confirm',
                        hidden: true,
                        //docked: 'right',
                        hideAnimation: Ext.os.is.Android ? false : {
                            type: 'fadeOut',
                            duration: 200
                        },
                        showAnimation: Ext.os.is.Android ? false : {
                            type: 'fadeIn',
                            duration: 200
                        }
                    }
                ]
            }
        ],

        listeners: {
            delegate: 'field', // listen to xtype of 'textfield'
            //delegate: 'textfield', // listen to xtype of 'textfield'
            change: 'changeEvent',
            check: 'changeEvent'
        }
    },

    changeEvent: function() {
        //console.log('in ic data changed.');
        this.fireEvent('change', this);
    }
});