!function(e){"function"==typeof define&&define.amd?define(["jquery","../jquery.validate"],e):"object"==typeof module&&module.exports?module.exports=e(require("jquery")):e(jQuery)}(function(e){return e.extend(e.validator.messages,{required:"ეს ველი სავალდებულოა",remote:"გთხოვთ შეასწოროთ.",email:"გთხოვთ შეიყვანოთ სწორი ფორმატით.",url:"გთხოვთ შეიყვანოთ სწორი ფორმატით.",date:"გთხოვთ შეიყვანოთ სწორი თარიღი.",dateISO:"გთხოვთ შეიყვანოთ სწორი ფორმატით (ISO).",number:"გთხოვთ შეიყვანოთ რიცხვი.",digits:"დაშვებულია მხოლოდ ციფრები.",creditcard:"გთხოვთ შეიყვანოთ სწორი ფორმატის ბარათის კოდი.",equalTo:"გთხოვთ შეიყვანოთ იგივე მნიშვნელობა.",maxlength:e.validator.format("გთხოვთ შეიყვანოთ არა უმეტეს {0} სიმბოლოსი."),minlength:e.validator.format("შეიყვანეთ მინიმუმ {0} სიმბოლო."),rangelength:e.validator.format("გთხოვთ შეიყვანოთ {0} -დან {1} -მდე რაოდენობის სიმბოლოები."),range:e.validator.format("შეიყვანეთ {0} -სა {1} -ს შორის."),max:e.validator.format("გთხოვთ შეიყვანოთ მნიშვნელობა ნაკლები ან ტოლი {0} -ს."),min:e.validator.format("გთხოვთ შეიყვანოთ მნიშვნელობა მეტი ან ტოლი {0} -ს.")}),e});