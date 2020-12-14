function AnchorJS(A){"use strict";this.options=A||{},this._applyRemainingDefaultOptions=function(A){this.options.icon=this.options.hasOwnProperty("icon")?A.icon:"",this.options.visible=this.options.hasOwnProperty("visible")?A.visible:"hover",this.options.placement=this.options.hasOwnProperty("placement")?A.placement:"right",this.options.class=this.options.hasOwnProperty("class")?A.class:""},this._applyRemainingDefaultOptions(A),this.add=function(A){var t,e,o,n,s,i,a,l,r,c;if(this._applyRemainingDefaultOptions(this.options),A){if("string"!=typeof A)throw new Error("The selector provided to AnchorJS was invalid.")}else A="h1, h2, h3, h4, h5, h6";if(0===(t=document.querySelectorAll(A)).length)return!1;for(this._addBaselineStyles(),A=document.querySelectorAll("[id]"),e=[].map.call(A,function(A){return A.id}),n=0;n<t.length;n++){if(t[n].hasAttribute("id"))o=t[n].getAttribute("id");else{for(c=t[n].textContent,s=c.replace(/[^\w\s-]/gi,"").replace(/\s+/g,"-").replace(/-{2,}/g,"-").substring(0,64).replace(/^-+|-+$/gm,"").toLowerCase(),l=s,a=0;void 0!==i&&(l=s+"-"+a),i=e.indexOf(l),a+=1,-1!==i;);i=void 0,e.push(l),t[n].setAttribute("id",l),o=l}r=o.replace(/-/g," "),(c=document.createElement("a")).className="anchorjs-link "+this.options.class,c.href="#"+o,c.setAttribute("aria-label","Anchor link for: "+r),c.setAttribute("data-anchorjs-icon",this.options.icon),"always"===this.options.visible&&(c.style.opacity="1"),""===this.options.icon&&(c.style.fontFamily="anchorjs-icons",c.style.fontStyle="normal",c.style.fontVariant="normal",c.style.fontWeight="normal",c.style.lineHeight=1),"left"===this.options.placement?(c.style.position="absolute",c.style.marginLeft="-1em",c.style.paddingRight="0.5em",t[n].insertBefore(c,t[n].firstChild)):(c.style.paddingLeft="0.375em",t[n].appendChild(c))}return this},this.remove=function(A){for(var t,e=document.querySelectorAll(A),o=0;o<e.length;o++)(t=e[o].querySelector(".anchorjs-link"))&&e[o].removeChild(t);return this},this._addBaselineStyles=function(){var A,t;null===document.head.querySelector("style.anchorjs")&&((A=document.createElement("style")).className="anchorjs",A.appendChild(document.createTextNode("")),void 0===(t=document.head.querySelector('[rel="stylesheet"], style'))?document.head.appendChild(A):document.head.insertBefore(A,t),A.sheet.insertRule(" .anchorjs-link {   opacity: 0;   text-decoration: none;   -webkit-font-smoothing: antialiased;   -moz-osx-font-smoothing: grayscale; }",A.sheet.cssRules.length),A.sheet.insertRule(" *:hover > .anchorjs-link, .anchorjs-link:focus  {   opacity: 1; }",A.sheet.cssRules.length),A.sheet.insertRule(" [data-anchorjs-icon]::after {   content: attr(data-anchorjs-icon); }",A.sheet.cssRules.length),A.sheet.insertRule(' @font-face {   font-family: "anchorjs-icons";   font-style: normal;   font-weight: normal;   src: url(data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBTUAAAC8AAAAYGNtYXAWi9QdAAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5Zgq29TcAAAF4AAABNGhlYWQEZM3pAAACrAAAADZoaGVhBhUDxgAAAuQAAAAkaG10eASAADEAAAMIAAAAFGxvY2EAKACuAAADHAAAAAxtYXhwAAgAVwAAAygAAAAgbmFtZQ5yJ3cAAANIAAAB2nBvc3QAAwAAAAAFJAAAACAAAwJAAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpywPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAg6cv//f//AAAAAAAg6cv//f//AAH/4xY5AAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAACADEARAJTAsAAKwBUAAABIiYnJjQ/AT4BMzIWFxYUDwEGIicmND8BNjQnLgEjIgYPAQYUFxYUBw4BIwciJicmND8BNjIXFhQPAQYUFx4BMzI2PwE2NCcmNDc2MhcWFA8BDgEjARQGDAUtLXoWOR8fORYtLTgKGwoKCjgaGg0gEhIgDXoaGgkJBQwHdR85Fi0tOAobCgoKOBoaDSASEiANehoaCQkKGwotLXoWOR8BMwUFLYEuehYXFxYugC44CQkKGwo4GkoaDQ0NDXoaShoKGwoFBe8XFi6ALjgJCQobCjgaShoNDQ0NehpKGgobCgoKLYEuehYXAAEAAAABAACiToc1Xw889QALBAAAAAAA0XnFFgAAAADRecUWAAAAAAJTAsAAAAAIAAIAAAAAAAAAAQAAA8D/wAAABAAAAAAAAlMAAQAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAACAAAAAoAAMQAAAAAACgAUAB4AmgABAAAABQBVAAIAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEADgAAAAEAAAAAAAIABwCfAAEAAAAAAAMADgBLAAEAAAAAAAQADgC0AAEAAAAAAAUACwAqAAEAAAAAAAYADgB1AAEAAAAAAAoAGgDeAAMAAQQJAAEAHAAOAAMAAQQJAAIADgCmAAMAAQQJAAMAHABZAAMAAQQJAAQAHADCAAMAAQQJAAUAFgA1AAMAAQQJAAYAHACDAAMAAQQJAAoANAD4YW5jaG9yanMtaWNvbnMAYQBuAGMAaABvAHIAagBzAC0AaQBjAG8AbgBzVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwYW5jaG9yanMtaWNvbnMAYQBuAGMAaABvAHIAagBzAC0AaQBjAG8AbgBzYW5jaG9yanMtaWNvbnMAYQBuAGMAaABvAHIAagBzAC0AaQBjAG8AbgBzUmVndWxhcgBSAGUAZwB1AGwAYQByYW5jaG9yanMtaWNvbnMAYQBuAGMAaABvAHIAagBzAC0AaQBjAG8AbgBzRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==) format("truetype"); }',A.sheet.cssRules.length))}}var anchors=new AnchorJS;