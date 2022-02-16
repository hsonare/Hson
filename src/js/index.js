$(function(){
    $.ajax({
        url: '../interface/items.php',
        type: 'get',
        dataType: 'json'
    }).then(res=>{
        // console.log(res);
        // res.forEach(element => {
        // console.log(element);
        // let pic = JSON.parse(element.picture);
        // console.log(pic[0].src);
        // console.log(('./' + pic[0].src));
        // $('#title').html(element.title);
        // $('#img1').html('./' + pic[0].src);
        // });


        let template = '';
        res.forEach(elm => {
      let pic = JSON.parse(elm.picture);
      // console.log(pic);
      template += `<div>
                        <a href="./item.html?id=${elm.id}">
                            <img src="./${pic[0].src}" alt="">
                            <p id="title">${elm.title}</p>
                            <span>${elm.price}</span>
                        </a>
                    </div>`;
    });

    $('.supermarket-commodity').html(template);
    }).catch(xhr=>{
        console.log(xhr.status);
    });
});