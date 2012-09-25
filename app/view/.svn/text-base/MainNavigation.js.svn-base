Ext.define('CDS.view.MainNavigation', {
    extend: 'Ext.navigation.View',
    xtype: 'mainnavigation',

    requires: ['CDS.view.LoginView'],

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
                    itemId: 'addButton',
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