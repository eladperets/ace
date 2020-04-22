define(function(require, exports, module) {
    "use strict";
    
    var oop = require("../lib/oop");
    var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;
    
    var ExpressionBuilderHighlightRules = function() {
        this.$rules = {
            "start" : [
                {
                    token : "comment",
                    regex : "\\/\\/.*$"
                },
                {
                    token : "keyword",
                    regex : "^\\s*#(def|eval)"
                }
            ]
        };
    
        this.normalizeRules();
    };
    
    oop.inherits(ExpressionBuilderHighlightRules, TextHighlightRules);
    
    exports.ExpressionBuilderHighlightRules = ExpressionBuilderHighlightRules;
    });
    