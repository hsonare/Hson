window.onload = function(){
    let add = document.querySelector('.addition');
    let reduce = document.querySelector('.subtraction');
    let show = document.querySelector('#show');
    let xian = document.querySelector('.xiangou');
    let way = document.querySelector('.way');
    let wayf = document.querySelector('.way-father');
    let move = document.querySelector('.move1');
    let act = document.querySelector('.act');
    let li = act.querySelectorAll('li');
    let content = document.querySelector('.goodcontent');
    let evaluation = document.querySelector('.goodEvaluation');
    let aftersales = document.querySelector('.goodAftersales');
    var toggle = document.querySelectorAll('.toggle');


    //购物车加减
//除了数字意外的键入输入框变成数字
    show.oninput = function(){
        if (isNaN(show.value)) {
                show.value = 1;
             };
             if (show.value > 5) {
                 xian.style.display = 'block'
             };
             if (show.value <= 5) {
                    xian.style.display = 'none'
                };
    };
    //按上数字加一
    add.onclick = function(){
        show.value ++ ;
        if (show.value > 5) {
            xian.style.display = 'block'
        };
        if (show.value <= 5) {
               xian.style.display = 'none'
           };
    };
    //按下数字减一
    reduce.onclick = function(){
        show.value--;
        if(show.value <= 1){
            show.value = 1
        };
        if (show.value > 5) {
            xian.style.display = 'block'
        };
        if (show.value <= 5) {
               xian.style.display = 'none'
           };
    };


    //支付方式点击效果

    way.onclick = function(){
        if (getComputedStyle(wayf).display == 'none'){
            wayf.style.display = 'block';
            move.style.transform = 'rotate(90deg)';
        }else if(getComputedStyle(wayf).display == 'block'){
            wayf.style.display = 'none';
            move.style.transform = 'rotate(0deg)';
        }
    }




    //商品详情处点击效果
    li.forEach(function(val){
        // console.log(val);
        val.onclick = function(){
            for(let i = 0;i < act.children.length ; i++){
                act.children[i].className = '';
            }
            this.className = 'active';
            // console.log(toggle.children);
            toggle.forEach(va=>{
                console.log(va.children[1,2]);
                if(this == li[0]){
                    va.children[1].style.display = 'block';
                    va.children[2].style.display = 'block';
                    va.children[0].style.display = 'block';
                }else if(this == li[1]){
                    va.children[2].style.display = 'none';
                    va.children[0].style.display = 'none';
                    va.children[1].style.display = 'block';
                }else if(this == li[2]){
                    va.children[0].style.display = 'none';
                    va.children[1].style.display = 'none';
                    va.children[2].style.display = 'block';
                }
            });
            
            
        }
    });
    // console.log(toggle);
    // toggle.forEach(function(va){
    //             console.log(va);
    //         })
    
};

