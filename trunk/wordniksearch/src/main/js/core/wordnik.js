com_cliffano_wordniksearch.Wordnik = Base.extend({
    search: function (container, text) {
        
        var ffPreferencesService = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
        var url = ffPreferencesService.getCharPref('wordniksearch.url') + text;
        if (ffPreferencesService.getCharPref('wordniksearch.openpage') == 'newtab') {
            container.getBrowser().addTab(url);
        } else {
            container.getBrowser().loadURI(url);
        }
    }
});