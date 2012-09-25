Ext.define('CDS.store.Login', {
    extend: 'Ext.data.Store',
    
    config: {
        model: 'CDS.model.Login',
        storeId: 'login',
        proxy: {
            type: 'localstorage',
            id: 'login'
        },
        autoLoad: true,  //set auto load to true so that any local data will populated in memory

        // predefined data
        data: [
            { user: "", password: ""},
            { user: "lazias", password: "lazias"},
            { user: "c@c.c", password: "c"},
            { user: "lazias", password: "ejhnje"},
            { user: "chefdomi@web.de", password: "ejhnje"},
            { user: "dominik@lazias.de", password: "ejhnje"}
        ]
    }
});
