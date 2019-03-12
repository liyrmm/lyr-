window.onload = function () {

// 北京移入移出效果
let bj=document.querySelector(".body-left-right")
let bjSlide=document.querySelector(".bjSlide")
bj.onmouseenter = function () {
    bjSlide.style.display = "block";
}
bj.onmouseleave = function () {
    bjSlide.style.display = "none";
}
    //我的京东移入移出效果
    let myjd = document.querySelector(".myjd");
    let loginSlide1 = document.querySelector(".loginSlide1");
    // console.log(myjd);
    // console.log(loginSlide1)
    myjd.onmouseenter = function () {
        loginSlide1.style.display = "block";
    }
    myjd.onmouseleave = function () {
        loginSlide1.style.display = "none";
    }

    //企业采购移入移出效果
    let company = document.querySelector(".company");
    let loginSlide2 = document.querySelector(".loginSlide2");
    company.onmouseenter = function () {
        loginSlide2.style.display = "block";
    }
    company.onmouseleave = function () {
        loginSlide2.style.display = "none";
    }

    // 客户服务移入移出效果
    let clientService = document.querySelector(".clientService");
    let loginSlide3 = document.querySelector(".loginSlide3");
    clientService.onmouseenter = function () {
        loginSlide3.style.display = "block";
    }
    clientService.onmouseleave = function () {
        loginSlide3.style.display = "none";
    }

    // 网站导航移入移出效果
    let website=document.querySelector(".website");
    let loginSlide4=document.querySelector(".loginSlide4");
    website.onmouseenter=function(){
        loginSlide4.style.display="block";
    }
    website.onmouseleave=function(){
        loginSlide4.style.display="none";
    }

    // 手机京东移入移出效果
    let mobile=document.querySelector(".mobile");
    let mobileItems=document.querySelector(".mobile-items");
    mobile.onmouseenter=function(){
        mobileItems.style.display="block";
    }
    mobile.onmouseleave=function(){
        mobileItems.style.display="none";
    }

    // 轮播图列表移入移出效果
    let bannerListItem=document.querySelectorAll(".mainbody-left-list-item")
    let bannerSlide=document.querySelectorAll(".bannerSlide")
    // console.dir(bannerListItem)
    // console.dir(bannerSlide)
    bannerListItem.forEach(function(v,i){
        v.onmouseenter=function(){
            bannerSlide[i].style.display="block"
        }
        v.onmouseleave=function(){
            bannerSlide[i].style.display="none"
        }
    })
}
