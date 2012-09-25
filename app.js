Ext.Loader.setConfig({disableCaching: false});

Ext.application({
    name: 'CDS',

    controllers: ['Main'],
    views: ['MainNavigation'],
    stores: ['AppConfig','Login','Staff','DeveloperTasksOverview','ActiveProjects','ProjectDetails','Members'],
    models: ['AppConfig','Login','Staff','DeveloperTasksOverview','ActiveProjects','ProjectDetails','Members'],

    //requires: ['CDS.controller.Main'],

    // Setup the icons and startup screens for phones and tablets.
    phoneStartupScreen: 'resources/loading/Homescreen.jpg',
    tabletStartupScreen: 'resources/loading/Splash_IPad_Portrait.png',
    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    launch: function() {
        Ext.Viewport.add({
            xtype: 'mainnavigation'
            //xtype: 'staffview'
        });
    }
});