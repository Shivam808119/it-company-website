"use strict";

        $(function () {
            $(".menu").click(function () {
                $("nav").slideToggle();
                $(this).toggleClass("active");

            });

            $(".works a.vertical").click(function(e){
                e.preventDefault();
                $(".works a.vertical").removeClass("active");
                $(this).addClass("active");
                $(".works .closeing").fadeOut(0);
                $(this).next().fadeIn()
            })

        });