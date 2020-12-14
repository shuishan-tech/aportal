var ui={};!function(n,a){"use strict";var t=["error","warning","success"],o=["veryWeak","weak","normal","medium","strong","veryStrong"];a.getContainer=function(r,s){r=n(r.ui.container);return r&&1===r.length||(r=s.parent()),r},a.findElement=function(r,s,e){return(s?r.find(s):r).find(e)},a.getUIElements=function(r,s){var e;return r.instances.viewports||(e=a.getContainer(r,s),(s={}).$progressbar=a.findElement(e,r.ui.viewports.progress,"div.progress"),r.ui.showVerdictsInsideProgressBar&&(s.$verdict=s.$progressbar.find("span.password-verdict")),r.ui.showPopover||(r.ui.showVerdictsInsideProgressBar||(s.$verdict=a.findElement(e,r.ui.viewports.verdict,"span.password-verdict")),s.$errors=a.findElement(e,r.ui.viewports.errors,"ul.error-list")),s.$score=a.findElement(e,r.ui.viewports.score,"span.password-score"),r.instances.viewports=s)},a.initProgressBar=function(r,s){var e=a.getContainer(r,s),o="<div class='progress ";r.ui.bootstrap2?o+=r.ui.progressBarExtraCssClasses+"'><div class='":o+=r.ui.progressExtraCssClasses+"'><div class='"+r.ui.progressBarExtraCssClasses+" progress-",o+="bar'>",r.ui.showVerdictsInsideProgressBar&&(o+="<span class='password-verdict'></span>"),o+="</div></div>",r.ui.viewports.progress?e.find(r.ui.viewports.progress).append(o):n(o).insertAfter(s)},a.initHelper=function(r,s,e,o){r=a.getContainer(r,s);o?r.find(o).append(e):n(e).insertAfter(s)},a.initVerdict=function(r,s){a.initHelper(r,s,"<span class='password-verdict'></span>",r.ui.viewports.verdict)},a.initErrorList=function(r,s){a.initHelper(r,s,"<ul class='error-list'></ul>",r.ui.viewports.errors)},a.initScore=function(r,s){a.initHelper(r,s,"<span class='password-score'></span>",r.ui.viewports.score)},a.initPopover=function(r,s){s.popover("destroy"),s.popover({html:!0,placement:r.ui.popoverPlacement,trigger:"manual",content:" "})},a.initUI=function(r,s){r.ui.showPopover?a.initPopover(r,s):(r.ui.showErrors&&a.initErrorList(r,s),r.ui.showVerdicts&&!r.ui.showVerdictsInsideProgressBar&&a.initVerdict(r,s)),r.ui.showProgressBar&&a.initProgressBar(r,s),r.ui.showScore&&a.initScore(r,s)},a.updateProgressBar=function(e,r,s,o){var r=a.getUIElements(e,r).$progressbar,i=r.find(".progress-bar"),t="progress-";e.ui.bootstrap2&&(i=r.find(".bar"),t=""),n.each(e.ui.colorClasses,function(r,s){e.ui.bootstrap2||e.ui.bootstrap3?i.removeClass(t+"bar-"+s):i.removeClass("bg-"+s)}),e.ui.bootstrap2||e.ui.bootstrap3?i.addClass(t+"bar-"+e.ui.colorClasses[s]):i.addClass("bg-"+e.ui.colorClasses[s]),i.css("width",o+"%")},a.updateVerdict=function(r,s,e,o){s=a.getUIElements(r,s).$verdict;s.removeClass(r.ui.colorClasses.join(" ")),-1<e&&s.addClass(r.ui.colorClasses[e]),r.ui.showVerdictsInsideProgressBar&&s.css("white-space","nowrap"),s.html(o)},a.updateErrors=function(r,s,e){var s=a.getUIElements(r,s).$errors,o="";e||n.each(r.instances.errors,function(r,s){o+="<li>"+s+"</li>"}),s.html(o)},a.updateScore=function(r,s,e,o){r=a.getUIElements(r,s).$score,s="";o||(s=e.toFixed(2)),r.html(s)},a.updatePopover=function(r,s,e,o){var i=s.data("bs.popover"),t="",n=!0;r.ui.showVerdicts&&!r.ui.showVerdictsInsideProgressBar&&0<e.length&&(t="<h5><span class='password-verdict'>"+e+"</span></h5>",n=!1),r.ui.showErrors&&(0<r.instances.errors.length&&(n=!1),t+=r.ui.popoverError(r)),n||o?s.popover("hide"):(r.ui.bootstrap2&&(i=s.data("popover")),i.$arrow&&0<i.$arrow.parents("body").length?s.find("+ .popover .popover-content").html(t):(r.ui.bootstrap2||r.ui.bootstrap3?i.options.content=t:i.config.content=t,s.popover("show")))},a.updateFieldStatus=function(e,r,s,o){var i=r;e.ui.bootstrap2?i=r.parents(".control-group").first():e.ui.bootstrap3&&(i=r.parents(".form-group").first()),n.each(t,function(r,s){e.ui.bootstrap3?s="has-"+s:e.ui.bootstrap2||("error"===s&&(s="danger"),s="border-"+s),i.removeClass(s)}),o||(s=t[Math.floor(s/2)],e.ui.bootstrap3?s="has-"+s:e.ui.bootstrap2||("error"===s&&(s="danger"),s="border-"+s),i.addClass(s))},a.percentage=function(r,s,e){e=Math.floor(100*s/e),r=r.ui.progressBarMinPercentage;return e=100<(e=e<=r?r:e)?100:e},a.getVerdictAndCssClass=function(r,s){var e;return void 0===s?["",0]:(e=s<=r.ui.scores[0]?0:s<r.ui.scores[1]?1:s<r.ui.scores[2]?2:s<r.ui.scores[3]?3:s<r.ui.scores[4]?4:5,s=o[e],[r.i18n.t(s),e])},a.updateUI=function(r,s,e){var o,i,t=a.getVerdictAndCssClass(r,e),n=0===e?"":t[0];t=t[1],i=r.ui.useVerdictCssClass?t:-1,r.ui.showProgressBar&&(o=void 0===e?r.ui.progressBarEmptyPercentage:a.percentage(r,e,r.ui.scores[4]),a.updateProgressBar(r,s,t,o),r.ui.showVerdictsInsideProgressBar&&a.updateVerdict(r,s,i,n)),r.ui.showStatus&&a.updateFieldStatus(r,s,t,void 0===e),r.ui.showPopover?a.updatePopover(r,s,n,void 0===e):(r.ui.showVerdicts&&!r.ui.showVerdictsInsideProgressBar&&a.updateVerdict(r,s,i,n),r.ui.showErrors&&a.updateErrors(r,s,void 0===e)),r.ui.showScore&&a.updateScore(r,s,e,void 0===e)}}(jQuery,ui);