Ext.define('CDS.view.LoginView', {
    extend: 'Ext.form.Panel',
    xtype: 'loginview',
    requires: [
        'Ext.Label',
        'Ext.field.Password'
    ],

    config: {
        cls: 'loginBackground',
        scrollable: false,
        title:'DanuTask',

        //style: 'background: url(http://src.sencha.io/detect/http://88.198.158.108//hosted/loginview_background.jpg) no-repeat;',
        items: [
            {
                cls: 'loginLabel',
                xtype: 'label',
                html: 'Login',
                left: '10%',
                top: '8%'
            },
            {
                cls: 'loginLabelSmall',
                xtype: 'label',
                html: 'remember me',
                left: '52%',
                top: '70%'
            },
            {
                xtype: 'textfield',
                cls: 'loginTextField',
                bottom: '55%',
                left: '10%',
                width: '82%',
                top: '26%',
                labelWidth: 0,
                name: 'loginview_user',
                required: true,
                placeHolder: 'Username'
            },
            {
                xtype: 'passwordfield',
                cls: 'loginTextField',
                bottom: '40%',
                top: '47%',
                left: '10%',
                width: '82%',
                labelWidth: 0,
                name: 'loginview_password',
                required: true,
                placeHolder: 'Password'
            },
            {
                xtype: 'checkboxfield',
                cls: 'loginCheckBoxField',
                left: '30%',
                top: '67%',
                checked: true,
                width: '50px',
                name: 'loginview_remember'
                //style: '  background-image: none;background-color: blue;background-image: -webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, blue), color-stop(10%, blue), color-stop(65%, blue), color-stop(100%, blue));background-image: -webkit-linear-gradient(top, blue, blue 10%, blue 65%, blue);background-image: linear-gradient(top, blue, blue 10%, blue 65%, blue);'
            },
            {
                xtype: 'button',
                bottom: '10%',
                height: '',
                left: '60%',
                right: '10%',
                top: '80%',
                ui: 'action-round',
                width: '',
                text: 'Login',
                itemId: 'loginview_loginButton'
            }
        ]
    }

});