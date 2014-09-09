/*
 * JS for loginScreen generated by Appery.io
 */

Apperyio.getProjectGUID = function() {
    return '938cf836-5983-427a-ba26-dd9d0c5bf4be';
};

function navigateTo(outcome, useAjax) {
    Apperyio.navigateTo(outcome, useAjax);
}

// Deprecated


function adjustContentHeight() {
    Apperyio.adjustContentHeightWithPadding();
}

function adjustContentHeightWithPadding(_page) {
    Apperyio.adjustContentHeightWithPadding(_page);
}

function setDetailContent(pageUrl) {
    Apperyio.setDetailContent(pageUrl);
}

Apperyio.AppPages = [{
    "name": "loginScreen",
    "location": "#loginScreen"
}, {
    "name": "addSubject",
    "location": "#addSubject"
}, {
    "name": "homeScreen",
    "location": "#homeScreen"
}];

loginScreen_js = function(runBeforeShow) {

    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobiletextinput_2': 'loginScreen_mobiletextinput_2',
        'mobiletextinput_3': 'loginScreen_mobiletextinput_3',
        'mobilegrid_19': 'loginScreen_mobilegrid_19',
        'mobilegridcell_20': 'loginScreen_mobilegridcell_20',
        'mobilebutton_24': 'loginScreen_mobilebutton_24',
        'mobilegridcell_21': 'loginScreen_mobilegridcell_21',
        'mobilebutton_18': 'loginScreen_mobilebutton_18',
        'mobilegridcell_22': 'loginScreen_mobilegridcell_22',
        'mobilegridcell_23': 'loginScreen_mobilegridcell_23'
    };

    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }

    if (navigator.userAgent.indexOf("IEMobile") != -1) {
        //Fix for jQuery Mobile's footer in Cordova webview on WP8 devices
        var msViewportStyle = document.createElement("style");
        msViewportStyle.appendChild(
        document.createTextNode("@media screen and (orientation: portrait){@-ms-viewport {width: 320px; height: 534px;user-zoom: fixed;zoom: 1;}}" + "@media screen and (orientation:landscape){@-ms-viewport{width:480px;user-zoom:fixed;zoom:1;}}"));
        document.getElementsByTagName("head")[0].appendChild(msViewportStyle);
    }

    Apperyio.CurrentScreen = 'loginScreen';

    /*
     * Nonvisual components
     */
    var datasources = [];

    /*
     * Events and handlers
     */

    // Before Show
    var loginScreen_beforeshow = function() {
            Apperyio.CurrentScreen = "loginScreen";
            for (var idx = 0; idx < datasources.length; idx++) {
                datasources[idx].__setupDisplay();
            }
        };

    // On Load
    var loginScreen_onLoad = function() {
            loginScreen_elementsExtraJS();

            // TODO fire device events only if necessary (with JS logic)
            loginScreen_deviceEvents();
            loginScreen_windowEvents();
            loginScreen_elementsEvents();
        };

    // screen window events
    var loginScreen_windowEvents = function() {

            $('#loginScreen').bind('pageshow orientationchange', function() {
                var _page = this;
                adjustContentHeightWithPadding(_page);
            });

        };

    // device events
    var loginScreen_deviceEvents = function() {
            document.addEventListener("deviceready", function() {

            });
        };

    // screen elements extra js
    var loginScreen_elementsExtraJS = function() {
            // screen (loginScreen) extra code

        };

    // screen elements handler
    var loginScreen_elementsEvents = function() {
            $(document).on("click", "a :input,a a,a fieldset label", function(event) {
                event.stopPropagation();
            });

            $(document).off("click", '#loginScreen_mobilecontainer1 [name="mobilebutton_24"]').on({
                click: function() {
                    if (!$(this).attr('disabled')) {
                        Apperyio.navigateTo('homeScreen', {
                            transition: 'fade',
                            reverse: false
                        });

                    }
                },
            }, '#loginScreen_mobilecontainer1 [name="mobilebutton_24"]');

        };

    $(document).off("pagebeforeshow", "#loginScreen").on("pagebeforeshow", "#loginScreen", function(event, ui) {
        loginScreen_beforeshow();
    });

    if (runBeforeShow) {
        loginScreen_beforeshow();
    } else {
        loginScreen_onLoad();
    }
};

$(document).off("pagecreate", "#loginScreen").on("pagecreate", "#loginScreen", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    loginScreen_js();
});

