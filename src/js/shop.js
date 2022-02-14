window.onload = function(){
    let baby = document.querySelector('.baby');
    let baby1 = baby.querySelectorAll('.baby1');

    // 上顶部切换
    for(let i = 0 ; i < baby1.length ; i++){
        baby1[i].onclick = function(){
            for(let i = 0 ; i < baby1.length ; i++){
                baby1[i].className = 'active2';
            }
            this.className = 'active1';
        }
    }




    // 焦点事件
    let input = document.querySelector('.input-che');
    let icon = document.querySelector('.icon-fangdajing');

    input.onfocus = function(){
        icon.style.display = 'none';

        input.onblur = function(){
            icon.style.display = 'block';
        }
    }
 


    //移动条子
    let sst = document.querySelector('.small-string');
    let ssf = document.querySelector('.sst-father');
    // let sss = ssf.querySelectorAll('.sst-father');

    console.log(ssf.children);
    for(let i = 0 ; i < ssf.children.length ; i++){
        console.log(ssf.children[2]);
        console.log(ssf.offsetWidth);

        ssf.children[1].onmouseover = function(){
            sst.style.width = '142px'
            movecs(sst,130)
            ssf.children[1].onmouseout = function(){
                sst.style.width = '130px'
                movecs(sst,0)
            }
        }
        ssf.children[2].onmouseover = function(){
            sst.style.width = '135px'
            movecs(sst,272)
            ssf.children[2].onmouseout = function(){
                sst.style.width = '130px'
                movecs(sst,0)
            }
        }
        
    //变速移动函数封装
    function movecs(ele,aim){
    //清除定时器
    clearInterval(ele.changespead);
    ele.changespead=setInterval(function() {
    //获取当前位置
    var now = ele.offsetLeft;//设置每次移动的单位距离
    var step = (aim - now)/ 10;
    step = step > 0 ?Math.ceil(step) : Math.floor(step);
    //当前位置改变
    now += step;
    if ( Math.abs(now - aim) > Math.abs(step)){
    ele.style.left = now + 'px';
    }
    else {
    ele.style.left = aim + 'px';
    }
    },20);
    
    }}

}