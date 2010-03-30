Ext.onReady(function(){
    
    var fg = new Ext.ux.ColorField({fieldLabel: 'Foreground Color', value: '#000000', msgTarget: 'qtip'});
    var bg = new Ext.ux.ColorField({fieldLabel: 'Background Color', value: '#FFFFFF', msgTarget: 'qtip'});
    fg.on('select', function(field, color){
        Ext.select('body').setStyle('color', color);
    });
    bg.on('select', function(field, color){
        Ext.select('body').setStyle('background', color);
    });
    var form = new Ext.FormPanel({
        border: false,
        width: 300,
        bodyStyle: {'background': 'transparent'},
        items: [{
            xtype: 'fieldset',
            autoHeight: true,
            border: false,
            items: [fg, bg]
        }]
    });
    form.render('form-example');
    
    var fb = new Ext.ux.ColorField({fieldLabel: 'Fallback Picker', value: '#FFFFFF', msgTarget: 'qtip', fallback: true});
    var form = new Ext.FormPanel({
        border: false,
        width: 300,
        bodyStyle: {'background': 'transparent'},
        items: [{
            xtype: 'fieldset',
            autoHeight: true,
            border: false,
            items: [fb]
        }]
    });  
    form.render('fb-example');
    
    Ext.QuickTips.init();
    
});