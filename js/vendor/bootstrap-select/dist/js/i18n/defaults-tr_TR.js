!function(e,i){void 0===e&&void 0!==window&&(e=window),"function"==typeof define&&define.amd?define(["jquery"],i):"object"==typeof module&&module.exports?module.exports=i(require("jquery")):i(e.jQuery)}(this,function(e){e.fn.selectpicker.defaults={noneSelectedText:"Hiçbiri seçilmedi",noneResultsText:"Hiçbir sonuç bulunamadı {0}",countSelectedText:function(e,i){return"{0} öğe seçildi"},maxOptionsText:function(e,i){return[1==e?"Limit aşıldı (maksimum {n} sayıda öğe )":"Limit aşıldı (maksimum {n} sayıda öğe)","Grup limiti aşıldı (maksimum {n} sayıda öğe)"]},selectAllText:"Tümünü Seç",deselectAllText:"Seçiniz",multipleSeparator:", "}});