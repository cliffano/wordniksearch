com_cliffano_wordniksearch.submit = function() {

    var text = document.getElementById('wordniksearch-prompt-text').value;
    var wordnik = new com_cliffano_wordniksearch.Wordnik();
    var parent = window.arguments[0];
    wordnik.search(parent, text);
};