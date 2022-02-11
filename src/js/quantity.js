window.onload = function(){
    let add = document.querySelector('.addition');
    let reduce = document.querySelector('.subtraction');
    let show = document.querySelector('#show');
    let xian = document.querySelector('.xiangou');
    let way = document.querySelector('.way');
    let wayf = document.querySelector('.way-father');
    let move = document.querySelector('.move1');



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
};

