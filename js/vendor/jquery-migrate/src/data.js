var oldData=jQuery.data;jQuery.data=function(a,e,t){var r;if(e&&"object"==typeof e&&2===arguments.length){r=jQuery.hasData(a)&&oldData.call(this,a);var s,l={};for(s in e)s!==jQuery.camelCase(s)?(migrateWarn("jQuery.data() always sets/gets camelCased names: "+s),r[s]=e[s]):l[s]=e[s];return oldData.call(this,a,l),e}return e&&"string"==typeof e&&e!==jQuery.camelCase(e)&&(r=jQuery.hasData(a)&&oldData.call(this,a))&&e in r?(migrateWarn("jQuery.data() always sets/gets camelCased names: "+e),2<arguments.length&&(r[e]=t),r[e]):oldData.apply(this,arguments)};