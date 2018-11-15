var myScroll,
	pullDownEl, pullDownOffset,
	pullUpEl, pullUpOffset;
	//generatedCount = 0;

//function pullDownAction () {
//	setTimeout(function () {
//		//var el, li, i;
//		//el = document.getElementById('thelist');
//		//for (i=0; i<1; i++) {
//		//	li = document.createElement('li');
//		//	li.innerText = 'Generated row ' + (++generatedCount);
//		//	el.insertBefore(li, el.childNodes[0]);
//		//}		
//	    //myScroll.refresh();
//	    pager_initlist();
//	}, 1000);
    
//    //myScroll.refresh();
//}

//function pullUpAction () {
//	setTimeout(function () {
//		//var el, li, i;
//		//el = document.getElementById('thelist');

//		//for (i=0; i<1; i++) {
//		//	li = document.createElement('li');
//		//	li.innerText = 'Generated row ' + (++generatedCount);
//		//	el.appendChild(li, el.childNodes[0]);
//		//}		
//	    //myScroll.refresh();	
//	    bindlist();
//	}, 1000);
    
//    //myScroll.refresh();    
//    //pullUpEl.querySelector('.pullUpLabel').innerHTML = '';
//}

function loaded() {
	pullDownEl = document.getElementById('pullDown');
	pullDownOffset = pullDownEl.offsetHeight;
	pullUpEl = document.getElementById('pullUp');	
	pullUpOffset = pullUpEl.offsetHeight;
	
	myScroll = new iScroll('wrapper', {
		useTransition: true,
		topOffset: pullDownOffset,
		//刷新的时候，加载初始化刷新更多的提示div
		onRefresh: function () {
			if(this.maxScrollY >-40){
				pullUpEl.style.display = 'none';
			}else{
				pullUpEl.style.display = 'block';
				if (pullDownEl.className.match('loading')) {
					pullDownEl.className = '';
					pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新';
				} else if (pullUpEl.className.match('loading')) {
					pullUpEl.className = '';
					pullUpEl.querySelector('.pullUpLabel').innerHTML = '加载更多';
				}
			}
		},
		//拖动，滚动位置判断
		onScrollMove: function () {
			if (this.y > 5 && !pullDownEl.className.match('flip')) {//判断是否向下拉超过5,问题：这个单位好像不是px
				pullDownEl.className = 'flip';
				pullDownEl.querySelector('.pullDownLabel').innerHTML = '放开刷新';
				this.minScrollY = 0;
			} else if (this.y < 5 && pullDownEl.className.match('flip')) {
				pullDownEl.className = '';
				pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新';
				this.minScrollY = -pullDownOffset;
			} else if (this.maxScrollY<0 && this.y < (this.maxScrollY - 5) && !pullUpEl.className.match('flip')) {
				pullUpEl.style.display = 'block';
				pullUpEl.querySelector("span").className = 'pullUpIcon';
				pullUpEl.className = 'flip';
				pullUpEl.querySelector('.pullUpLabel').innerHTML = '放开加载更多';
				this.maxScrollY = this.maxScrollY;
			} else if (this.maxScrollY<0 && this.y > (this.maxScrollY + 5) && pullUpEl.className.match('flip')) {
				pullUpEl.style.display = 'block';
				pullUpEl.querySelector("span").className = 'pullUpIcon';
				pullUpEl.className = '';
				pullUpEl.querySelector('.pullUpLabel').innerHTML = '加载更多';
				this.maxScrollY = pullUpOffset;
			}
		},
		onScrollEnd: function () {
			if (pullDownEl.className.match('flip')) {
				pullDownEl.className = 'loading';
				pullDownEl.querySelector('.pullDownLabel').innerHTML = '加截中...';				
				pullDownAction();	// Execute custom function (ajax call?)
			} else if (pullUpEl.className.match('flip')) {
				pullUpEl.className = 'loading';
				pullUpEl.querySelector('.pullUpLabel').innerHTML = '加截中...';
				pullUpAction();	// Execute custom function (ajax call?)
			}
		}
	});
	
	setTimeout(function () { document.getElementById('wrapper').style.left = '0'; }, 800);
}

///////////////////////////////////////////////////////////////////////////////////////////////////
