Ext.define('CDS.view.biz.ProjectDetailsView', {
        extend: 'Ext.NestedList',
        xtype: 'projectdetailsview',
        requires: ['CDS.store.ProjectDetails'],

        config: {
            //grouped: true,
            title: 'Project Details',
            //displayField: '<img src="{iconurl}" width="25" heigh="25"></img><span>{name}</span>',
            //itemTpl : '<img src="{iconurl}" width="25" heigh="25"></img><span>BLUB{name}</span>',
            store: 'projectdetails'
            //onItemDisclosure: true
            //style: "background-color: #7A007A; color:white;"

            // add a / for folder nodes in the list
 /*        getItemTextTpl: function() {
                return '{' + this.getDisplayField() + '}<tpl if="leaf !== true">leaf</tpl>';
            }*/

            /*listeners: {
                leafitemtap: function(me, list, index, item, e) {
                    var store = list.getStore(),
                        record  = store.getAt(index)
                    //Ext.Msg.alert('Leaf tapped!', record.data.name, Ext.emptyFn);
                    console.log('Leaf tapped!', record);
                    this.fireEvent('leafitemtap', this);
                }
            }*/
        },

        // add a / for folder nodes in title/back button
        getTitleTextTpl: function() {
            return '{name}';
        },
    // add a / for folder nodes in the list
        getItemTextTpl: function() {
            //return '<img src="{iconurl}" width="13" heigh="13"><span><img src="{iconurl}" width="13" heigh="13"></span><span>{name}</span>';
            //return '{' + this.getDisplayField() + '}<tpl if="leaf !== true">leaf</tpl>';
            return '<table border="0"><tr><td><img src="{iconurl}" width="25" heigh="25"></td><td style="width: 4px;"></td><td>{name}</td></tr></table>'
        }

});
