
loadingBg()
collapsible()
ripplesBg()
lightGallery()
galleryImg()    
dropdownShare()
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
    }
}

function dropdownShare(){
    $('.gallery-share').click(function(){
        $('.st-dropdown-share').css('display', 'block')
    })
    
}  

