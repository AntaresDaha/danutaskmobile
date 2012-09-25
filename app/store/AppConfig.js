Ext.define('CDS.store.AppConfig', {
    extend: 'Ext.data.Store',
    
    config: {
        model: 'CDS.model.AppConfig',
        storeId: 'appconfig',
        proxy: {
            type: 'localstorage',
            id: 'appconfig'
        },
        autoLoad: true
    }
});
