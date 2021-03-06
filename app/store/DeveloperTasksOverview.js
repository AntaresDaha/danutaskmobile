Ext.define('CDS.store.DeveloperTasksOverview', {
    extend: 'Ext.data.Store',
    
    config: {
        model: 'CDS.model.DeveloperTasksOverview',
        storeId: 'developertasksoverview',
        proxy: {
            type: 'localstorage',
            id: 'login'
        },
        autoLoad: true,  //set auto load to true so that any local data will populated in memory

        // sorters, etc.
        sorters: 'progress',
        grouper: {
            groupFn: function(record) {
                var strReturn = record.get('dev_last_name');
                return strReturn;
            }
        },

        // predefined data
        data: [
            { dev_last_name: "Bartz", name: "Task A", progress: "95"},
            { dev_last_name: "Bartz", name: "Task B", progress: "90"},
            { dev_last_name: "Bartz", name: "Task C", progress: "12"},
            { dev_last_name: "Bartz", name: "Task D", progress: "45"},
            { dev_last_name: "Battelle", name: "Task E", progress: "93"},
            { dev_last_name: "Battelle", name: "Task F", progress: "100"},
            { dev_last_name: "Battelle", name: "Task G", progress: "25"},
            { dev_last_name: "Battelle", name: "Task H", progress: "55"},
            { dev_last_name: "Battelle", name: "Task I", progress: "100"},
            { dev_last_name: "O'Reilly", name: "Task J", progress: "15"},
            { dev_last_name: "Schmidt", name: "Task K", progress: "25"},
            { dev_last_name: "Schmidt", name: "Task L", progress: "45"},
            { dev_last_name: "Schmidt", name: "Task M", progress: "12"},
            { dev_last_name: "Williams", name: "Task N", progress: "100"},
            { dev_last_name: "Williams", name: "Task O", progress: "00"},
            { dev_last_name: "Williams", name: "Task P", progress: "05"},
            { dev_last_name: "Williams", name: "Task Q", progress: "15"},
            { dev_last_name: "Gurley", name: "Task R", progress: "25"},
            { dev_last_name: "Gurley", name: "Task S", progress: "45"},
            { dev_last_name: "Gurley", name: "Task T", progress: "67"},
            { dev_last_name: "Gurley", name: "Task U", progress: "34"},
            { dev_last_name: "Gurley", name: "Task X", progress: "67"},
            { dev_last_name: "Quattrone", name: "Task Y", progress: "95"},
            { dev_last_name: "Quattrone", name: "Task W", progress: "100"},
            { dev_last_name: "Bradley", name: "Task Z", progress: "15"},
            { dev_last_name: "Bradley", name: "Task AA", progress: "25"},
            { dev_last_name: "Bradley", name: "Task AB", progress: "45"},
            { dev_last_name: "Bradley", name: "Task AC", progress: "67"},
            { dev_last_name: "Bradley", name: "Task AD", progress: "33"},
            { dev_last_name: "Rubinstein", name: "Task E", progress: "93"},
            { dev_last_name: "Rubinstein", name: "Task F", progress: "100"},
            { dev_last_name: "Rubinstein", name: "Task G", progress: "25"},
            { dev_last_name: "Rubinstein", name: "Task H", progress: "55"},
            { dev_last_name: "Rubinstein", name: "Task I", progress: "100"},
            { dev_last_name: "O'Weiner", name: "Task J", progress: "15"},
            { dev_last_name: "Balsillie", name: "Task K", progress: "25"},
            { dev_last_name: "Balsillie", name: "Task L", progress: "45"},
            { dev_last_name: "Balsillie", name: "Task M", progress: "12"},
            { dev_last_name: "Heilemann", name: "Task N", progress: "100"},
            { dev_last_name: "Heilemann", name: "Task O", progress: "00"},
            { dev_last_name: "Heilemann", name: "Task P", progress: "05"},
            { dev_last_name: "Heilemann", name: "Task Q", progress: "15"},
            { dev_last_name: "Genachowski", name: "Task R", progress: "25"},
            { dev_last_name: "Genachowski", name: "Task S", progress: "45"},
            { dev_last_name: "Genachowski", name: "Task T", progress: "67"},
            { dev_last_name: "Genachowski", name: "Task U", progress: "34"},
            { dev_last_name: "Genachowski", name: "Task X", progress: "67"},
            { dev_last_name: "Smit", name: "Task Y", progress: "95"},
            { dev_last_name: "Smit", name: "Task W", progress: "100"},
            { dev_last_name: "Smit", name: "Task Z", progress: "15"},
            { dev_last_name: "Smit", name: "Task AA", progress: "25"},
            { dev_last_name: "Smit", name: "Task AB", progress: "45"},
            { dev_last_name: "Smit", name: "Task AC", progress: "67"},
            { dev_last_name: "Smit", name: "Task AD", progress: "33"}
        ]
    }
});
