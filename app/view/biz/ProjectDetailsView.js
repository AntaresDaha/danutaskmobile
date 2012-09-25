Ext.define('CDS.view.biz.ProjectDetails', {
        extend: 'Ext.NestedList',
        xtype: 'projectdetailsview',
        requires: ['CDS.store.ProjectDetails'],

        config: {
            //grouped: true,
            title: 'Project Details',
            displayField: 'name',
            itemTpl: '{name}',
            store: 'projectdetails',
            //onItemDisclosure: true
            //style: "background-color: #7A007A; color:white;"

            // add a / for folder nodes in title/back button
            getTitleTextTpl: function() {
                return '{' + this.getDisplayField() + '}<tpl if="leaf !== true">**</tpl>';
            },
            // add a / for folder nodes in the list
            getItemTextTpl: function() {
                return '{' + this.getDisplayField() + '}<tpl if="leaf !== true">leaf</tpl>';
            },

            listeners: {
                leafitemtap: function(me, list, index, item, e) {
                    var store = list.getStore(),
                        record  = store.getAt(index)
                    Ext.Msg.alert('Leaf tapped!', record.data.name, Ext.emptyFn);
                    console.log('Leaf tapped!', record);
                }
            }
        }
    });
