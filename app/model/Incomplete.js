Ext.define('CDS.model.Incomplete', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            { name: 'name',       type: 'string', defaultValue: ''},
            { name: 'progress',   type: 'string', defaultValue: '00'},
            { name: 'devrequest',   type: 'string', defaultValue: ''},
            { name: 'desc',   type: 'string', defaultValue: ''}
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
