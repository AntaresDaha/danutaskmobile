Ext.define('CDS.view.tec.IncompleteView', {
        extend: 'Ext.List',
        xtype: 'incompleteview',
        requires: ['CDS.store.Incomplete'],

        config: {
            //grouped: true,
            title: 'Incom',
            itemTpl: '{name}',
            store: 'incomplete'
            //onItemDisclosure: true
            //style: "background-color: #7A007A; color:white;"
        }
    });
