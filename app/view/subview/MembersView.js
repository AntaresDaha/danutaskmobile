Ext.define('CDS.view.subview.MembersView', {
        extend: 'Ext.dataview.DataView',
        xtype: 'membersview',
        requires: ['CDS.store.Members'],

    layout: {
            animation: {
                type: 'slide',
                direction: 'top',
                duration: 1000
            }
        },

        config: {
            //give it an xtype of list for the list component
            height: 134,
            //width: 10000,
            cls: 'horizontaldataview',

            //top: '77%',
            width: 'auto',
            scrollable: 'horizontal',
            inline: {
                wrap: false
            },
            //set the itemtpl to show the fields for the store
            itemTpl: '<img src="http://src.sencha.io/62/80/{photo}"><div style="font-size: 12px;">{first_name} {last_name}</div>',
            //bind the store to this list
            store: 'members'
        }
});