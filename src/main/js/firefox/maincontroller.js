com_cliffano_wordniksearch.click = function() {
    
    var text = '';

    var focusedWindow = document.commandDispatcher.focusedWindow;
    if (focusedWindow == window) {
        focusedWindow = window._content;
    }
    var selection = focusedWindow.getSelection();
    if (selection !== null) {
        try {
            text = selection.getRangeAt(0).toString();
        } catch (e) {
            // sometimes getRangeAt(0) gives the error below after de-selecting a text:
            // (NS_ERROR_ILLEGAL_VALUE) [nsISelection.getRangeAt]
        }
    }
    
    if (text !== null && text !== '') {
        var wordnik = new com_cliffano_wordniksearch.Wordnik();
        wordnik.search(window, text);
    } else {
        window.openDialog('chrome://wordniksearch/content/prompt.xul', 'prompt', 'centerscreen,chrome,modal', window);
    }
};