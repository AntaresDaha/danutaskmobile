Ext.define('CDS.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            // views
            main: 'mainnavigation',
            login: 'loginview',
            manageroverview: 'manageroverview',
            staffview: 'staffview',
            activeprojectsview: 'activeprojectsview',

            // buttons, subviews, etc.
            loginButton: 'button#loginview_loginButton',
            bizButton: 'button#manageroverview_bizButton'
        },
        control: {
            // views
            main: {
                push: 'onViewPush',
                pop: 'onViewPop',
                initialize: function(){
                    //this.getMain().getNavigationBar().setDefaultBackButtonText('Logout');
                    //this.getMain().getNavigationBar().setUseTitleForBackButtonText(false);
                }
            },

            login: {
                push: 'onViewPush',
                pop: 'onViewPop',
                initialize: function(){
                    console.log('INIT Login!');
                    var appconfigdata = this.loadAppConfig();
                    if(appconfigdata != null){
                        this.getLogin().setValues({
                            loginview_user: appconfigdata.lastusername,
                            loginview_password: appconfigdata.lastpassword,
                            loginview_remember: appconfigdata.remember
                        });
                    }
                    var appconfigstore = Ext.getStore('appconfig');
                }
            },

            manageroverview: {
                initialize: function(){
                    console.log('INIT overview!');
                },
                tappedptappedpiecharttappeiechart: 'showPieChart2'
            },

            staffview:{
                itemtap: 'onStaffViewItemTap'
            },

            activeprojectsview:{
                disclose: 'emptyFn',
                itemtap: 'onActiveProjectTap'
            },

            // buttons, etc
            loginButton: {
                tap: 'doLogin'
            },
            'button#manageroverview_bizButton': {
                tap: 'pushBiz'
            },
            'button#manageroverview_tecButton': {
                tap: 'pushTec'
            }
        }
    },

    //HELPER
    emptyFn: function(){},

    saveAppConfig: function(newappconfig) {
        var appconfigstore = Ext.getStore('appconfig');
        //appconfigstore.remove(appconfigstore.getRange());
        var existingconfig = appconfigstore.getAt(0);
        existingconfig.setDirty(true);
        //console.log('existingconfig: ', existingconfig);
        appconfigstore.sync();
        existingconfig.setDirty(false);
    },

    loadAppConfig: function(){
        //console.log('loadAppConfig!');
        var appconfigstore = Ext.getStore('appconfig');

        if(appconfigstore.getAt(0) == null){
            // create app config!
            appconfigstore.add({id_device: "12345", lastusername: "",
                                lastpassword: "", remember: true});
            appconfigstore.sync();
            return null;
        }
        else
            return appconfigstore.getAt(0).data;
    },

    // AUTOMATIC
    onViewPush: function(oldview, newview) {
        //console.log('view pushed: oldview:', oldview);
        //console.log('view pushed: newview:', newview);

        if (oldview.id == "ext-activitydetail-1") {
        } else {

        }
    },

    onViewPop: function(oldview, newview) {
        //console.log('view popped: oldview:', oldview);
        //console.log('view popped: newview:', newview);
/*        if (newview.id == "ext-activitydetail-1") {
            this.showAddButton();
        } else {
            this.hideAddButton();
        }
        this.showAddButton();
        this.reloadStoreInstances();*/
    },

    onMainPush: function(view, item) {
        /*        console.log('View pushed!');
         this.hideAddButton();
         this.hideSaveButton();*/
    },


    // MANUAL
    doLogin: function() {
        //console.log('try login');
        var loginstore = Ext.getStore('login');

        loginstore.clearFilter();
        loginstore.filter('user', this.getLogin().getValues().loginview_user);
        loginstore.filter('password', this.getLogin().getValues().loginview_password);
        //exactMatch = true?
        //console.log('count: ', loginstore.getCount());
        if(loginstore.getCount() == 1){
            // update appconfig with "new" standard user
            var appconfigdata = this.loadAppConfig();
                appconfigdata.lastusername = this.getLogin().getValues().loginview_user;
                appconfigdata.lastpassword = this.getLogin().getValues().loginview_password;
                appconfigdata.remember = this.getLogin().getValues().loginview_remember;
            this.saveAppConfig(appconfigdata);
            //console.log('successfully logged in!');

            //pushview
            var mymanageroverview = Ext.create('CDS.view.ManagerOverview', {});
            this.getMain().push(mymanageroverview); // push to viewstack
        }
        else{
            Ext.Msg.alert('Failed', 'Could not verify account data.', Ext.emptyFn);
        }
        loginstore.clearFilter();
    },

    pushBiz: function(){
        var biztabpanels = Ext.create('CDS.view.BizTabPanels', {
            xtype: 'biztabpanels'
        });

        // copy the values of the selected record into the view
        //dtoverview.setRecord(record);
        this.getMain().push(biztabpanels);
    },
    pushTec: function(){},

    onActiveProjectTap: function(list, index, target, record){
        console.log('onactivepjtap!');
        console.log('name:',record.getData().name);

        var myprojectoverview = Ext.create('CDS.view.biz.ProjectOverview', {
            xtype: 'projectoverview',
            title: record.shortName()
        });

        // copy the values of the selected record into the view
        //dtoverview.setRecord(record);
        this.getMain().push(myprojectoverview);
    },

    onStaffViewItemTap: function(list, index, target, record){
        var dtstore = Ext.getStore('developertasksoverview');
        dtstore.clearFilter();
        dtstore.filter('dev_last_name', record.getData().last_name);
        var dtoverview = Ext.create('CDS.view.DeveloperTasksOverview', {
            xtype: 'developertasksoverview',
            title: record.shortName() + '\'s Tasks',
            data: record.getData()
        });

        // copy the values of the selected record into the view
        //dtoverview.setRecord(record);
        this.getMain().push(dtoverview);
    }



});
