 
loadingBg()
collapsible()
ripplesBg()
lightGallery()
galleryImg()    
dropdownShare()
openfullscreen()
zoomGallery()
slickInit()
showSocialIcon()
checkForm()
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
    // console.log(currentSizeImg)
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
        // console.log("test1:"+currentSizeImg)
        checkSizeImg()
        $(galleryImg).css({
            "transform":`scale3d(${currentSizeImg},${currentSizeImg},1)`
        })
    })
    $('.gallery-zoomIn').click(function(){
        currentSizeImg--
        // console.log("test2:"+currentSizeImg)
        checkSizeImg()
        $(galleryImg).css({
            "transform":`scale3d(${currentSizeImg},${currentSizeImg},1)`
        })
    })
}

function slickInit(){
    $('.st-slider').each(function(){
        var $ts=$(this).find('.slick-container');
        var $slickActive=$(this).find('.slick-wrapper');
        var slidesPerView=$ts.attr('data-slides-per-view');  
        var lgSlidesScroll=parseInt($ts.attr('data-lg-slides-scroll'),10);
        var slidesScroll=parseInt($ts.attr('data-slides-scroll'),10);   
        if(slidesPerView=='responsive'){
            var slidesPerView=parseInt($ts.attr('data-add-slides'),10)
            var lgSildes=parseInt($ts.attr('data-lg-slides'),10)
            var mdSildes=parseInt($ts.attr('data-md-slides'),10)
            var smSildes=parseInt($ts.attr('data-sm-slides'),10)
            var xsSildes=parseInt($ts.attr('data-xs-slides'),10)
        }

        $slickActive.slick({
            arrows:false,
            infinite: true,
            autoplay:true,
            autoplaySpeed:3000,
            dots:true,
            slidesToShow: slidesPerView,
            slidesToScroll:lgSlidesScroll,
            responsive:[{
                breakpoint:1600,
                settings:{
                    slidesToShow:lgSildes
                    }
                
                },
                {
                    breakpoint:1200,
                    settings:{
                        slidesToShow:mdSildes
                    }
                },
                {
                    breakpoint:992,
                    settings:{
                        slidesToShow:smSildes,
                        slidesToScroll:slidesScroll
                    }
                },
                {
                    breakpoint:768,
                    settings:{
                        slidesToShow:xsSildes,
                        slidesToScroll:slidesScroll

                    }
                }
            ]
        })
    })
}
function showSocialIcon(){
    $('.st-social-link').hover(function(){
            $(this).addClass('active').siblings().removeClass('active')
            // $(this).css('border-color','#fec544').siblings().css('border-color','#3f4551')
        })
}
function checkForm(){
    var form=document.querySelector('form')
    var contactAlert=document.querySelector('.st-contact-alert')
    var userName=document.querySelector('#name')
    var userEmail=document.querySelector('#email')
    var userSub=document.querySelector('#subject')
    var userMsg=document.querySelector('#msg')
   
    // <strong>Warning!</strong> Please Enter Valid Email.
    form.addEventListener('submit',function(e) {
        e.preventDefault()
        let arrInput=[userName,userEmail,userSub,userMsg]
        if(checkEmpty(arrInput)){
            checkEmail(userEmail)
        }
    })

    function showSuccess(){
        contactAlert.classList.remove('show','error')
        contactAlert.classList.add('show','success')
        contactAlert.innerHTML='<strong>Success!</strong> Email has been sent successfully.'
    }
    function showError(messageError){
        contactAlert.classList.remove('show','success')
        contactAlert.classList.add('show','error')
        // console.log(messageError)
        contactAlert.innerHTML=messageError
    }
    function checkEmpty(listInput){
        let isCheckEmpty = true
            listInput.forEach(input=>{
                input.value=input.value.trim()
                if(!input.value){
                    showError('<strong>Warning!</strong> All fields are required.')
                    isCheckEmpty=false
                }
                else{
                    showSuccess()
                }
            })
            return isCheckEmpty
    }
    function checkEmail(input){
        const regexEmail = 
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(regexEmail.test(input.value.trim().toLowerCase())){
            showSuccess()
        }
        else{
            showError('<strong>Warning!</strong> Please Enter Valid Email.')
        }
    }
}
var pageHeight = 0;
var viewpoint=0
function findHighestNode(nodesList) {
    for (var i = nodesList.length - 1; i >= 0; i--) {
        if (nodesList[i].scrollHeight && nodesList[i].clientHeight) {
            var elHeight = Math.max(nodesList[i].scrollHeight, nodesList[i].clientHeight);
            pageHeight = Math.max(elHeight, pageHeight);
        }
        if (nodesList[i].childNodes.length) findHighestNode(nodesList[i].childNodes);
    }
    
}

findHighestNode(document.documentElement.childNodes);
document.addEventListener('scroll', function(e){
    // console.log([e])
     
})
// The entire page height is found
// console.log('Page height is', viewpoint);