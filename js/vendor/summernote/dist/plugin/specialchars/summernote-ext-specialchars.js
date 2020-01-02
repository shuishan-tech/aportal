!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?module.exports=e(require("jquery")):e(window.jQuery)}(function(D){D.extend(D.summernote.plugins,{specialchars:function(t){var p=this,m=D.summernote.ui,n=t.layoutInfo.editor,i=t.options,r=i.langInfo,h=38,g=40,v=37,b=39,y=13,q=15,k=0,w=0,C=0,x=0,e=["&quot;","&amp;","&lt;","&gt;","&iexcl;","&cent;","&pound;","&curren;","&yen;","&brvbar;","&sect;","&uml;","&copy;","&ordf;","&laquo;","&not;","&reg;","&macr;","&deg;","&plusmn;","&sup2;","&sup3;","&acute;","&micro;","&para;","&middot;","&cedil;","&sup1;","&ordm;","&raquo;","&frac14;","&frac12;","&frac34;","&iquest;","&times;","&divide;","&fnof;","&circ;","&tilde;","&ndash;","&mdash;","&lsquo;","&rsquo;","&sbquo;","&ldquo;","&rdquo;","&bdquo;","&dagger;","&Dagger;","&bull;","&hellip;","&permil;","&prime;","&Prime;","&lsaquo;","&rsaquo;","&oline;","&frasl;","&euro;","&image;","&weierp;","&real;","&trade;","&alefsym;","&larr;","&uarr;","&rarr;","&darr;","&harr;","&crarr;","&lArr;","&uArr;","&rArr;","&dArr;","&hArr;","&forall;","&part;","&exist;","&empty;","&nabla;","&isin;","&notin;","&ni;","&prod;","&sum;","&minus;","&lowast;","&radic;","&prop;","&infin;","&ang;","&and;","&or;","&cap;","&cup;","&int;","&there4;","&sim;","&cong;","&asymp;","&ne;","&equiv;","&le;","&ge;","&sub;","&sup;","&nsub;","&sube;","&supe;","&oplus;","&otimes;","&perp;","&sdot;","&lceil;","&rceil;","&lfloor;","&rfloor;","&loz;","&spades;","&clubs;","&hearts;","&diams;"];t.memo("button.specialchars",function(){return m.button({contents:'<i class="fa fa-font fa-flip-vertical">',tooltip:r.specialChar.specialChar,click:function(){p.show()}}).render()}),this.makeSpecialCharSetTable=function(){var r=D("<table/>");return D.each(e,function(e,o){var t=D("<td/>").addClass("note-specialchar-node"),n=e%q==0?D("<tr/>"):r.find("tr").last(),i=m.button({callback:function(e){e.html(o),e.attr("title",o),e.attr("data-value",encodeURIComponent(o)),e.css({width:35,"margin-right":"2px","margin-bottom":"2px"})}}).render();t.append(i),n.append(t),e%q==0&&r.append(n)}),x=r.find("tr").length,C=q,r},this.initialize=function(){var e=i.dialogsInBody?D(document.body):n,o='<div class="form-group row-fluid">'+this.makeSpecialCharSetTable()[0].outerHTML+"</div>";this.$dialog=m.dialog({title:r.specialChar.select,body:o}).render().appendTo(e)},this.show=function(){var e=t.invoke("editor.getSelectedText");t.invoke("editor.saveRange"),this.showSpecialCharDialog(e).then(function(e){t.invoke("editor.restoreRange");var o=D("<span></span>").html(e)[0];o&&t.invoke("editor.insertNode",o)}).fail(function(){t.invoke("editor.restoreRange")})},this.showSpecialCharDialog=function(f){return D.Deferred(function(t){var n=p.$dialog,a=n.find(".note-specialchar-node"),l=null,i=[h,g,v,b],r=y;function d(e){e&&(e.find("button").addClass("active"),l=e)}function u(e){e.find("button").removeClass("active"),l=null}function s(e){var o,t,n,i,r=a.length%C;v===e?1<k?--k:1===w&&1===k?(k=r,w=x):(k=C,--w):b===e?w===x&&r===k?w=k=1:k<C?k+=1:w+=k=1:h===e?1===w&&r<k?w=x-1:--w:g===e&&(w+=1),w===x&&r<k||x<w?w=1:w<1&&(w=x),t=w,n=k,i=null,D.each(a,function(e,o){if(Math.ceil((e+1)/q)===t&&((e+1)%q==0?q:(e+1)%q)===n)return i=o,!1}),(o=D(i))&&(u(l),d(o))}function e(e){e.preventDefault();var o=e.keyCode;if(null!=o){if(-1<i.indexOf(o)){if(null===l)return d(a.eq(0)),void(w=k=1);s(o)}else o===r&&l&&(t.resolve(decodeURIComponent(l.find("button").attr("data-value"))),n.modal("hide"));return!1}}if(u(a),f)for(var o=0;o<a.length;o++){var c=D(a[o]);c.text()===f&&(d(c),w=Math.ceil((o+1)/q),k=(o+1)%q)}m.onDialogShown(p.$dialog,function(){D(document).on("keydown",e),p.$dialog.find("button").tooltip(),a.on("click",function(e){e.preventDefault(),t.resolve(decodeURIComponent(D(e.currentTarget).find("button").attr("data-value"))),m.hideDialog(p.$dialog)})}),m.onDialogHidden(p.$dialog,function(){a.off("click"),p.$dialog.find("button").tooltip("destroy"),D(document).off("keydown",e),"pending"===t.state()&&t.reject()}),m.showDialog(p.$dialog)})}}})});