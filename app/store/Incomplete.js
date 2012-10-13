Ext.define('CDS.store.Incomplete', {
    extend: 'Ext.data.Store',
    
    config: {
        model: 'CDS.model.Incomplete',
        storeId: 'incomplete',
        proxy: {
            type: 'localstorage',
            id: 'login'
        },
        autoLoad: true,  //set auto load to true so that any local data will populated in memory

        // predefined data
        data: [
            { name: "Task B", progress: "15", devrequest: "Integer tempus iaculis lacinia. Mauris gravida pellentesque velit, sed aliquet lectus pretium in. Nulla in feugiat quam. Nam ac risus in purus sagittis faucibus. Donec et dui ac sapien ullamcorper sagittis. Sed ac mi et justo mollis blandit sit amet at orci. Duis pretium varius sem non pharetra. Proin congue tellus quis elit pellentesque elementum. Pellentesque ornare lacinia dui, vitae eleifend ipsum convallis nec. ", desc: "Nam ullamcorper diam et eros convallis non tincidunt odio mollis. Curabitur varius turpis quis arcu sollicitudin nec malesuada lorem laoreet. Aliquam erat volutpat. Phasellus erat magna, porttitor a imperdiet quis, hendrerit id arcu. Pellentesque consectetur elementum magna id consectetur. Donec vel risus massa. Nam quis lorem tortor, eget posuere ligula."},
            { name: "Task D", progress: "05", devrequest: "Duis sed nulla massa, at fermentum elit. Etiam mi nisi, varius et semper id, consectetur in mi. Fusce luctus aliquam mi nec laoreet. Nulla quis ornare erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce justo diam, feugiat et porta vehicula, consequat vel nibh. Phasellus ultrices, magna in tincidunt mattis, lorem erat feugiat ante, ut aliquam orci ante ut metus.", desc: "In hac habitasse platea dictumst. Maecenas sollicitudin feugiat turpis, quis consectetur orci hendrerit vel. Sed imperdiet nisi at arcu adipiscing non mattis ante tempus. Curabitur interdum massa in eros rhoncus suscipit. Praesent facilisis massa sed purus hendrerit in tempor augue ultrices. Suspendisse potenti. Phasellus interdum eros mollis ligula placerat semper. Aliquam erat volutpat."}
        ]
    }
});
