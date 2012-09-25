Ext.define('CDS.model.Members', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            { name: 'first_name',       type: 'string', defaultValue: ''},
            { name: 'last_name',   type: 'string', defaultValue: ''},
            { name: 'photo',   type: 'string', defaultValue: 'resources/images/unknown.jpg'},
            { name: 'active_projects_name',   type: 'string', defaultValue: 'Active Project ABC'}
        ]
    },

    shortName: function() {
        var d = this.data.last_name;
        if(d.length > 7)
            return d.substr(0,4) + "...";
        else
            return d;
    }
});
