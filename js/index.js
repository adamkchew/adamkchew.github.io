var AKC = AKC || {};

$(document).ready(function() {
    AKC.Homepage.init();
});

AKC.Homepage = AKC.Homepage || {

    init: function() {
        var logo = $(".logo");
        var logoText = $(".logo-text");
        logo.hide();
        logo.fadeIn(1000);
        logoText.hide();
        logoText.fadeIn(2000);
    }
};

