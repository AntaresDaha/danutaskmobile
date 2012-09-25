Ext.define('CDS.store.ProjectDetails', {
    extend: 'Ext.data.TreeStore',
    
    config: {
        model: 'CDS.model.ProjectDetails',
        storeId: 'projectdetails',
        proxy: {
            type: 'ajax',
            //url: 'source.json'
            url: 'app/store/data/ProjectTree.json'
        },
        autoLoad: true  //set auto load to true so that any local data will populated in memory
    }
});
