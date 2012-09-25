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
            { name: "Active Project ABC", progress: "95"},
            { name: "Active Project 123", progress: "15"},
            { name: "Active Project ABC123", progress: "05"},
            { name: "Active Project foo12", progress: "00"},
            { name: "Active Project bar32", progress: "45"}
        ]
    }
});
