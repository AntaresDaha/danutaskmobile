Ext.define('CDS.model.ActiveProjects', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            { name: 'name',       type: 'string', defaultValue: ''},
            { name: 'progress',   type: 'string', defaultValue: '00'}
        ]
    },

    shortName: function() {
        var d = this.data.name;
        if(d.length > 18)
            return d.substr(0,14) + "...";
        else
            return d;
    }
});
