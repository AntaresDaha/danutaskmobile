Ext.define('CDS.view.subview.StaffView', {
        extend: 'Ext.dataview.DataView',
        xtype: 'staffview',
        requires: ['CDS.store.Staff'],

    layout: {
            animation: {
                type: 'slide',
                direction: 'top',
                duration: 1000
            }
        },

        config: {
            //give it an xtype of list for the list component
            height: 205,
            //width: 10000,
            cls: 'horizontaldataview',

            //top: '77%',
            width: 'auto',
            scrollable: 'horizontal',
            inline: {
                wrap: false
            },
            //set the itemtpl to show the fields for the store
            itemTpl: '<img src="{photo}"><div>{first_name} {last_name}</div>',
            //bind the store to this list
            store: 'staff'
        }
});