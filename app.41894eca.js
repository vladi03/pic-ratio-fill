(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{259:function(e,t,i){"use strict";i.r(t);i(88);var n=i(0),o=i.n(n),r=i(83),a=i(269),c=i(84),l=function(e,t,i,n){return e/i<=t/n},g=function(e,t,i){return void 0===i&&(i=!1),new Promise((function(n,o){var r=e;r.crossOrigin="Anonymous";var a=document.createElement("canvas");a.width=t?r.naturalWidth:15,a.height=t?15:r.naturalHeight;var l=r.naturalHeight-15,g=0;!t&&i?(l=0,g=r.naturalWidth-15):i||(l=0,g=0),a.getContext("2d").drawImage(r,g,l,a.width,a.height,0,0,a.width,a.height);var h=a.toDataURL(),s=document.createElement("img");s.src=h;var d=new c.a,u=function(){var e=d.getColor(s),t=d.getPalette(s,7);n({color:e,pallet:t,main:e})};s.complete?u():s.addEventListener("load",(function(){u()}))}))},h=i(85),s=function(e){var t=e.activeColor,i=e.main,r=e.pallet,a=e.onColorChange,c=e.onClose,l=[u(i)];return r.forEach((function(e){var t=u(e);-1===l.indexOf(t)&&l.push(t)})),o.a.createElement(n.Fragment,null,c&&o.a.createElement("span",{style:{float:"right",marginTop:-20,marginRight:5,cursor:"pointer"},onClick:function(){return c()}},"Close"),o.a.createElement(h.SketchPicker,{color:{r:t[0],g:t[1],b:t[2]},onChangeComplete:function(e){a([e.rgb.r,e.rgb.g,e.rgb.b])},presetColors:l}))};function d(e){var t=e.toString(16);return 1===t.length?"0"+t:t}function u(e){return"#"+d(e[0])+d(e[1])+d(e[2])}var m=function(e){var t=e.src,i=e.width,r=e.height,a=e.style,c=e.onChangeColors,h=p({containerWidth:i,containerHeight:r}),d=Object(n.useState)(0),u=d[0],m=d[1],f=Object(n.useState)({willFitWidth:!0,colorRgb:{color:[0,0,0],pallet:[],main:[0,0,0]},colorRgbOpposite:{color:[0,0,0],pallet:[],main:[0,0,0]}}),A=f[0],b=f[1],w=A.willFitWidth,O=A.colorRgb,C=A.colorRgbOpposite,v="rgb("+O.color[0]+","+O.color[1]+", "+O.color[2]+")",B="rgb("+C.color[0]+","+C.color[1]+", "+C.color[2]+")";return o.a.createElement("div",{className:h.editContainer},o.a.createElement("div",{style:a,className:w?h.imageContainerWidthFit:h.imageContainerHeightFit},o.a.createElement("div",{className:w?h.picBorderWidth:h.picBorderHeight,style:{backgroundColor:v},onClick:function(){return m(1)}}),o.a.createElement("div",{className:w?h.fitWidth:h.fitHeight},o.a.createElement("img",{src:t,className:w?h.fitWidth:h.fitHeight,onLoad:function(e){var t,n,o;(t=e.target,n=i,o=r,new Promise((function(e,i){var r=t.naturalWidth,a=t.naturalHeight,c=l(n,o,r,a),h=g(t,c),s=g(t,c,!0);Promise.all([h,s]).then((function(t){e({willFitWidth:c,colorRgb:t[0],colorRgbOpposite:t[1]})})).catch(i)}))).then((function(e){console.log(e),b(e),c&&c({colorRgb:e.colorRgb.color,colorRgbOpposite:e.colorRgbOpposite.color,willFitWidth:e.willFitWidth})}))}})),o.a.createElement("div",{className:w?h.picBorderWidth:h.picBorderHeight,style:{backgroundColor:B},onClick:function(){return m(2)}})),1===u&&o.a.createElement("div",{className:h.pickerContainer},o.a.createElement(s,{activeColor:O.color,main:O.main,pallet:O.pallet,onColorChange:function(e){var t=Object.assign({},O,{color:e}),i=Object.assign({},A);i.colorRgb=t,b(i),c&&c({colorRgb:i.colorRgb.color,colorRgbOpposite:i.colorRgbOpposite.color,willFitWidth:i.willFitWidth})},onClose:function(){return m(0)}})),2===u&&o.a.createElement("div",{className:h.pickerContainer},o.a.createElement(s,{activeColor:C.color,main:C.main,pallet:C.pallet,onColorChange:function(e){var t=Object.assign({},C,{color:e}),i=Object.assign({},A);i.colorRgbOpposite=t,b(i),c&&c({colorRgb:i.colorRgb.color,colorRgbOpposite:i.colorRgbOpposite.color,willFitWidth:i.willFitWidth})},onClose:function(){return m(0)}})))},p=Object(a.a)({picBorderHeight:{width:"50%",height:function(e){return e.containerHeight},zIndex:1,cursor:"pointer"},picBorderWidth:{width:"100%",height:"50%",zIndex:1,cursor:"pointer"},imageContainerHeightFit:{width:function(e){return e.containerWidth},height:function(e){return e.containerHeight},overflow:"hidden",backgroundColor:"#afcdee",display:"flex"},imageContainerWidthFit:{width:function(e){return e.containerWidth},height:function(e){return e.containerHeight},overflow:"hidden",backgroundColor:"#afcdee"},fitHeight:{height:"100%",marginLeft:"auto",marginRight:"auto",position:"relative",zIndex:2},fitWidth:{width:"inherit",position:"absolute",transform:"translateY(-50%)",zIndex:2},editContainer:{display:"flex"},pickerContainer:{marginLeft:30}}),f=function(e){var t=e.src,i=e.width,r=e.height,a=e.style,c=e.willFitWidth,l=e.colorRgb,g=e.colorRgbOpposite,h=A({containerWidth:i,containerHeight:r}),s=Object(n.useState)(!1),d=s[0],u=s[1],m=Object(n.useState)(!1),p=m[0],f=m[1];d&&t!==d&&(u(t),f(c));var b=l&&l.length>2&&!1!==d?"rgb("+l[0]+","+l[1]+", "+l[2]+")":"rgb(0,0,0)",w=g&&g.length>2&&!1!==d?"rgb("+g[0]+","+g[1]+", "+g[2]+")":"rgb(0,0,0)";return o.a.createElement("div",{className:h.editContainer},o.a.createElement("div",{style:a,className:p?h.imageContainerWidthFit:h.imageContainerHeightFit},o.a.createElement("div",{className:p?h.picBorderWidth:h.picBorderHeight,style:{backgroundColor:b}}),o.a.createElement("div",{className:p?h.fitWidth:h.fitHeight},o.a.createElement("img",{src:d||"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAOiSURBVHhe7do7SyNRGMbx/RyCYOv24n4GLSxdCxVRFLyiiZdEk3hL1gtYaGnh5QvYxjLp1aS0kU0hbAolsFgI6ruc4ytGk0myojOch+cHh3lnIkzxJ8PMxG9C0BgYHAODY2BwDAyOgcExMDgGBsfA4BgYHAODY2BwDAyOgcExMDgGBsfA4BgYHAODY2BwDAyOgcExMDgGBsfA4BgYHAODY2BwDAyOgcExMDgGBsfA4BgYHAODY2BwDAyOgcExMDgGBsfA4BgYHAODY2BwDAyOgcExMDgGBuds4NnZWYlGoxVraWnp09fc3JxkMhk9s1ucDLy/vy+3t7e6549QKKSTW5wMfHR0JMU/Rd3zh7k6uMjNwMevgVtaWiSZTEosFrMrEU98ykolU9L6vdWewzCXahc5HzgcDtvtV9je3tZJZHFxUSe3OB94cnLSbr/C+vq6TgzsK6/A9/f3MjQ0ZG+IstmsHv04Bg6IV+CRkRGdREZHR3Wq7vr6WsbGxmR8fFxKpZIefYuBA+IVuHxOJBI6Vcrn8zI1NaV7Ij09PVL4XdC9VwwcEK/AZ2dnMjw8LJFIRPb29vToWxcXFxIKVz7T9vf3V0Rm4IB89CYrn8vbN2Be3kdm4IDUC/z09KTTK3NZNq8cjcfHR7utpq+vTwqF58gMHJD//Qbncrma39z3TOSbmxs+BwelXmBzN21egExPT8vV1ZXMz8/rJ40zd+GDg4O6x8C+qhW4q6tLp2dNTU12W+2yXU/7j3adGNhXXoE7Ozt1esvreD27u7s6MbCvygPPzMzYba2IDw8P0tHRoXveisWipNNp2dnZsc/RbW1t+gkD+6o88MTEhH1R0Yjun906iQ358k8C8XhcFhYW5PDw0D5Lm1eextbWlt0aDOyj8sDNzc12W89p+tReznt7eyWVSsn5+bl+4o2PSQEpD1zrd9qTkxOJRCOysrIil5eXerRxq6urOjGwr8oDm3jmMmsCvF9ra2uyubkpG782ZHl5uerf1Fsv+IO/jw4ODuTu753u+YOBfWR+6x0YGLB3uuZb9vLvOl+1zHnM+VzkZGBqHAODY2BwDAyOgcExMDgGBsfA4BgYHAODY2BwDAyOgcExMDgGBsfA4BgYHAODY2BwDAyOgcExMDgGBsfA4BgYHAODY2BwDAyOgcExMDgGBsfA4BgYHAODY2BwDAyOgcExMDgGBsfA4BgYHAODY2BwDAyOgcExMDgGBsfA4BgYmsg/zgu6X0Ra40gAAAAASUVORK5CYII=",className:p?h.fitWidth:h.fitHeight,onLoad:function(){if(!d){var e=new Image;e.onload=function(){u(e.src),f(c)},e.src=t}}})),o.a.createElement("div",{className:p?h.picBorderWidth:h.picBorderHeight,style:{backgroundColor:w}})))},A=Object(a.a)({picBorderHeight:{width:"50%",height:function(e){return e.containerHeight},zIndex:1},picBorderWidth:{width:"100%",height:"50%",zIndex:1},imageContainerHeightFit:{width:function(e){return e.containerWidth},height:function(e){return e.containerHeight},overflow:"hidden",backgroundColor:"#afcdee",display:"flex"},imageContainerWidthFit:{width:function(e){return e.containerWidth},height:function(e){return e.containerHeight},overflow:"hidden",backgroundColor:"#afcdee"},fitHeight:{height:"100%",marginLeft:"auto",marginRight:"auto",position:"relative",zIndex:2},fitWidth:{width:"inherit",position:"absolute",transform:"translateY(-50%)",zIndex:2},editContainer:{display:"flex"},pickerContainer:{marginLeft:30}}),b=o.a.createElement("h1",null,"Pic Ratio Fill"),w=o.a.createElement("p",null,"Example : Fit to width"),O=o.a.createElement("p",null,"Example : Fit to Height"),C=o.a.createElement("p",null,"Example : View Only"),v=o.a.createElement("p",null,"Example : View Only"),B=function(){var e=function(e){return console.log(e)};return o.a.createElement("div",{style:{margin:30}},b,w,o.a.createElement(m,{src:"sample.jpg",width:330,height:260,style:{marginBottom:20},onChangeColors:e}),O,o.a.createElement(m,{src:"sample2.jpg",width:330,height:260,onChangeColors:e}),C,o.a.createElement(f,{src:"sample.jpg",width:330,height:260,colorRgb:[216,211,195],colorRgbOpposite:[128,120,98],willFitWidth:!0}),v,o.a.createElement(f,{src:"sample2.jpg",width:330,height:260,colorRgb:[216,211,195],colorRgbOpposite:[128,120,98],willFitWidth:!1}))};Object(r.render)(o.a.createElement(B,null),document.querySelector("#app"))},87:function(e,t,i){e.exports=i(259)},88:function(e,t,i){}},[[87,1,2]]]);
//# sourceMappingURL=app.41894eca.js.map