var oldDeferred=jQuery.Deferred,tuples=[["resolve","done",jQuery.Callbacks("once memory"),jQuery.Callbacks("once memory"),"resolved"],["reject","fail",jQuery.Callbacks("once memory"),jQuery.Callbacks("once memory"),"rejected"],["notify","progress",jQuery.Callbacks("memory"),jQuery.Callbacks("memory")]];jQuery.Deferred=function(e){var l=oldDeferred(),s=l.promise();return l.pipe=s.pipe=function(){var n=arguments;return migrateWarn("deferred.pipe() is deprecated"),jQuery.Deferred(function(i){jQuery.each(tuples,function(e,r){var o=jQuery.isFunction(n[e])&&n[e];l[r[1]](function(){var e=o&&o.apply(this,arguments);e&&jQuery.isFunction(e.promise)?e.promise().done(i.resolve).fail(i.reject).progress(i.notify):i[r[0]+"With"](this===s?i.promise():this,o?[e]:arguments)})}),n=null}).promise()},e&&e.call(l,l),l},jQuery.Deferred.exceptionHook=oldDeferred.exceptionHook;