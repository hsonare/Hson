$(function(){

    let id = location.search.split('=')[1];

    $.ajax({
        url: '../interface/items.php',
        type: 'get',
        // date:'id = id',
        date:{ id },
        dataType: 'json'
    }).then(res=>{
        console.log(res);
        let res1 = res.find(function(val){
            return val.id == id
        });
        console.log(res1);
        
        let pic = JSON.parse(res1.picture);
        $('#title').html(res1.title);
        $('#price').html(res1.price);
        $('#num').html(res1.num);

        $('#img1').html(`<img id="img1" src="./${pic[0].src}"/>`);
        $('#img2').html(`<img id="img1" src="./${pic[1].src}"/>`);
        $('#img3').html(`<img id="img1" src="./${pic[2].src}"/>`);
        $('#img4').html(`<img id="img1" src="./${pic[3].src}"/>`);
        
        $('#detall').html(res1.detall);
        console.log(res1.detall);

        let fangdajing = `<script src="./js/jquery.放大镜.js"></script> 
        <script type="text/javascript">
              $("#exzoom").exzoom({
                  autoPlay: false,
               });//方法调用，务必在加载完后执行 
          </script>`
        $('#fangdajing').html(fangdajing);
        console.log(pic[0].src);
    }).catch(xhr=>{
        console.log(xhr.status);

        let fangdajing = `<script src="./js/jquery.放大镜.js"></script> 
        <script type="text/javascript">
              $("#exzoom").exzoom({
                  autoPlay: false,
               });//方法调用，务必在加载完后执行 
          </script>`
        $('#fangdajing').html(fangdajing);
    })
})
