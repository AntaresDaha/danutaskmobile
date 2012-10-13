Ext.define('CDS.view.MainNavigation', {
    extend: 'Ext.navigation.View',
    xtype: 'mainnavigation',

    requires: ['CDS.view.LoginView','CDS.view.ManagerOverview'],

    config: {
        useTitleForBackButtonText: true,
        items: [{
            xtype: 'loginview'
        }
       ],

        navigationBar: {
            items: [
                {
                    xtype: 'button',
                    itemId: 'mainnavigation_addButton',
                    iconCls: 'add',
                    iconMask: true,
                    ui: 'plain',
                    align: 'right',
                    hidden: true,
                    showAnimation: Ext.os.is.Android ? false : {
                        type: 'fadeIn',
                        duration: 200
                    }
                }]
        }
    }
});