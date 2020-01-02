describe("Circles",function(){var e,a;function t(){return e.firstChild.children[1]}function i(){return e.firstChild.getElementsByTagName("svg")[0]}it("is defined",function(){expect(typeof Circles).toEqual("function")}),beforeEach(function(){(e=document.createElement("div")).id="circles-1",document.body.appendChild(e)}),afterEach(function(){e.parentNode.removeChild(e)}),describe("Creation",function(){it("returns a Circles instance",function(){var t=Circles.create({});expect(t instanceof Circles).toBeTruthy()}),it("returns an instance with 0 as value",function(){var t=Circles.create({id:e.id});expect(t.getValue()).toEqual(0)}),it("returns an instance with 100 as max value",function(){var t=Circles.create({id:e.id});expect(t.getMaxValue()).toEqual(100)}),describe("Generated content",function(){beforeEach(function(){a=Circles.create({id:e.id,value:40,radius:60,duration:null})}),it("contains a wrapper with default class",function(){Circles.create({id:e.id,value:40,radius:60,duration:null,wrpClass:"wrapContainer"}),expect(e.firstChild.className).toEqual("wrapContainer")}),it("contains a wrapper with provided class",function(){expect(e.firstChild.className).toEqual("circles-wrp")}),it("contains a SVG tag",function(){expect(i()instanceof SVGSVGElement).toBeTruthy()}),it("contains two PATH tags into the SVG",function(){expect(i().getElementsByTagName("path").length).toEqual(2)}),it("adds class attributes to the path",function(){expect(i().getElementsByTagName("path")[0].getAttribute("class")).toEqual("circles-maxValueStroke")}),it("adds provided class attributes to the path",function(){Circles.create({id:e.id,value:40,radius:60,duration:null,maxValueStrokeClass:"testMaxValueClass",wrpClass:"wrapContainer"}),expect(i().getElementsByTagName("path")[0].getAttribute("class")).toEqual("testMaxValueClass")}),it("contains the SVG without animation",function(){var t=i().getElementsByTagName("path")[1].getAttribute("d");expect(t).toEqual("M 59.988797973796764 5.000001140776291 A 55 55 0 0 1 92.3939094694214 104.44811165040569 ")}),it("contains the SVG with animation",function(){a=Circles.create({id:e.id,value:40,radius:60});var t=e.firstChild.getElementsByTagName("svg")[0].getElementsByTagName("path")[1].getAttribute("d");expect(t).toEqual("M 59.988797973796764 5.000001140776291 A 55 55 0 0 1 63.396635173034774 5.1049831997356705 ")}),it("has styles by default",function(){a=Circles.create({id:e.id,value:40,radius:60,text:"%",duration:null}),expect(e.firstChild.style[0]).toBeTruthy()}),it("can have its styles overridden",function(){a=Circles.create({id:e.id,value:40,radius:60,duration:null,text:"%",styleWrapper:!1}),expect(e.firstChild.style[0]).toBeFalsy()})}),describe("Text",function(){it("has a container",function(){a=Circles.create({id:e.id,value:40,radius:60,duration:null}),expect(t()instanceof HTMLDivElement).toBeTruthy()}),it("has a container with default class",function(){a=Circles.create({id:e.id,value:40,radius:60,duration:null}),expect(t().className).toEqual("circles-text")}),it("has a container with provided class",function(){a=Circles.create({id:e.id,value:40,radius:60,duration:null,textClass:"textContainer"}),expect(t().className).toEqual("textContainer")}),it("contains the supplied text",function(){a=Circles.create({id:e.id,value:40,radius:60,text:"%",duration:null}),expect(t().innerHTML).toEqual("%")}),it("can be managed by a function",function(){a=Circles.create({id:e.id,value:40,radius:60,text:function(t){return t+"%"},duration:null}),expect(t().innerHTML).toEqual("40%")}),it("can be empty",function(){a=Circles.create({id:e.id,value:40,radius:60,text:null,duration:null}),expect(t().innerHTML).toBeFalsy()}),it("has styles by default",function(){a=Circles.create({id:e.id,value:40,radius:60,text:"%",duration:null}),expect(t().style[0]).toBeTruthy()}),it("can have its styles overridden",function(){a=Circles.create({id:e.id,value:40,radius:60,duration:null,text:"%",styleText:!1}),expect(t().style[0]).toBeFalsy()})})}),describe("API",function(){beforeEach(function(){a=Circles.create({id:e.id,value:40,radius:60,duration:null})}),it("can update radius",function(){a.updateRadius(30),expect(60==i().getAttribute("width")).toBeTruthy()}),it("can update stroke width",function(){a.updateWidth(20),expect(20==i().getElementsByTagName("path")[1].getAttribute("stroke-width")).toBeTruthy()}),it("can update colors",function(){a.updateColors(["#000","#fff"]);var t=i().getElementsByTagName("path");expect("#000"===t[0].getAttribute("stroke")&&"#fff"===t[1].getAttribute("stroke")).toBeTruthy()}),it("can get correct percentage",function(){expect(a.getPercent()).toEqual(40)}),it("can update value",function(){a.update(50),expect(a.getPercent()).toEqual(50)}),it("can get correct value from percentage",function(){a=Circles.create({id:e.id,maxValue:1e3,duration:null}),expect(a.getValueFromPercent(25)).toEqual(250)}),it("can return HTML representation of a number",function(){expect(a.htmlifyNumber(12.43,"int","float")).toEqual('<span class="int">12</span>.<span class="float">43</span>')})})});