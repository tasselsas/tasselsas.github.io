function start(){
    $('.phaseOne').css({'display':'flex'});
    setTimeout(function(){ document.getElementById('timeline-intro').scrollIntoView(); }, 50);
}

var assets = 0;
var first = true;

function showInstruction(){
    $('#first').css({'display':'flex'});
    $('#first h3').addClass('load');
    setTimeout(function(){ $('#first').css({'display':'none'});}, 2800);
    setTimeout(function(){ $('#first h3').removeClass('load');}, 2000);
    first=false;
}

function increment(){
    assets+=1;
    if(assets>=30){
        $('body').addClass('loaded');
    }
}

function activateDonation(){
    $("#textone").addClass("load");
    setTimeout(function(){ $("#texttwo").addClass("load"); }, 1200)
    setTimeout(function(){ $("#donateButton").addClass("load"); }, 2200)
}

$( document ).ready(function() {
        $('.main').css('overflow-y', 'hidden');

        $('#backgroundVid').on('ended',function(){
            $('#backgroundVid').addClass('load');
            $('#typewriter1').addClass('load');
        });
        

        var links = document.getElementsByClassName('extLink');

        var mouseOver = function(){
            var shrink=this.getElementsByClassName('shrink')[0];
            var expand=this.getElementsByClassName('expand')[0];

            shrink.style.display = 'none';
            expand.style.display = 'inline';
        }

        var mouseOut = function(){
            var shrink=this.getElementsByClassName('shrink')[0];
            var expand=this.getElementsByClassName('expand')[0];

            shrink.style.display = 'inline';
            expand.style.display = 'none';
        }

        for (var i = 0; i < links.length; i++) {
            links[i].addEventListener('mouseover', mouseOver, false);
            links[i].addEventListener('mouseout', mouseOut, false);
        }
});

$( document ).ready(function() {
        
    var w = $(window).width();
    if(w<650){
        $('html').addClass('mobile');
    }
    

    const options = {
        rootMargin: '0px',
        threshold: 0.8
    }

    const galleryOptions = {
        rootMargin: '0px',
        threshold: 0
    }

    const gallery = document.querySelectorAll(".column");

    const appearGallery = new IntersectionObserver(function(entries, appearGallery){
        entries.forEach(entry => {
            if(!entry.isIntersecting){
                entry.target.classList.remove('appear');
            }
            else{
                entry.target.classList.add('appear');
                $( "#1" ).removeClass('active');
                $( "#2" ).removeClass('active');
                $( "#3" ).removeClass('active');
                $( "#4" ).addClass('active');
                $( "#5" ).removeClass('active');
                $( "#6" ).removeClass('active');
            }
        })
    }, galleryOptions);

    gallery.forEach(col =>{
        appearGallery.observe(col);
    })


    const faders = document.querySelectorAll(".fade-in");

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
        entries.forEach(entry => {
            if(!entry.isIntersecting){
                entry.target.classList.remove('appear');
                return;
            }
            else{
                entry.target.classList.add('appear');
                if(entry.target.id=='introText'){
                    $( "#1" ).addClass('active');
                    $( "#2" ).removeClass('active');
                    $( "#3" ).removeClass('active');
                    $( "#4" ).removeClass('active');
                    $( "#5" ).removeClass('active');
                    $( "#6" ).removeClass('active');
                }
                if(entry.target.id=='timelinetitle'){
                    $( "#1" ).removeClass('active');
                    $( "#2" ).addClass('active');
                    $( "#3" ).removeClass('active');
                    $( "#4" ).removeClass('active');
                    $( "#5" ).removeClass('active');
                    $( "#6" ).removeClass('active');
                }
                if(entry.target.id=='gallery-intro-fade'){
                    $( "#1" ).removeClass('active');
                    $( "#2" ).removeClass('active');
                    $( "#3" ).addClass('active');
                    $( "#4" ).removeClass('active');
                    $( "#5" ).removeClass('active');
                    $( "#5" ).removeClass('active');
                }
                if(entry.target.id=='teachers-fade'){
                    $( "#1" ).removeClass('active');
                    $( "#2" ).removeClass('active');
                    $( "#3" ).removeClass('active');
                    $( "#4" ).removeClass('active');
                    $( "#5" ).addClass('active');
                    $( "#6" ).removeClass('active');
                }
                if(entry.target.id=='donateContent'){
                    $('#sidebar h1').addClass('change');
                    $( "#1" ).addClass('change');
                    $( "#2" ).addClass('change');
                    $( "#3" ).addClass('change');
                    $( "#4" ).addClass('change');
                    $( "#5" ).addClass('change');

                    $( "#1" ).removeClass('active');
                    $( "#2" ).removeClass('active');
                    $( "#3" ).removeClass('active');
                    $( "#4" ).removeClass('active');
                    $( "#5" ).removeClass('active');
                    $( "#6" ).addClass('active');
                }
                else{
                    $('#sidebar h1').removeClass('change');
                    $( "#1" ).removeClass('change');
                    $( "#2" ).removeClass('change');
                    $( "#3" ).removeClass('change');
                    $( "#4" ).removeClass('change');
                    $( "#5" ).removeClass('change');
                }
            }
        })
    }, options)

    faders.forEach(fader =>{
        appearOnScroll.observe(fader);
    })
});