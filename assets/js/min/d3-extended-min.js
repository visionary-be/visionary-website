!function(){var t=function(t){if("undefined"==typeof t&&"object"!=typeof t)return console.log("D3 not found."),!1;t.selection.prototype.addClass=function(t){return this.classed(t,!0)},t.selection.prototype.after=function(e){var n=[];return this.each(function(){var t=document.createElement(e);this.parentNode.insertBefore(t,this.nextSibling),n.push(t)}),t.selectAll(n)},t.selection.prototype.appendTo=function(e){var n=t.selectAll(e),o=n.size(),i=this,s=[];return n.each(function(){var t=this;i.each(function(){if(o>1){var e=this.cloneNode(!0);t.appendChild(e),s.push(e)}else t.appendChild(this)})}),o>1&&this.remove(),s.length>0?t.selectAll(s):this},t.selection.prototype.before=function(e){var n=[];return this.each(function(){var t=document.createElement(e);this.parentNode.insertBefore(t,this),n.push(t)}),t.selectAll(n)},t.selection.prototype.clear=function(){return this.selectAll("*").remove(),this},t.selection.prototype.css=t.selection.prototype.style,t.selection.prototype.eq=function(t,e){return e=e||0,this.filter(function(n,o,i){return o==t&&i==e})},t.selection.prototype.first=function(){for(var e=0,n=this.length;n>e;e++)for(var o=this[e],i=0,s=o.length,r;s>i;i++)if(r=o[i])return t.select(r)},t.selection.prototype.hasClass=function(t){return this.classed(t)},t.selection.prototype.hide=function(){return this.style("display","none"),this},t.selection.prototype.last=function(){for(var e=this.length-1;e>=0;e--)for(var n=this[e],o=n.length-1,i;o>=0;o--)if(i=n[o])return t.select(i)},t.selection.prototype.moveToBack=function(){return this.each(function(){var t=this.parentNode.firstChild;t&&this.parentNode.insertBefore(this,t)})},t.selection.prototype.moveToFront=function(){return this.each(function(){this.parentNode.appendChild(this)})};var e=t.selection.prototype.on;return t.selection.prototype.on=function(t,n,o){if("string"==typeof t&&t.indexOf(" ")>-1)for(var i=t.split(" "),s=0;s<i.length;s++)e.apply(this,[i[s],n,o]);else e.apply(this,[t,n,o]);return this},t.selection.prototype.prepend=function(e){var n=[];return this.each(function(){var t=document.createElement(e);this.insertBefore(t,this.firstChild),n.push(t)}),t.selectAll(n)},t.selection.prototype.removeClass=function(t){return this.classed(t,!1)},t.selection.prototype.show=function(){return this.style("display",""),this},t.selection.prototype.toggle=function(){var t="none"==this.style("display");return this.style("display",t?"inherit":"none")},t.selection.prototype.toggleClass=function(t){for(var e=t.split(" "),n=0;n<e.length;n++){var o=e[n];this.classed(o,!this.classed(o))}return this},t.selection.prototype.trigger=function(t,n){return e.apply(this,[t])(n),this},t};"object"==typeof module&&module.exports?module.exports=t:"function"==typeof define&&define.amd?define(["d3"],t):t(d3)}();