Ext.define('CDS.model.AppConfig', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            { name: 'id_device', type: 'string', defaultValue: ''},
            { name: 'lastusername', type: 'string', defaultValue: ''},
            { name: 'lastpassword', type: 'string', defaultValue: ''},
            { name: 'remember', type: 'boolean', defaultValue: true},
            { name: 'sessionid', type: 'string', defaultValue: '123456789'}
        ]
    }

});
