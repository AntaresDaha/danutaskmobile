//<debug>
Ext.Loader.setPath({
    'Ext': 'touch/src',
    'CDS': 'app'
});
//</debug>

Ext.application({
    name: 'CDS',

    requires: [
        'Ext.MessageBox'
    ],

    controllers: ['Main'],
    views: ['MainNavigation','subview.ColorPatterns'],
    stores: ['AppConfig','Login','Staff','DeveloperTasksOverview','ActiveProjects','ProjectDetails','Members','Incomplete','DTPie','BTPie','FTPie','PerformanceBar'],
    models: ['AppConfig','Login','Staff','DeveloperTasksOverview','ActiveProjects','ProjectDetails','Members','Incomplete'],

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

    startupImage: {
        '320x460': 'resources/loading/320x460.png',
        '640x920': 'resources/loading/640x920.png',
        '768x1004': 'resources/loading/768x1004.png',
        '748x1024': 'resources/loading/748x1024.png',
        '1536x2008': 'resources/loading/1536x2008.png',
        '1496x2048': 'resources/loading/1496x2048.png'
    },

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('CDS.view.MainNavigation'));
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