addSubject_js = function(runBeforeShow) {

    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilegrid_5': 'addSubject_mobilegrid_5',
        'mobilegridcell_6': 'addSubject_mobilegridcell_6',
        'mobilelabel_10': 'addSubject_mobilelabel_10',
        'mobilegridcell_7': 'addSubject_mobilegridcell_7',
        'mobiletextinput_11': 'addSubject_mobiletextinput_11',
        'mobilegridcell_8': 'addSubject_mobilegridcell_8',
        'mobilelabel_22': 'addSubject_mobilelabel_22',
        'mobilebutton_79': 'addSubject_mobilebutton_79',
        'mobilegridcell_9': 'addSubject_mobilegridcell_9',
        'mobilelabel_42': 'addSubject_mobilelabel_42',
        'mobilegrid_50': 'addSubject_mobilegrid_50',
        'mobilegridcell_51': 'addSubject_mobilegridcell_51',
        'mobiletextinput_43': 'addSubject_mobiletextinput_43',
        'mobilegridcell_52': 'addSubject_mobilegridcell_52',
        'ampm_48': 'addSubject_ampm_48',
        'ampm_48_mobileselectmenu_46': 'addSubject_ampm_48_mobileselectmenu_46',
        'ampm_48_mobileselectmenu_46-0': 'addSubject_ampm_48_mobileselectmenu_46-0',
        'mobilegridcell_53': 'addSubject_mobilegridcell_53',
        'mobiletextinput_45': 'addSubject_mobiletextinput_45',
        'mobilegridcell_54': 'addSubject_mobilegridcell_54',
        'ampm_49': 'addSubject_ampm_49',
        'ampm_49_mobileselectmenu_46': 'addSubject_ampm_49_mobileselectmenu_46',
        'ampm_49_mobileselectmenu_46-0': 'addSubject_ampm_49_mobileselectmenu_46-0',
        'mobilegrid_105': 'addSubject_mobilegrid_105',
        'mobilegridcell_106': 'addSubject_mobilegridcell_106',
        'mobilegridcell_107': 'addSubject_mobilegridcell_107',
        'mobilegridcell_108': 'addSubject_mobilegridcell_108',
        'mobilelabel_104': 'addSubject_mobilelabel_104',
        'mobilegridcell_109': 'addSubject_mobilegridcell_109',
        'mobilebutton_113': 'addSubject_mobilebutton_113',
        'mobilecheckboxgroup_81': 'addSubject_mobilecheckboxgroup_81',
        'mobilecheckbox_82': 'addSubject_mobilecheckbox_82',
        'mobilecheckbox_83': 'addSubject_mobilecheckbox_83',
        'mobilecheckbox_84': 'addSubject_mobilecheckbox_84',
        'mobilecheckbox_97': 'addSubject_mobilecheckbox_97',
        'mobilecheckbox_98': 'addSubject_mobilecheckbox_98',
        'mobilecheckbox_99': 'addSubject_mobilecheckbox_99',
        'mobilecheckbox_100': 'addSubject_mobilecheckbox_100',
        'mobilebutton_101': 'addSubject_mobilebutton_101',
        'mobileselectmenu_111': 'addSubject_mobileselectmenu_111',
        'mobileselectmenu_111-0': 'addSubject_mobileselectmenu_111-0',
        'mobilebutton_114': 'addSubject_mobilebutton_114'
    };

    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }

    if (navigator.userAgent.indexOf("IEMobile") != -1) {
        //Fix for jQuery Mobile's footer in Cordova webview on WP8 devices
        var msViewportStyle = document.createElement("style");
        msViewportStyle.appendChild(
        document.createTextNode("@media screen and (orientation: portrait){@-ms-viewport {width: 320px; height: 534px;user-zoom: fixed;zoom: 1;}}" + "@media screen and (orientation:landscape){@-ms-viewport{width:480px;user-zoom:fixed;zoom:1;}}"));
        document.getElementsByTagName("head")[0].appendChild(msViewportStyle);
    }

    Apperyio.CurrentScreen = 'addSubject';

    /*
     * Nonvisual components
     */
    var datasources = [];

    /*
     * Events and handlers
     */

    // Before Show
    var addSubject_beforeshow = function() {
            Apperyio.CurrentScreen = "addSubject";
            for (var idx = 0; idx < datasources.length; idx++) {
                datasources[idx].__setupDisplay();
            }
        };

    // On Load
    var addSubject_onLoad = function() {
            addSubject_elementsExtraJS();

            // TODO fire device events only if necessary (with JS logic)
            addSubject_deviceEvents();
            addSubject_windowEvents();
            addSubject_elementsEvents();
        };

    // screen window events
    var addSubject_windowEvents = function() {

            $('#addSubject').bind('pageshow orientationchange', function() {
                var _page = this;
                adjustContentHeightWithPadding(_page);
            });

        };

    // device events
    var addSubject_deviceEvents = function() {
            document.addEventListener("deviceready", function() {

            });
        };

    // screen elements extra js
    var addSubject_elementsExtraJS = function() {
            // screen (addSubject) extra code

            /* ampm_48_mobileselectmenu_46 */

            $("#addSubject_ampm_48_mobileselectmenu_46").parent().find("a.ui-btn").attr("tabindex", "13");

            /* ampm_49_mobileselectmenu_46 */

            $("#addSubject_ampm_49_mobileselectmenu_46").parent().find("a.ui-btn").attr("tabindex", "13");

            /* mobileselectmenu_111 */

            $("#addSubject_mobileselectmenu_111").parent().find("a.ui-btn").attr("tabindex", "26");

        };

    // screen elements handler
    var addSubject_elementsEvents = function() {
            $(document).on("click", "a :input,a a,a fieldset label", function(event) {
                event.stopPropagation();
            });

            $(document).off("click", '#addSubject_mobilecontainer [name="mobilebutton_79"]').on({
                click: function() {
                    if (!$(this).attr('disabled')) {
                        $('[id="addSubject_panel_80"]').panel("open");

                    }
                },
            }, '#addSubject_mobilecontainer [name="mobilebutton_79"]');

            $(document).off("click", '#addSubject_mobilecontainer [name="mobilebutton_113"]').on({
                click: function() {
                    if (!$(this).attr('disabled')) {
                        $('[id="addSubject_panel_110"]').panel("open");

                    }
                },
            }, '#addSubject_mobilecontainer [name="mobilebutton_113"]');

            $(document).off("click", '[name="mobilebutton_101"]').on({
                click: function() {
                    if (!$(this).attr('disabled')) {
                        Apperyio("panel_80").panel("close");

                    }
                },
            }, '[name="mobilebutton_101"]');

            $(document).off("click", '[name="mobilebutton_114"]').on({
                click: function() {
                    if (!$(this).attr('disabled')) {
                        Apperyio("panel_110").panel("close");

                    }
                },
            }, '[name="mobilebutton_114"]');

        };

    $(document).off("pagebeforeshow", "#addSubject").on("pagebeforeshow", "#addSubject", function(event, ui) {
        addSubject_beforeshow();
    });

    if (runBeforeShow) {
        addSubject_beforeshow();
    } else {
        addSubject_onLoad();
    }
};

