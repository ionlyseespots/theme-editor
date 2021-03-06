Simple.app.controller("themeEditorCtrl", function($scope){
    //== Data
    $scope.designviewambient = [
        {
            "tag":              "div",
            "class":            "col-xs-12",
            "hello":            "1-column",
            "children": [
                {
                    "tag":          "span",
                    "html":         "prexisitingText: {newText}"
                }
            ]}
    ];
    $scope.designviewdiv = [
        {
            "tag":              "div",
            "hello":            "",
            "title":            "Full",
            "class":            ""
        }

    ];
    $scope.designviewdivyou = [
        {
            "tag":              "div",
            "hello":            "Left column",
            "title":            "Left",
            "class":            "col-sm-6"
        },
        {
            "tag":              "div",
            "class":            "col-sm-6",
            "hello":            "Right column",
            "title":            "Right",
            "children": [
                {
                    "tag":          "span",
                    "html":         "prexisitingText: {newText}"
                }
            ]},
    ];
    $scope.designviewdivus = [
        {
            "tag":              "div",
            "class":            "col-sm-4",
            "hello":            "Left column",
            "title":            "Left",
            "children": [
                {
                    "tag":          "span",
                    "html":         "prexisitingText: {newText}"
                }
            ]},
        {
            "tag":              "div",
            "class":            "col-sm-4",
            "hello":            "Center",
            "title":            "Center",
            "children": [
                {
                    "tag":          "span",
                    "html":         "prexisitingText: {newText}"
                }
            ]},
        {
            "tag":              "div",
            "class":            "col-sm-4",
            "hello":            "Right column",
            "title":            "Right",

            "children": [
                {
                    "tag":          "span",
                    "html":         "prexisitingText: {newText}"
                }
            ]}
    ];

    $scope.data = [
        {
            "class":                "col-xs-1"
        },
        {
            "class":                "col-xs-2"
        },
        {
            "class":                "col-xs-3"
        },
        {
            "class":                "col-xs-4"
        },
        {
            "class":                "col-xs-5"
        },
        {
            "class":                "col-xs-6"
        },
        {
            "class":                "col-xs-7"
        },
        {
            "class":                "col-xs-8"        },
        {

            "class":                "col-xs-9"
        },
        {
            "class":               "col-xs-10"
        },
        {
            "class":               "col-xs-11"
        },
        {
            "class":               "col-xs-12"
        }
    ];

    $scope.designviewdefault = [
        {
            "tag":              "div",
            "hello":            '',
            "title":            '',
            "class":            "container"
        }
    ];


    $scope.designviewimage = [
        {
            "tag":              "div",
            "hello":            '<img src="http://www.four51.com/images/company/c5a12ff8ea8f4cb0aaf8dc662ea7085e.png"/>',
            "title":            "Left",
            "class":            "col-sm-6"
        },
    ];

    $scope.designloginbackground = [
        {
            "name":             "loginbackground",
            "parentclass":      "login",
            "childclass":       "order-cloud-image",
            "parentelement":    "",
            "element":          "",
            "property":         "background-image",
            "value":            "",
            "important":        " !important"
        }
    ];
    $scope.designbodybackground = [
        {
            "name":             "bodybackground",
            "parentclass":      "",
            "childclass":       "",
            "parentelement":    "body",
            "element":          "",
            "property":         "background-image",
            "value":            "",
            "important":        ""
        }
    ];
    $scope.designheaderbackground = [
        {
            "name":             "headerbackground",
            "parentclass":      "jumbotron",
            "childclass":       "",
            "parentelement":    "",
            "element":          "",
            "property":         "background-image",
            "value":            "",
            "important":        ""
        }
    ];

    $scope.designDesktopCSS = [
        {

            "hello":            ''


        }
    ];

    // Toggle
    $scope.showhtml = false;
    $scope.showcss = false;
    $scope.visible0 = false;
    $scope.visible1 = true;
    $scope.visible2 = false;
    $scope.visible3 = false;



    //** Format JSON to HTML
    function formatHtml(d) {
        var concat = "";
        angular.forEach(d, function (i) {
            //html
            var tagopen = '<' + i.tag;
            var c = i.class;
            var designinner = i.hello;
            var tagclose = '</' + i.tag + '>';
            concat += tagopen + ' class="' + c + '">' + designinner + tagclose + '\n' + '\r';
        });
        return concat;
    }

    function formatCss(d){
        var concat = "";
        angular.forEach(d, function(i){
            //css
            var dot = ".";
            var pc = i.parentclass ? dot + i.parentclass + ' ' : '';
            var cc = i.childclass ? dot + i.childclass + ' ' : '';
            var pe = i.parentelement ? i.parentelement + ' ' : '';
            var el = i.element ? i.element + ' ' : '';
            var cl = i.class ? dot + i.class + ' ' : '';
            concat += pc + cc + pe + el + cl + ' {' + i.property + ': ' + 'url("' + i.value + '")' + i.important + ';}' + '\r';
        });
        return concat;
    }

    function formatNative(d) {
        var concat = "";
        angular.forEach(d, function (i) {

            var designinner = i.hello;

            concat += designinner + '\n' + '\r';
        });
        return concat;
    }

    $scope.goNewAmbient = function() {
        $scope.visible1 = false;
        $scope.visible2 = false;
        $scope.visible3 = false;
        $scope.visible4 = true;
        $scope.templatefile = formatHtml($scope.designviewambient);
        console.log($scope.templatefile);
    };
    $scope.goNewCustom = function() {
        $scope.visible0 = false;
        $scope.visible1 = true;
        $scope.visible2 = false;
        $scope.visible3 = false;
        $scope.visible4 = false;
        $scope.templatefile = formatHtml($scope.designviewdiv);

        console.log($scope.templatefile);
    };
    $scope.closePreview = function() {
        $scope.copyHeader = 'true';
        $('.get-header').addClass('animated fadeIn');
    };

    $scope.goNewTwocol = function() {
        $scope.visible0 = false;
        $scope.visible1 = false;
        $scope.visible2 = true;
        $scope.visible3 = false;
        $scope.visible4 = false;
        $scope.templatefile = formatHtml($scope.designviewdivyou);
        console.log($scope.templatefile);
    };
    $scope.goNewThreecol = function() {
        $scope.visible0 = false;
        $scope.visible1 = false;
        $scope.visible2 = false;
        $scope.visible3 = true;
        $scope.visible4 = false;
        $scope.templatefile = formatHtml($scope.designviewdivus);
        console.log($scope.templatefile);
    };
    $scope.goLoginBackground = function() {
        $scope.cssfile = '/* custom.css */' + '\n' + '/* login background */' + '\n' + formatCss($scope.designloginbackground);
        $scope.copyBg = 'true';
        $('.get-bg').addClass('animated fadeIn');
        console.log($scope.cssfile);
    };
    $scope.goBodyBackground = function() {
        $scope.cssfile1 = '/* custom.css */' + '\n' + '/* body background */' + '\n' + formatCss($scope.designbodybackground);
        $scope.copyBodyBg = 'true';
        $('.get-bg').addClass('animated fadeIn');
        console.log($scope.cssfile1);
    };
    $scope.goHeaderDefault = function() {
        var opencontainer = '<!-- branding.html -->' + '\n' + '<section class="jumbotron active">' + '\n';
        var closecontainer = '</section>';
        $scope.templatefile = opencontainer + formatHtml($scope.designviewdefault) + closecontainer;
        console.log($scope.templatefile);
    };
    $scope.goHeaderBackground = function() {
        $scope.cssfile = '/* custom.css */' + '\n' + '/* login background */' + '\n' + formatCss($scope.designheaderbackground);
        console.log($scope.cssfile);
    };
    $scope.goDesktopCSS = function() {
        $scope.templatefile = '/* custom.css */' + '\n' + '/* Desktop Template */' + '\n' + formatNative($scope.designDesktopCSS);
        console.log($scope.templatefile);
    };

    $scope.getTextToCopy1 = function() {
        var s = $('#fe_text1').html();
        return s;
    };
    $scope.getTextToCopy2 = function() {
        var s = $('#fe_text2').html();
        return s;
    };
    $scope.getTextToCopy3 = function() {
        var s = $('#fe_text3').html();
        return s;
    };

    $scope.getHeaderToCopy = function() {
        var s = $('#fe_header').html();
        return s;
    };
    $scope.getMegaToCopy = function() {
        var s = $('#hide-mega').html();
        return s;
    };
    $scope.getNameToCopy = function() {
        var s = $('#hide-company-name').html();
        return s;
    };
    $scope.getWidthToCopy = function() {
        var s = $('#change-width').html();
        return s;
    };
    $scope.getUnstickToCopy = function() {
        var s = $('#unstick-bottom').html();
        return s;
    };

    $scope.doSomething = function() {
        console.log("clip-click works!");
    };

});