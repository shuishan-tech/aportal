var oldAjax=jQuery.ajax;jQuery.ajax=function(){var e=oldAjax.apply(this,arguments);return e.promise&&(migrateWarnFunc(e,"success",e.done,"jQXHR.success is deprecated and removed"),migrateWarnFunc(e,"error",e.fail,"jQXHR.error is deprecated and removed"),migrateWarnFunc(e,"complete",e.always,"jQXHR.complete is deprecated and removed")),e};