$(document).off("pagecreate", "#addSubject").on("pagecreate", "#addSubject", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    addSubject_js();
});

homeScreen_js = function(runBeforeShow) {

    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilebutton_9': 'homeScreen_mobilebutton_9',
        'mobilelabel_10': 'homeScreen_mobilelabel_10'
    };

    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }

    if (navigator.userAgent.indexOf("IEMobile") != -1) {
        //Fix for jQuery Mobile's footer in Cordova webview on WP8 devices
        var msViewportStyle = document.createElement("style");
        msViewportStyle.appendChild(
        document.createTextNode("@media screen and (orientation: portrait){@-ms-viewport {width: 320px; height: 534px;user-zoom: fixed;zoom: 1;}}" + "@media screen and (orientation:landscape){@-ms-viewport{width:480px;user-zoom:fixed;zoom:1;}}"));
        document.getElementsByTagName("head")[0].appendChild(msViewportStyle);
    }

    Apperyio.CurrentScreen = 'homeScreen';

    /*
     * Nonvisual components
     */
    var datasources = [];

    /*
     * Events and handlers
     */

    // Before Show
    var homeScreen_beforeshow = function() {
            Apperyio.CurrentScreen = "homeScreen";
            for (var idx = 0; idx < datasources.length; idx++) {
                datasources[idx].__setupDisplay();
            }
        };

    // On Load
    var homeScreen_onLoad = function() {
            homeScreen_elementsExtraJS();

            // TODO fire device events only if necessary (with JS logic)
            homeScreen_deviceEvents();
            homeScreen_windowEvents();
            homeScreen_elementsEvents();
        };

    // screen window events
    var homeScreen_windowEvents = function() {

            $('#homeScreen').bind('pageshow orientationchange', function() {
                var _page = this;
                adjustContentHeightWithPadding(_page);
            });

        };

    // device events
    var homeScreen_deviceEvents = function() {
            document.addEventListener("deviceready", function() {

            });
        };

    // screen elements extra js
    var homeScreen_elementsExtraJS = function() {
            // screen (homeScreen) extra code

        };

    // screen elements handler
    var homeScreen_elementsEvents = function() {
            $(document).on("click", "a :input,a a,a fieldset label", function(event) {
                event.stopPropagation();
            });

            $(document).off("click", '#homeScreen_mobileheader [name="mobilebutton_9"]').on({
                click: function() {
                    if (!$(this).attr('disabled')) {
                        Apperyio.navigateTo('addSubject', {
                            reverse: false
                        });

                    }
                },
            }, '#homeScreen_mobileheader [name="mobilebutton_9"]');

        };

    $(document).off("pagebeforeshow", "#homeScreen").on("pagebeforeshow", "#homeScreen", function(event, ui) {
        homeScreen_beforeshow();
    });

    if (runBeforeShow) {
        homeScreen_beforeshow();
    } else {
        homeScreen_onLoad();
    }
};

$(document).off("pagecreate", "#homeScreen").on("pagecreate", "#homeScreen", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    homeScreen_js();
});