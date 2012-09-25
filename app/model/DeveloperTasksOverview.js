Ext.define('CDS.model.DeveloperTasksOverview', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            { name: 'dev_last_name',  type: 'string', defaultValue: ''},
            { name: 'name',       type: 'string', defaultValue: ''},
            { name: 'progress',   type: 'string', defaultValue: '00'}
        ]
    },

    shortName: function() {
        var d = this.data.dev_last_name;
        if(d.length > 10)
            return d.substr(0,8) + "...";
        else
            return d;
    }
});
