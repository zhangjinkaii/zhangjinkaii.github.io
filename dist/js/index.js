window.onload=function(){setTimeout(function(){$(".ace").css({left:"0px",transition:"all 1s ease"})},500),$(".ac0").mouseover(function(){$(this).siblings(".ace").css({left:"0px",transition:"all 0.5s ease"})}),$(".ac1").mouseover(function(){$(this).siblings(".ace").css({left:"100px",transition:"all 0.5s ease"})}),$(".ac2").mouseover(function(){$(this).siblings(".ace").css({left:"200px",transition:"all 0.5s ease"})}),$(".ac3").mouseover(function(){$(this).siblings(".ace").css({left:"300px",transition:"all 0.5s ease"})}),$(".ac4").mouseover(function(){$(this).siblings(".ace").css({left:"400px",transition:"all 0.5s ease"})}),$("li").mouseout(function(){$(this).siblings(".ace").css({left:"0px",transition:"all 1s ease"})}),$(".rng a").click(function(){$(this).css("background","transparent")})};