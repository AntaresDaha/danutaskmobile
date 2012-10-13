Ext.define('CDS.store.PerformanceBar', {
        alias: 'store.PerformanceBar',
        extend: 'Ext.data.Store',
        config: {
            storeId: 'PerformanceBar',
            fields: ['id','day','week','month','year','all','name'],
            data: []
        },

        getRandom: function (min, max) {
            if(min > max) {
                return -1;
            }

            if(min == max) {
                return min;
            }

            var r;

            do {
                r = Math.random();
            }
            while(r == 1.0);

            return min + parseInt(r * (max-min+1));
        },

        generateData: function (count) {
            var data = [], record = {
                'id': 0,
                'day': this.getRandom(0,6),
                'week': 0,
                'month': 0,
                'year': 0,
                'all': 0,
                'name': 'Day'
            }; record.all = record.day; data.push(record);

            record = {
                'id': 1,
                'day': 0,
                'week': this.getRandom(10,20),
                'month': 0,
                'year': 0,
                'all': 0,
                'name': 'Week'
            }; record.all = record.week; data.push(record);

            record = {
                'id': 2,
                'day': 0,
                'week': 0,
                'month': this.getRandom(40,80),
                'year': 0,
                'all': 0,
                'name': 'Month'
            }; record.all = record.month; data.push(record);
            record = {
                'id': 3,
                'day': 0,
                'week': 0,
                'month': 0,
                'year': this.getRandom(400,600),
                'all': 0,
                'name': 'Year'
            }; record.all = record.year; data.push(record);

            this.setData(data);
        },
        constructor: function () {
            this.callParent(arguments);
            this.generateData(4);
            return this;
        }
});
