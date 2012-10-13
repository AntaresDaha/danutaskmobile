Ext.define('CDS.view.tec.DispatcherView', {
        extend: 'Ext.form.Panel',
        xtype: 'dispatcherview',
        requires: ['CDS.store.Staff','CDS.store.DeveloperTasksOverview',
                   'Ext.field.Toggle'],

        config: {
            title: 'Dispa',
            scrollable: false,
            items: [
                {
                    xtype: 'fieldset',
                    left: '2%',
                    top: '2%',
                    height: '65%',
                    width: '96%',
                    cls: 'dispatchviewfieldset1',
                    items: [
                        {
                            xtype: 'selectfield',
                            labelAlign: 'left',
                            labelWidth: '68%',
                            name: 'status',
                            label: 'Developer',
                            valueField: 'last_name',
                            displayField: 'last_name',
                            store: 'staff'
                        },
                        {
                            xtype: 'container',
                            cls: 'extraToggleLabelToggleContainer',
                            layout: {
                                type: 'hbox'
                            },
                            items: [
                                {
                                    xtype: 'spacer',
                                    width: '3%',
                                    height: '59px'
                                    //left: '5%'
                                },
                                {
                                    xtype: 'label',
                                    cls: 'extraToggleLabelToggle',
                                    html: '<br>Grabbed',
                                    width: '61%',
                                    height: '59px'
                                    //left: '5%'
                                },
                                {
                                    xtype: 'togglefield',
                                    labelWidth: 0,
                                    value: 1,
                                    left: '27%',
                                    height: '59px'
                                },
                                {
                                    xtype: 'label',
                                    //docked: 'right',
                                    html: '<br>Past',
                                    cls: 'extraToggleLabelToggle',
                                    //left: '70%'
                                    height: '59px'
                                }
                            ]
                        },
                        {
                            height: '200px',
                            xtype: 'list',
                            cls: 'dispatchviewlist1',
                            //title: 'Name\'s Tasks',
                            itemTpl: '{progress}% - {name}',
                            store: 'developertasksoverview',
                            onItemDisclosure: false
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    left: '2%',
                    top: '70%',
                    //height: '35%',
                    width: '96%',
                    items: [
                        {
                            xtype: 'container',
                            cls: 'extraToggleLabelToggleContainer',
                            layout: {
                                type: 'hbox'
                            },
                            items: [
                                {
                                    xtype: 'spacer',
                                    width: '3%',
                                    height: '59px'
                                    //left: '5%'
                                },
                                {
                                    xtype: 'label',
                                    cls: 'extraToggleLabelToggle',
                                    html: '<br>Dispatch',
                                    width: '61%',
                                    height: '59px'
                                    //left: '5%'
                                },
                                {
                                    xtype: 'togglefield',
                                    labelWidth: 0,
                                    value: 1,
                                    left: '27%',
                                    height: '59px'
                                },
                                {
                                    xtype: 'label',
                                    //docked: 'right',
                                    html: '<br>Recommend',
                                    cls: 'extraToggleLabelToggle',
                                    height: '59px'
                                    //left: '70%'
                                }
                            ]
                        },
                        {
                            xtype: 'selectfield',
                            labelAlign: 'left',
                            name: 'status',
                            label: 'Assign',
                            valueField: 'name',
                            displayField: 'name',
                            store: 'developertasksoverview'
                        }
                    ]
                }
            ],
            listeners  : {
                element : 'element',
                painted     : function() {
                    //console.log('PAINTED IN DV!2')
                    var divFieldSet1Height = Ext.select('div.dispatchviewfieldset1').getHeight().el.getHeight();
                    var divFieldSet1List = Ext.select('div.dispatchviewlist1');
                    divFieldSet1List.setHeight(divFieldSet1Height*0.6);
                    //console.log('divFieldSet1List:', divFieldSet1List);
                    /*
                    var divToggle1Height = Ext.select('div.extraToggleLabelToggle1').down('div.x-form-label').getHeight();
                    var divExtraToggleLable1 = Ext.select('div.extraToggleLabel1');
                    var oldX = divExtraToggleLable1.getHeight().el.getX();
                    divExtraToggleLable1.setY(divToggle1Height.el.getY());
                    divExtraToggleLable1.setX(oldX);

                    var divToggle2Height = Ext.select('div.extraToggleLabelToggle2').down('div.x-form-label').getHeight();
                    var divExtraToggleLable2 = Ext.select('div.extraToggleLabel2');
                    divExtraToggleLable2.setY(divToggle2Height.el.getY());
                    divExtraToggleLable2.setX(oldX);
                    console.log('divToggle2Height:', divToggle2Height);
                    console.log('divExtraToggleLable2:', divExtraToggleLable2);*/
                }
            }
        }
    });
