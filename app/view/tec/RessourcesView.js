Ext.define('CDS.view.tec.RessourcesView', {
        extend: 'Ext.List',
        xtype: 'ressourcesview',
        requires: ['CDS.store.DeveloperTasksOverview'],

        config: {
            //grouped: true,
            title: 'Resso',
            itemTpl: '{progress}% - {name}',
            grouped: true,
            store: 'developertasksoverview'
            //onItemDisclosure: true,
            //style: "background-color: #7A007A; color:white;"
        }
    });
