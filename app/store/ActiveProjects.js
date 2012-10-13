Ext.define('CDS.store.ActiveProjects', {
    extend: 'Ext.data.Store',
    
    config: {
        model: 'CDS.model.ActiveProjects',
        storeId: 'activeprojects',
        proxy: {
            type: 'localstorage',
            id: 'login'
        },
        autoLoad: true,  //set auto load to true so that any local data will populated in memory

        // predefined data
        data: [
            { name: "Project 1", progress: "95"},
            { name: "Project 2", progress: "15"},
            { name: "Project 4", progress: "05"},
            { name: "Project 6", progress: "45"}
        ]
    }
});
