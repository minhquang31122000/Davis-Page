
loadingBg()
collapsible()
ripplesBg()
lightGallery()
galleryImg()    
dropdownShare()
openfullscreen()
zoomGallery()
new WOW().init();
function collapsible(){
    $('.menu-toggle').on('click',function(){
        $(this).toggleClass('menu-toggle-active').siblings('.st-navbar-list').slideToggle()
    })
}
function ripplesBg(){

    $('.st-person').ripples({
        resolution:512,
        perturbance:0.04,
        dropRadius:20  
    })
}
function loadingBg(){
    $('.st-bg').each(function(){
        var src=$(this).attr('data-src');
        $(this).css({
            'background-image': 'url(' + src +')'
        })
    })
}

function galleryImg(){
    var listImgLarge=["./assets/img/portfolio/portfolio1_lg.jpg","./assets/img/portfolio/portfolio2_lg.jpg","./assets/img/portfolio/portfolio3_lg.jpg","./assets/img/portfolio/portfolio4_lg.jpg","./assets/img/portfolio/portfolio5_lg.jpg","./assets/img/portfolio/portfolio6_lg.jpg"]
    var portfolioEL =document.querySelectorAll('.st-portfolio-link')
    var galleryExit=document.querySelector('.gallery-exit')
    var btnGalleryNext=document.querySelector('.gallery-btn-next')
    var currentGalleryImg=document.querySelector('.gallery-img img')
    var galleryEL=document.querySelector('.gallery-container')
    var btnGalleryPrev=document.querySelector('.gallery-btn-prev')
    var currentIndexImg=0
    portfolioEL.forEach(function(el,index) {
        el.addEventListener('click',function(){
            currentIndexImg=index
            showGallery(index)
            currentGalleryImg.classList.add('animate__zoomIn')
        })
    })
    galleryExit.onclick =function(){
        galleryEL.classList.remove('show')
    }
    document.addEventListener('keydown',e=>{
        e.which==27?galleryEL.classList.remove('show'):''
    })    
    btnGalleryNext.onclick=function(){
        currentIndexImg++
        showGallery(currentIndexImg)
    }
    btnGalleryPrev.onclick=function(){
        currentIndexImg--
        showGallery(currentIndexImg)
    }
    function showGallery(index) {
        if(currentIndexImg>portfolioEL.length-1){
            currentIndexImg=0
        }
        else if(currentIndexImg<0){
            currentIndexImg=portfolioEL.length-1
        }
        currentGalleryImg.src=listImgLarge[currentIndexImg]
        galleryEL.classList.add('show') 
        document.querySelector('.img-counter-current').innerText=currentIndexImg+1
        document.querySelector('.img-counter-all').innerText=portfolioEL.length
        $('.gallery-download a').attr('href',`${listImgLarge[currentIndexImg]}`)
    }
}

function dropdownShare(){
    $('.gallery-share').click(function(){
        $('.st-dropdown-share').toggleClass('show')
    })
}

function openfullscreen(){
    var gallery=document.querySelector('.gallery-container')
    var iconScreen=document.querySelector('.gallery-fullscreen i')
    var currentClick=0
    $('.gallery-fullscreen').click(function(e){
       gallery.requestFullscreen?gallery.requestFullscreen():''
       $(iconScreen).addClass('fa-compress')
       $(iconScreen).removeClass('fa-expand')
        e.type==='click'?currentClick++:''
       if(currentClick%2==0){
            document.exitFullscreen?document.exitFullscreen():''
            $(iconScreen).removeClass('fa-compress')
            $(iconScreen).addClass('fa-expand')
       }
    })
}

function zoomGallery(){
    let galleryImg=document.querySelector('.gallery-img img')
    let galleryZoomIn=document.querySelector('.gallery-zoomIn')
    let currentSizeImg=1
    checkSizeImg()
    console.log(currentSizeImg)
    function checkSizeImg(){
        if (currentSizeImg<=1){
            $(galleryZoomIn).css({
                "pointer-events":"none",
                "opacity":"0.5"
            })
        }
        else if(currentSizeImg>1){
            $(galleryZoomIn).css({
                "pointer-events":"initial",
                "opacity":"1"
            })
        }
    }    
    $('.gallery-zoomOut').click(function(){
        currentSizeImg++
        console.log("test1:"+currentSizeImg)
        checkSizeImg()
        $(galleryImg).css({
            "transform":`scale3d(${currentSizeImg},${currentSizeImg},1)`
        })
    })
    $('.gallery-zoomIn').click(function(){
        currentSizeImg--
        console.log("test2:"+currentSizeImg)
        checkSizeImg()
        $(galleryImg).css({
            "transform":`scale3d(${currentSizeImg},${currentSizeImg},1)`
        })
    })
}