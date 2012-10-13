Ext.define('CDS.controller.Main', {
    extend: 'Ext.app.Controller',
    requires: [
        'Ext.util.JSONP'
    ],
    config: {
        refs: {
            // views
            main: 'mainnavigation',
            login: 'loginview',
            manageroverview: 'manageroverview',
                staffview: 'staffview',
                statisticscarousel: 'statisticscarousel',
            developertasksoverview: 'developertasksoverview',
            activeprojectsview: 'activeprojectsview',
            projectdetailsview: 'projectdetailsview',
                tectabpanels: 'tectabpanels',
                    performanceview: 'performanceview',
                    dispatcherview: 'dispatcherview',
                    incompleteview: 'incompleteview',
                    incompleteoverview: 'incompleteoverview',
                        bettertextareafield: 'bettertextareafield',
                biztabpanels: 'biztabpanels',



            // buttons, subviews, etc.
            loginButton: 'button#loginview_loginButton',
            bizButton: 'button#manageroverview_bizButton',
            saveButton: 'button#incompleteoverview_saveButton',
            addButton: 'button#mainnavigation_addButton'
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
                    //console.log('INIT Login!');
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
                    var dtstore = Ext.getStore('developertasksoverview');
                    dtstore.clearFilter();

                },
                show: function(){
                    Ext.Viewport.setMasked(false);
                }
                //tappedpiechart: 'pushStatisticsCarousel'
            },

            developertasksoverview: {
                show: function(){
                    Ext.Viewport.setMasked(false);
                }
            },

            statisticscarousel:{
                activeitemchange: function(scope, newCard, oldCard,  eOpts) {
                    if(newCard.getId().indexOf("statisticscarouselpies") != -1){
                        var barsactiveitemid = Ext.getCmp('statisticscarouselbars').getActiveItem().getId();

                        if(barsactiveitemid.indexOf("DTBarId") != -1)
                            Ext.getCmp('statisticscarouselpies').setActiveItem(0);
                        else if(barsactiveitemid.indexOf("BTBarId") != -1)
                            Ext.getCmp('statisticscarouselpies').setActiveItem(1);
                        else if(barsactiveitemid.indexOf("FTBarId") != -1)
                            Ext.getCmp('statisticscarouselpies').setActiveItem(2);
                    }
                    else
                        if(newCard.getId().indexOf("statisticscarouselbars") != -1){
                            var piesactiveitemid = Ext.getCmp('statisticscarouselpies').getActiveItem().getId();

                            if(piesactiveitemid.indexOf("DTPieId") != -1)
                                Ext.getCmp('statisticscarouselbars').setActiveItem(0);
                            else if(piesactiveitemid.indexOf("BTPieId") != -1)
                                Ext.getCmp('statisticscarouselbars').setActiveItem(1);
                            else if(piesactiveitemid.indexOf("FTPieId") != -1)
                                Ext.getCmp('statisticscarouselbars').setActiveItem(2);
                        }
                },
                show: function(){
                    Ext.Viewport.setMasked(false);
                }
            },

            staffview:{
                itemtap: 'onStaffViewItemTap'
            },

            activeprojectsview:{
                disclose: 'emptyFn',
                itemtap: 'onActiveProjectTap'
            },

            projectdetailsview:{
                leafitemtap: 'onLeafItemTap'
            },

            biztabpanels: {
                initialize: function(){
                    this.hideAddButton();
                },
                show: function(){
                    Ext.Viewport.setMasked(false);
                },
                activeitemchange: 'onBizTabPanelsActiveItemChange'
            },

            tectabpanels: {
                initialize: function(){
                    //console.log('INIT tectabpanels!');
                    var dtstore = Ext.getStore('developertasksoverview');
                    dtstore.clearFilter();
                },
                show: function(){
                    Ext.Viewport.setMasked(false);
                },
                activeitemchange: 'onTecTabPanelsActiveItemChange'
            },

            performanceview:{
                selecteddevchanged: function(){
                    Ext.getStore('PerformanceBar').generateData();
                }
            },

            dispatcherview:{
            },

            incompleteview:{
                itemtap: 'onIncompleteTaskItemTap'
            },

            incompleteoverview:{
                initialize: function(){
                    this.hideSaveButton();
                },
                change: 'onFormDataChange'
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
            },
            'button#manageroverview_statsButton': {
                tap: 'pushStatisticsCarousel'
            },
            saveButton: {
                tap: 'saveIncompleteTask'
            },
            addButton: {
                tap: 'onAddButtonTap'
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

        /*if (oldview.id == "ext-activitydetail-1") {
        } else {

        }*/

        if(newview.getId().indexOf("devtaskoverview") != -1){
            this.hideAddButton();
        }
    },

    onViewPop: function(newview, oldview) {
        //console.log('view popped: oldview:', oldview);
        //console.log('view popped: newview:', newview);
/*        if (newview.id == "ext-activitydetail-1") {
            this.showAddButton();
        } else {
            this.hideAddButton();
        }
        this.showAddButton();
        this.reloadStoreInstances();*/
        if(oldview.getId().indexOf("biztabpanels") != -1){
            this.hideAddButton();
        }
        if(oldview.getId().indexOf("devtaskoverview") != -1){
            this.showAddButton();
        }

        if(oldview.getId().indexOf("incompleteoverview") != -1){
            this.hideSaveButton();
        }
    },

    onMainPush: function(view, item) {
        /*        console.log('View pushed!');
         this.hideAddButton();
         this.hideSaveButton();*/
    },


    // MANUAL
    doLogin: function() {
        console.log('try login!');
        var scope = this;
        if(this.getMain().getActiveItem().getXTypes().indexOf('manageroverview') == -1){
            Ext.Viewport.setMasked({xtype:'loadmask',message:'Trying to login...', indicator:true});
            //console.log('MASKED!');
            var test =  Ext.util.JSONP.request({
                url: 'resources\\webservices\\signIn.php',
                callbackKey: 'callback',
                scope: scope,
                params: {
                    email: this.getLogin().getValues().loginview_user,
                    password: this.getLogin().getValues().loginview_password
                },
                success: function (result) {
                    //  scope.fireEvent('logincallbackfired', scope, result); DEBUG
                    var serverLogin = false;
                    var mysessionid = '123456789';
                    var loginstore;

                    //console.log('jsonpTest succ.result:', result);
                    console.log('successfull:', result.successfull);
                    console.log('sessionid:', result.sessionid);

                    serverLogin = result.successfull;
                    mysessionid = result.sessionid;
                    //console.log('jsonpTest succ.resp:' + Ext.decode(jsonData));
                    loginstore = Ext.getStore('login'); // DEBUG
                    if(!serverLogin){
                        console.log('serverLogin:', serverLogin);
                        Ext.Msg.alert('Failed', 'Server login failed. LOCAL login...', Ext.emptyFn);

                        loginstore.clearFilter();
                        loginstore.filter('user', scope.getLogin().getValues().loginview_user);
                        loginstore.filter('password', scope.getLogin().getValues().loginview_password);
                        //exactMatch = true?
                        //console.log('count: ', loginstore.getCount());
                    }
                    if(loginstore.getCount() == 1 || serverLogin){
                        // update appconfig with "new" standard user
                        var appconfigdata = this.loadAppConfig();
                        appconfigdata.lastusername = scope.getLogin().getValues().loginview_user;
                        appconfigdata.lastpassword = scope.getLogin().getValues().loginview_password;
                        appconfigdata.remember = scope.getLogin().getValues().loginview_remember;
                        appconfigdata.sessionid = mysessionid;
                        scope.saveAppConfig(appconfigdata);
                        //console.log('successfully logged in!');

                        //pushview
                        //console.log('push ov login!');
                        var mymanageroverview = Ext.create('CDS.view.ManagerOverview', {});
                        scope.savepush(mymanageroverview,'manageroverview');

                    }
                    else{
                        Ext.Msg.alert('Failed', 'Could not verify account data.', Ext.emptyFn);
                        Ext.Viewport.setMasked(false);
                    }
                    loginstore.clearFilter();

                }/*,
                failure: function (jsonData) {
                    console.log('jsonpTest fail.resp:' + jsonData, jsonData);
                    console.log('jsonpTest fail.resp:' + Ext.decode(jsonData));
                },*/
            });
        }
    },

    pushBiz: function(){

        this.pushViewWithIndicator('Loading data...', 'CDS.view.BizTabPanels', 'biztabpanels');
    },
    pushTec: function(){
        this.pushViewWithIndicator('Loading data...', 'CDS.view.TecTabPanels', 'tectabpanels');
    },

    pushStatisticsCarousel: function(){
        this.pushViewWithIndicator('Loading data...', 'CDS.view.subview.StatisticsCarousel', 'statisticscarousel');
    },

    onBizTabPanelsActiveItemChange: function(container, newCard, oldCard){
        console.log('newCard:' + newCard.getId(), newCard);


        if(newCard.getId().indexOf("projectdetailsview") != -1){
            this.showAddButton();
        }
        else
            this.hideAddButton();
         /* // it contains the substring dispatcherview == the view that became active
         if(newCard.getId().indexOf("dispatcherview") != -1){
         var divFieldSet1 = Ext.select('div.dispatchviewfieldset1');
         var divFieldSet1List = Ext.select('div.dispatchviewlist1');

         //divFieldSet1.hide(true); hides element
         //divFieldSet1List.setStyle('height', '4285px');
         divFieldSet1List.setHeight(3000);
         divFieldSet1List.setHeight(divFieldSet1.getHeight());
         //divFieldSet1List.setHeight(5000);

         console.log('divFieldSet1:', divFieldSet1.el);
         console.log('divFieldSet1List:', divFieldSet1List);
         }
         /*switch(newCard.getId())
         {
         case 'ext-incompleteview-1':
         newCard.getStore().clearFilter();
         newCard.getStore().filter('creator', 'Dominik');
         //newCard.getStore().filter('creator', 'Beide');
         break;
         default:;
         //newCard.getStore().clearFilter();
         }*/
    },

    onTecTabPanelsActiveItemChange: function(container, newCard, oldCard){
        /*console.log('newCard:' + newCard.getId(), newCard);

        // it contains the substring dispatcherview == the view that became active
        if(newCard.getId().indexOf("dispatcherview") != -1){
            var divFieldSet1 = Ext.select('div.dispatchviewfieldset1');
            var divFieldSet1List = Ext.select('div.dispatchviewlist1');

            //divFieldSet1.hide(true); hides element
            //divFieldSet1List.setStyle('height', '4285px');
            divFieldSet1List.setHeight(3000);
            divFieldSet1List.setHeight(divFieldSet1.getHeight());
            //divFieldSet1List.setHeight(5000);

            console.log('divFieldSet1:', divFieldSet1.el);
            console.log('divFieldSet1List:', divFieldSet1List);
        }
        /*switch(newCard.getId())
        {
            case 'ext-incompleteview-1':
                newCard.getStore().clearFilter();
                newCard.getStore().filter('creator', 'Dominik');
                //newCard.getStore().filter('creator', 'Beide');
                break;
            default:;
                //newCard.getStore().clearFilter();
        }*/
    },

    onAddButtonTap: function() {
       var actionsheetol = Ext.Viewport.add({
            xtype: 'actionsheet',
           items: [
               {
                   xtype: 'button',
                   text: 'New Group',
                   ui: 'action-round',
                   scope: this,
                   handler: function() {
                       actionsheetol.hide();
                   }
               },
               {
                   xtype: 'button',
                   text: 'New Task',
                   ui: 'action-round',
                   scope: this,
                   handler: function() {
                       actionsheetol.hide();
                   }
               },
               {
                   xtype: 'button',
                   text: 'New Feature',
                   ui: 'action-round',
                   scope: this,
                   handler: function() {
                       actionsheetol.hide();
                   }
               },
               {
                   xtype: 'button',
                   text: 'Cancel',
                   ui: 'round',
                   scope: this,
                   handler: function() {
                       actionsheetol.hide();
                   }
               }
           ]
        });
        actionsheetol.show();
    },

    onActiveProjectTap: function(list, index, target, record){
        console.log('onactivepjtap!');
        console.log('name:',record.getData().name);

        var myprojectoverview = Ext.create('CDS.view.biz.ProjectOverview', {
            xtype: 'projectoverview',
            title: record.shortName()
        });

        // copy the values of the selected record into the view
        //dtoverview.setRecord(record);
        this.savepush(myprojectoverview,'projectoverview');
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
        this.savepush(dtoverview, 'developertasksoverview');
    },

    onLeafItemTap: function(me, list, index, item, e) {
        var store = list.getStore(),
            record  = store.getAt(index)
        //Ext.Msg.alert('Leaf tapped!', record.data.name, Ext.emptyFn);
        //console.log('Leaf tapped!', record);

        var devtaskoverview = Ext.create('CDS.view.biz.DevTaskOverview', {
            xtype: 'devtaskoverview',
            title: record.shortName(),
            data: record.getData()
        });
        this.savepush(devtaskoverview,'devtaskoverview');
    },

    onIncompleteTaskItemTap: function(list, index, target, record){
        var incoverview = Ext.create('CDS.view.tec.IncompleteOverview', {
            xtype: 'incompleteoverview',
            title: record.shortName(),
            data: record.getData()
        });

        console.log('iti record',record.getData());
        incoverview.setRecord(record);

        this.savepush(incoverview,'incompleteoverview');
    },

    onFormDataChange: function(scope) {    /*
        var val = scope.getValues();
        console.log('in main datachange val',val);
        if(val.desc != "")
            this.showSaveButton();
        else
            this.hideSaveButton();           */
        console.log('DEBUG SHOW SAVE BUTTON');
        this.showSaveButton();
    },

    saveIncompleteTask: function() {
        console.log('save confirmed!');

        // Put it inside a timeout so it feels like it is going to a server.
        var inctasks = Ext.getStore('incomplete');
        var record = this.getIncompleteoverview().getRecord();
        var values = this.getIncompleteoverview().getValues();

        if(record != null){
            console.log('record: ', record);
            inctasks.remove(record); // update on server / call to webservice
            inctasks.sync();
        }
        this.getMain().pop();
    },


    showSaveButton: function() {
        var saveButton = this.getSaveButton();

        if (!saveButton.isHidden()) {
            return;
        }

        saveButton.show();
    },

    hideSaveButton: function() {
        var saveButton = this.getSaveButton();

        if (saveButton.isHidden()) {
            return;
        }

        saveButton.hide();
    },

    showAddButton: function() {
        var addButton = this.getAddButton();

        if (!addButton.isHidden()) {
            return;
        }

        addButton.show();
    },

    hideAddButton: function() {
        var addButton = this.getAddButton();

        if (addButton.isHidden()) {
            return;
        }

        addButton.hide();
    },

    pushViewWithIndicator: function(loadingmessage, viewtopushclass, viewtopushxtype){
        if(this.getMain().getActiveItem().getXTypes().indexOf(viewtopushxtype) == -1){
            Ext.Viewport.setMasked({xtype:'loadmask',message:loadingmessage, indicator:true});
            Ext.util.JSONP.request({
                url: 'resources\\webservices\\loadingIndicatorHelper.php',
                callbackKey: 'callback',
                scope: this,
                params: {
                },
                success: function () {
                    var myviewtopush = Ext.create(viewtopushclass, {
                        xtype: viewtopushxtype
                    });
                    this.savepush(myviewtopush,viewtopushxtype);
                },

                failure: function () {
                    var myviewtopush = Ext.create(viewtopushclass, {
                        xtype: viewtopushxtype
                    });
                    this.savepush(myviewtopush,viewtopushxtype);
                }
            });
        }
    },

    savepush: function(viewtopush, viewtopushxtype){
        if(this.getMain().getActiveItem().getXTypes().indexOf(viewtopushxtype) == -1){
            this.getMain().push(viewtopush);
        }
    }
});
