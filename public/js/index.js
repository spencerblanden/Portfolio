$(document).ready(function () {
    $('#firstcard').click(function() {
        $('.found').addClass('missing');
        $('#secondcard').addClass('hoverable')
});
    
    
    $('#secondcard').click(function(){
        if($('.found').hasClass('missing')){
            $('.found2').addClass('missing');
            $('#thirdcard').addClass('hoverable');
        }
    })

    $('#thirdcard').click(function() {
        console.log('it worked')
        if($('.found2').hasClass('missing')){
        $('.found').removeClass('missing');
        $('.found2').removeClass('missing');
        

        }
    },
    function(){

    })
    var elementSelected = null;
    var typeSelected = false;
    
    $(document).on('click', '.list-image > img', function(){
      $('.list-image > img').each(function(){
        $(this).removeClass('active');
      })
      $(this).addClass('active');
      elementSelected = $(this);
      typeSelected = false;
    });

    $('#choiceA').click(function(){
        $('.port-image').replaceWith('<img class="port-image" src="/polo_spencer.jpg" alt="1" />')
        $('.brand-logo').replaceWith("<a href='/' class='left brand-logo name' id='name'>Spencer</a>")
        $('.port-text').replaceWith(`<div class='port-text'>
                                    <h4>Hi, nice to meet you!</h4>
                                    <h5>I am a software engineer with 6 years of experience leading in the nonprofit sector and a penchant for problem solving. I bring a unique purposeful perspective to any team. My extensive background of soft skills combined with my software engineering knowledge allows me to bridge the gap between a human focused approach and utilizing the most up-to-date technology as a full stack developer. At my core, I care about doing a good job and doing it the right way.</h5>
                                    </div>`)
    })
    $('#choiceB').click(function(){
        $('.port-image').replaceWith('<img class="port-image" src="/familyspencer.jpeg" alt="1" />')
        $('.brand-logo').replaceWith("<a href='/' class='left brand-logo name' id='name'>Family Spencer</a>")
        $('.port-text').replaceWith(`<div class='port-text'>
                                    <h4>That's my family!</h4>
                                    <h5>That little one was 2 weeks old in this photo. Her name is Birdie. Holding her is my beautiful wife, Whitney. Oh and that big dog I am trying to hold his collar so he will stay still for a good picture is Watson. He is wild, much more wild than our other dog, Leo. Now you've met the whole crew.</h5>
                                    </div>`)
    })
    $('#choiceC').click(function(){
        $('.port-image').replaceWith('<img class="port-image" src="/croppedcouple.jpg" alt="1" />')
        $('.brand-logo').replaceWith("<a href='/' class='left brand-logo name' id='name'>Funny Spencer?</a>")
        $('.port-text').replaceWith(`<div class='port-text'>
                                    <h4>Nice to meet, me!</h4>
                                    <h5>^ That is an Office joke. Hopefully you've seen it or that joke is going to not go over well, which to be fair, is par for the course for me. If only I had a photo of me golfing for this one. That would have been a great pun. Too bad I don't golf.</h5>
                                    </div>`)
    })

    
  
})

