define(["../var/document","../var/support"],function(e,t){"use strict";var n;return n=e.createDocumentFragment().appendChild(e.createElement("div")),(e=e.createElement("input")).setAttribute("type","radio"),e.setAttribute("checked","checked"),e.setAttribute("name","t"),n.appendChild(e),t.checkClone=n.cloneNode(!0).cloneNode(!0).lastChild.checked,n.innerHTML="<textarea>x</textarea>",t.noCloneChecked=!!n.cloneNode(!0).lastChild.defaultValue,t});