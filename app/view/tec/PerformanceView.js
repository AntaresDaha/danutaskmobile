Ext.define('CDS.view.tec.PerformanceView', {
    extend: 'Ext.form.Panel',
    xtype: 'performanceview',
    requires: ['CDS.store.Staff', 'CDS.view.subview.PerformanceBar',  'CDS.store.PerformanceBar',
               'Ext.form.FieldSet', 'Ext.field.Select'],

    config: {
        scrollable: false,
        title: 'Perfo',
        items: [
            {
                xtype: 'fieldset',
                left: '5%',
                top: '2%',
                width: '90%',
                items: [
                    {
                        xtype: 'selectfield',
                        labelAlign: 'left',
                        labelWidth: '68%',
                        name: 'status',
                        label: 'Developer',
                        valueField: 'last_name',
                        displayField: 'last_name',
                        store: 'staff'
                    }
                ]
            },
            {
                top: '15%',
                width: '90%',
                height: '85%',
                left: '5%',
                xtype: 'performancebar'

                //xtype: 'image',
                //src: 'resources\\images\\finishedtasks.jpg'
            }
        ],

        listeners: {
            delegate: 'field', // listen to xtype of 'textfield'
            //delegate: 'textfield', // listen to xtype of 'textfield'
            change: 'changeEvent'
        }
    },

    changeEvent: function() {
        console.log('in pv data changed.');
        this.fireEvent('selecteddevchanged', this);
    }
});