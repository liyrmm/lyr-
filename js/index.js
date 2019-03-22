window.onload = function () {

    // 北京移入移出效果
    let bj = document.querySelector(".body-left-right")
    let bjSlide = document.querySelector(".bjSlide")
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
    let website = document.querySelector(".website");
    let loginSlide4 = document.querySelector(".loginSlide4");
    website.onmouseenter = function () {
        loginSlide4.style.display = "block";
    }
    website.onmouseleave = function () {
        loginSlide4.style.display = "none";
    }

    // 手机京东移入移出效果
    let mobile = document.querySelector(".mobile");
    let mobileItems = document.querySelector(".mobile-items");
    mobile.onmouseenter = function () {
        mobileItems.style.display = "block";
    }
    mobile.onmouseleave = function () {
        mobileItems.style.display = "none";
    }

    // 轮播图列表移入移出效果
    let bannerListItem = document.querySelectorAll(".mainbody-left-list-item")
    let bannerSlide = document.querySelectorAll(".bannerSlide")
    // console.dir(bannerListItem)
    // console.dir(bannerSlide)
    bannerListItem.forEach(function (v, i) {
        v.onmouseenter = function () {
            bannerSlide[i].style.display = "block"
        }
        v.onmouseleave = function () {
            bannerSlide[i].style.display = "none"
        }
    })

    // 轮播图轮播
    let index = 0;
    let pages = document.querySelectorAll(".mainbody-body2-img a")
    let banner = document.querySelector(".mainbody-body2-img")
    let pre = document.querySelector(".mainbody-body2-button-left")
    let next = document.querySelector(".mainbody-body2-button-right")
    let dots = document.querySelectorAll(".mainbody-body2-dots .mainbody-body2-dot")
    banner.onmouseenter = function () {
        clearInterval(t)
    }
    banner.onmouseleave = function () {
        t = setInterval(run, 3000)
    }
    function run(status = "next") {
        if (status == "next") {
            index += 1
        } else if (status = "pre") {
            index -= 1
        }
        if (index > 7) {
            index = 0;
        }
        if (index < 0) {
            index = 7
        }
        pages.forEach(function (item, i) {
            item.classList.remove("active")
        })
        pages[index].classList.add("active")

        dots.forEach(function (item, i) {
            item.classList.remove("active")
        })
        dots[index].classList.add("active")
    }

    let t = setInterval(run, 3000)
    next.onclick = function () {
        run("next")
    }
    pre.onclick = function () {
        run("pre")
    }
    // 轮播点点击效果
    dots.forEach(function (item, i) {
        item.onmouseenter = function () {                     //item就是获取到的div
            dots.forEach(function (item) {
                item.classList.remove("active")
            })
            item.classList.add("active")
            pages.forEach(function (item) {
                item.classList.remove("active")
            })
            pages[i].classList.add("active")
            index=i;
        }
    })



    // 京东秒杀右边无缝轮播
    let index1 = 0
    let page = document.querySelectorAll(".sk-right-imgs a")
    let bigpage = document.querySelector(".sk-right")
    let dot = document.querySelectorAll(".sk-right-dot")
    let prev = 0;
    let now = 0;

    page.forEach(function (item, i) {
        if (i == 0) {
            return;
        }
        item.style.left = "180px";
    })
    // 切换
    function run1(status = 'next') {
        if (status == "next") {
            now += 1;
            index1 += 1

            if (now > 1) {
                now = 0;
            }
            if (index1 > 1) {
                index1 = 0;
            }
            page[now].style.left = '180px';
            animate(page[now], { 'left': 0 });
            animate(page[prev], { 'left': -180 });
        } else if (status == "pre") {
            now -= 1;
            if (now < 0) {
                now = 1;
            }
            page[now].style.left = '-180px';
            animate(page[now], { 'left': 0 });
            animate(page[prev], { 'left': 180 });
        }
        prev = now;
        dot.forEach(function (item, i) {
            item.classList.remove("active")
        })
        dot[now].classList.add("active")
    }

    let t1 = setInterval(run1, 3000);
    // 移入停止
    bigpage.onmouseenter = function () {
        clearInterval(t1)
    }
    bigpage.onmouseleave = function () {
        t1 = setInterval(run1, 3000)
    }
    // 轮播点点击效果
    dot.forEach(function (item, i) {
        item.onmouseenter = function () {
            if(i===now){
                return;
            }
            if (i > now) {
                page[i].style.left = '180px';
                animate(page[i], { 'left': 0 });
                animate(page[prev], { 'left': -180 });
                dot.forEach(function (item) {
                    item.classList.remove("active")
                })
                dot[i].classList.add("active")
                prev = i;
                now = i;
            } else if(i<now){
                page[i].style.left = '-180px';
                animate(page[i], { 'left': 0 });
                animate(page[prev], { 'left': 180 });
                dot.forEach(function (item) {
                    item.classList.remove("active")
                })
                dot[i].classList.add("active")
                prev = i;
                now = i;
            }
        }
    })


    // 会买专辑无缝轮播
    let index2 = 0
    let page2 = document.querySelectorAll(".dailyold-bds .dailyold-bd")
    let bigpage2 = document.querySelector(".dailyold-bds")
    let dot2 = document.querySelectorAll(".core-dailyold .special-dots .slider-dotr")
    let prev2 = 0;
    let now2 = 0;
    let pre2 = document.querySelector(".core-dailyold .core-top-body .butl")
    let next2 = document.querySelector(".core-dailyold .core-top-body .butr")

    page2.forEach(function (item, i) {
        if (i == 0) {
            return;
        }
        item.style.left = "350px";
    })
    // 切换
    function run2(status = 'next') {
        if (status == "next") {
            now2 += 1;
            index2 += 1
            if (now2 > 2) {
                now2 = 0;
            }
            if (index2 > 2) {
                index2 = 0;
            }
            page2[now2].style.left = '350px';
            animate(page2[now2], { 'left': 0 });
            animate(page2[prev2], { 'left': -350 });
        } else if (status == "pre") {
            now2 -= 1;
            if (now2 < 0) {
                now2 = 2;
            }
            page2[now2].style.left = '-350px';
            animate(page2[now2], { 'left': 0 });
            animate(page2[prev2], { 'left': 350 });
        }
        prev2 = now2;
        dot2.forEach(function (item, i) {
            item.classList.remove("active")
        })
        dot2[now2].classList.add("active")
    }

    let t2 = setInterval(run2, 3000);

    // 移入停止
    bigpage2.onmouseenter = function () {
        clearInterval(t2)
    }
    bigpage2.onmouseleave = function () {
        t2 = setInterval(run2, 3000)
    }
    pre2.onclick = function () {
        run2("pre")
    }
    next2.onclick = function () {
        run2()
    }
    // 轮播点点击效果
    // 轮播点点击事件
    dot2.forEach(function (item, i) {
        item.onmouseenter = function () {
            if(i===now2){
                return;
            }
            if (i > now2) {
                page2[i].style.left = '350px';
                animate(page2[i], { 'left': 0 });
                animate(page2[prev2], { 'left': -350 });
                dot2.forEach(function (item) {
                    item.classList.remove("active")
                })
                dot2[i].classList.add("active")
                prev2 = i;
                now2 = i;
            } else if(i<now2){
                page2[i].style.left = '-350px';
                animate(page2[i], { 'left': 0 });
                animate(page2[prev2], { 'left': 350 });
                dot2.forEach(function (item) {
                    item.classList.remove("active")
                })
                dot2[i].classList.add("active")
                prev2 = i;
                now2 = i;
            }
        }
    })


    // 觅me无缝轮播
    let index3 = 0
    let page3 = document.querySelectorAll(".mimebds .dailyold-bd")
    let bigpage3 = document.querySelector(".mimebds")
    let dot3 = document.querySelectorAll(".core-top .special-dots3 .slider-dotr")
    let prev3 = 0;
    let now3 = 0;
    let pre3 = document.querySelector(".core-top .core-top-body .butl")
    let next3 = document.querySelector(".core-top .core-top-body .butr")

    page3.forEach(function (item, i) {
        if (i == 0) {
            return;
        }
        item.style.left = "350px";
    })
    // 切换
    function run3(status = 'next') {
        if (status == "next") {
            now3 += 1;
            index3 += 1
            if (now3 > 1) {
                now3 = 0;
            }
            if (index3 > 1) {
                index3 = 0;
            }
            page3[now3].style.left = '350px';
            animate(page3[now3], { 'left': 0 });
            animate(page3[prev3], { 'left': -350 });
        } else if (status == "pre") {
            now3 -= 1;
            if (now3 < 0) {
                now3 = 1;
            }
            page3[now3].style.left = '-350px';
            animate(page3[now3], { 'left': 0 });
            animate(page3[prev3], { 'left': 350 });
        }
        prev3 = now3;
        dot3.forEach(function (item, i) {
            item.classList.remove("active")
        })
        dot3[now3].classList.add("active")
    }

    let t3 = setInterval(run3, 3000);

    // 移入停止
    bigpage3.onmouseenter = function () {
        clearInterval(t3)
    }
    bigpage3.onmouseleave = function () {
        t3 = setInterval(run3, 3000)
    }
    pre3.onclick = function () {
        run3("pre")
    }
    next3.onclick = function () {
        run3()
    }
    // 轮播点点击效果
    dot3.forEach(function (item, i) {
        item.onmouseenter = function () {
            if(i===now3){
                return;
            }
            if (i > now3) {
                page3[i].style.left = '350px';
                animate(page3[i], { 'left': 0 });
                animate(page3[prev3], { 'left': -350 });
                dot3.forEach(function (item) {
                    item.classList.remove("active")
                })
                dot3[i].classList.add("active")
                prev3 = i;
                now3 = i;
            } else if(i<now3){
                page3[i].style.left = '-350px';
                animate(page3[i], { 'left': 0 });
                animate(page3[prev3], { 'left': 350 });
                dot3.forEach(function (item) {
                    item.classList.remove("active")
                })
                dot3[i].classList.add("active")
                prev3 = i;
                now3 = i;
            }
        }
    })



    // 领券中心轮播点移入移出效果
    let page4 = document.querySelectorAll(".core-last .dailyold-bd")
    let dot4 = document.querySelectorAll(".special-dots4 .slider-dotr")
    let prev4 = 0;
    let now4 = 0;
    page4.forEach(function (item, i) {
        if (i == 0) {
            return;
        }
        item.style.left = "350px";
    })
    dot4.forEach(function (item, i) {
        item.classList.remove("active")
    })
    dot4[now4].classList.add("active")
    // 轮播点点击效果
    dot4.forEach(function (item, i) {
        item.onmouseenter = function () {
            if(i===now4){
                return;
            }
            if (i > now4) {
                page4[i].style.left = '350px';
                animate(page4[i], { 'left': 0 });
                animate(page4[prev4], { 'left': -350 });
                dot4.forEach(function (item) {
                    item.classList.remove("active")
                })
                dot4[i].classList.add("active")
                prev4 = i;
                now4 = i;
            } else if(i<now4){
                page4[i].style.left = '-350px';
                animate(page4[i], { 'left': 0 });
                animate(page4[prev4], { 'left': 350 });
                dot4.forEach(function (item) {
                    item.classList.remove("active")
                })
                dot4[i].classList.add("active")
                prev4 = i;
                now4 = i;
            }
        }
    })



    // 排行榜轮播点移入移出效果
    let page5 = document.querySelectorAll(".milk-bd")
    let dot5 = document.querySelectorAll(".special-dots5 .slider-dotr")
    let prev5 = 0;
    let now5 = 0;
    page5.forEach(function (item, i) {
        if (i == 0) {
            return;
        }
        item.style.left = "350px";
    })
    dot5.forEach(function (item, i) {
        item.classList.remove("active")
    })
    dot5[now5].classList.add("active")
    // 轮播点点击效果
    dot5.forEach(function (item, i) {
        item.onmouseenter = function () {
            if(i===now5){
                return;
            }
            if (i > now5) {
                page5[i].style.left = '350px';
                animate(page5[i], { 'left': 0 });
                animate(page5[prev5], { 'left': -350 });
                dot5.forEach(function (item) {
                    item.classList.remove("active")
                })
                dot5[i].classList.add("active")
                prev5 = i;
                now5 = i;
            } else if(i<now5){
                page5[i].style.left = '-350px';
                animate(page5[i], { 'left': 0 });
                animate(page5[prev5], { 'left': 350 });
                dot5.forEach(function (item) {
                    item.classList.remove("active")
                })
                dot5[i].classList.add("active")
                prev5 = i;
                now5 = i;
            }
        }
    })
// 闪购平移轮播
let pagem = document.querySelectorAll(".sk-list-items")
let prem = document.querySelector(".seckill-body-list .sk-buttonl") 
let nextm = document.querySelector(".seckill-body-list .sk-buttonr") 
let prevm = 0;
let nowm = 0;
pagem.forEach(function(item,i){
    if(i == 0){
        return;
    }
    item.style.left = "800px";
})
function runm(status = "next"){
    if(status == "next"){
        nowm += 1;
        if(nowm>2){
            nowm = 0;
        }
        pagem[nowm].style.left = '800px';
        animate(pagem[nowm],{'left':0});
        animate(pagem[prevm],{'left':-800});
    }else if(status == "pre"){
        nowm -= 1;
        if(nowm<0){
            nowm = 2;
        }
        pagem[nowm].style.left = '-800px';
        animate(pagem[nowm],{'left':0});
        animate(pagem[prevm],{'left':800});
    }
    prevm = nowm;
}
// 箭头
prem.onclick = function(){
    runm("pre")
}
nextm.onclick = function(){
    runm()
}

    // 特色推荐轮播
    let pag = document.querySelectorAll(".special .special-box .special-bd-slider")
    let banners = document.querySelector(".special")
    let dotl = document.querySelectorAll(".special .special-dots .slider-dotr")
    let sprev = document.querySelector(".special .control-prev")
    let snext = document.querySelector(".special .control-next")
    let prevs = 0;
    let nows = 0;
    pag.forEach(function(item,i){
        if(i == 0){
            return;
        }
        item.style.left = "1190px";
    })
    // 切换
    function run4(status = 'next'){
        if(status == "next"){
            nows += 1;
            if(nows>3){
                nows = 0;
            }
            pag[nows].style.left = '1190px';
            animate(pag[nows],{'left':0});
            animate(pag[prevs],{'left':-1190});
            dotl.forEach(function(item){
                item.classList.remove("sdot-active")
            })
            dotl[nows].classList.add("sdot-active")
        }else if(status == "pre"){
            nows -= 1;
            if(nows<0){
                nows = 3;
            }
            pag[nows].style.left = '-1190px';
            animate(pag[nows],{'left':0});
            animate(pag[prevs],{'left':1190});
            dotl.forEach(function(item){
                item.classList.remove("sdot-active")
            })
            dotl[nows].classList.add("sdot-active")
        }
        prevs = nows;
    }
    let s = setInterval(run4,4000);
    // 左右箭头
    sprev.onclick = function(){
        run4("pre")
    }
    snext.onclick = function(){
        run4()
    }
    // 移入停止
    banners.onmouseenter = function(){
        clearInterval(s)
    }
    banners.onmouseleave = function(){
        s = setInterval(run4,4000)
    }
    // 轮播点点击事件
    dotl.forEach(function(item,i){
        item.onmouseenter = function(){
            if(i===nows){
                return;
            }
            if(i>nows){
                pag[i].style.left = '1190px';
                animate(pag[i],{'left':0});
                animate(pag[prevs],{'left':-1190});
                dotl.forEach(function(item){
                    item.classList.remove("sdot-active")
                })
                dotl[i].classList.add("sdot-active")
                prevs = i;
                nows = i;
            }else if(i<nows){
                pag[i].style.left = '-1190px';
                animate(pag[i],{'left':0});
                animate(pag[prevs],{'left':1190});
                dotl.forEach(function(item){
                    item.classList.remove("sdot-active")
                })
                dotl[i].classList.add("sdot-active")
                prevs = i;
                nows = i;
            }
        }
    })


}
