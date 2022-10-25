function $(id) {
	return typeof id === 'string' ? document.getElementById(id) : id
}//用于封装document.getElementById()简化代码
window.onload = function() {//优先加载结构也就是html 再加载js代码
	var lis =  $('tab-title').getElementsByTagName('li')//获取tab-title里面的li 这样才能操作dom
	var divs = $('tab-content').getElementsByClassName('tab-mod')//获取tab-title里面的tab-mod 这样才能操作dom
	if (lis.length != divs.length) {
		return;//标题和内容应该是相对应的 如果不对应就结束
	} else {
		for (var i = 0; i < lis.length; i++) {//遍历每一个li 
           lis[i].id = i//给li加上索引
		   lis[i].onclick = function(){
			   for(var j = 0;j < lis.length;j++){
				   lis[j].className ="";//遍历点击剩下的标题去除active 变为黑色
				   divs[j].style.display = "none"//给当前未点击的标题对应的内容让他消失
			   }
			  this.className = 'active';//给当前点击的标题加上active样式 变红
			  divs[this.id].style.display = 'block'//给当前点击的标题对应的内容让他出现
		   }
		}
	}
}
