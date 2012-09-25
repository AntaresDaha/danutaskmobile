Ext.define('CDS.store.Members', {
    extend: 'Ext.data.Store',
    
    config: {
        model: 'CDS.model.Members',
        storeId: 'members',
        proxy: {
            type: 'localstorage',
            id: 'members'
        },
        autoLoad: true,  //set auto load to true so that any local data will populated in memory

        // predefined data
        data: [
            {"first_name": "Carol","last_name": "Bartz","photo": "http://assets.en.oreilly.com/1/eventprovider/1/_@user_60981.jpg"},
            {"first_name": "John ","last_name": "Battelle","photo": "http://assets.en.oreilly.com/1/eventprovider/1/_@user_253.jpg"}

            ,{
                "first_name": "Tim",
                "photo": "http://assets.en.oreilly.com/1/eventprovider/1/_@user_251.jpg",
                "last_name": "O'Reilly"
            },
            {
                "first_name": "Eric",
                "photo": "http://assets.en.oreilly.com/1/eventprovider/1/_@user_102517.jpg",
                "last_name": "Schmidt"
            },
            {
                "first_name": "Evan",
                "photo": "http://assets.en.oreilly.com/1/eventprovider/1/_@user_40285.jpg",
                "last_name": "Williams"
            },
            {
                "first_name": "Bill",
                "photo": "http://assets.en.oreilly.com/1/eventprovider/1/_@user_68392.jpg",
                "last_name": "Gurley"
            },
            {
                "first_name": "Frank ",
                "photo": "http://assets.en.oreilly.com/1/eventprovider/1/_@user_78307.jpg",
                "last_name": "Quattrone"
            },
            {
                "first_name": "Todd",
                "photo": "http://assets.en.oreilly.com/1/eventprovider/1/_@user_101040.jpg",
                "last_name": "Bradley"
            },
            {
                "first_name": "Jon",
                "photo": "http://assets.en.oreilly.com/1/eventprovider/1/_@user_53208.jpg",
                "last_name": "Rubinstein"
            },
            {
                "first_name": "Jeff",
                "photo": "http://assets.en.oreilly.com/1/eventprovider/1/_@user_93293.jpg",
                "last_name": "Weiner"
            },
            {
                "first_name": "Jim",
                "photo": "http://assets.en.oreilly.com/1/eventprovider/1/_@user_102588.jpg",
                "last_name": "Balsillie"
            },

            {
                "first_name": "John",
                "photo": "http://assets.en.oreilly.com/1/eventprovider/1/_@user_40504.jpg",
                "last_name": "Heilemann"
            },
            {
                "first_name": "Julius",
                "photo": "http://assets.en.oreilly.com/1/eventprovider/1/_@user_66712.jpg",
                "last_name": "Genachowski"
            },
            {
                "first_name": "Neil",
                "photo": "http://assets.en.oreilly.com/1/eventprovider/1/_@user_104732.jpg",
                "last_name": "Smit"
            }
        ]
    }
});
