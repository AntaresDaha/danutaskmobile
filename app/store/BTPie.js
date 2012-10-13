(function () {
    var seed = 1.7;

    // Controllable random.
    function random() {
        seed *= 7.3;
        seed -= Math.floor(seed);
        return seed;
    }

Ext.define('CDS.store.BTPie', {
        alias: 'store.BTPie',
        extend: 'Ext.data.Store',
        config: {
            storeId: 'BTPie',
            fields: ['id', 'g1', 'name'],
            data: []
        },
    generateData: function (count) {
        var data = [], i, record = {
            'id': i,
            'g1': Math.round(300 * random() + 100),
            'name': 'done'
        };
        data.push(record);
        for (i = 1; i < count; i++) {
            if(i==1){
                record = {
                    'id': i,
                    'g1': Math.round(Math.abs(record.g1 + 300 * random() - 140)),
                    'name': 'active'
                };
            }
            else{
                record = {
                    'id': i,
                    'g1': Math.round(Math.abs(record.g1 + 300 * random() - 140)),
                    'name': 'open'
                };
            }
            data.push(record);
        }
        this.setData(data);
    },
    constructor: function () {
        this.callParent(arguments);
        this.generateData(3);
        return this;
    }
});
})();