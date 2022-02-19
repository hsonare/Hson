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

// --------

    // 在页面渲染完毕后选择元素进行事件添加
    $('.add-shopping').on('click', function () {
        console.log(123);
        addItem(res1.id, $('#show').val());
      });

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


// 向cookie中添加一项内容
// cookie存储的是 键值对 数据类型是 字符串

// 在cookie中存储JSON字符串 是最好的方式
// shop=[{"id":"100001","num":3},{"id":"100002","num":1}]
function addItem(id, num) {
    let product = { id, num };
  
    let shop = cookie.get('shop'); // 从cookie中读取shop
    // 在cookie中读取到的数据是字符串类型
  console.log(shop);
    // 判断当前购物车是否有数据
    if (shop) {
      // 购物车已有数据
      shop = JSON.parse(shop);
  
      // 判断当前商品在购物车中是否已经存在 如果存在则修改数量 不存在则添加
      if (shop.some(el => el.id == id)) {
        // 判断出商品存在 需要修改这个商品id对应的num数据
        let index = shop.findIndex(elm => elm.id == id); // 找到当前商品的索引
        let count = parseInt(shop[index].num); // 当前该商品的数量
        count += parseInt(num);
        shop[index].num = count;
      } else {
        shop.push(product);
      }
  
    } else {
      shop = [];
      shop.push(product);
    }
  
    cookie.set('shop', JSON.stringify(shop));
  }