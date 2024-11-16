import React, { useEffect } from "react";
import $ from "jquery";
import "jquery.easing"; // Import jQuery Easing plugin

const BackToTopButton = () => {
  useEffect(() => {
    // Back to top button scroll functionality
    const handleScroll = () => {
      if ($(window).scrollTop() > 200) {
        $(".back-to-top").fadeIn("slow");
      } else {
        $(".back-to-top").fadeOut("slow");
      }
    };

    $(window).on("scroll", handleScroll);

    $(".back-to-top").click(function (e) {
      e.preventDefault(); // Prevent default behavior of anchor tag
      $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
      return false;
    });

    // Cleanup event listeners on component unmount
    return () => {
      $(window).off("scroll", handleScroll);
    };
  }, []);

  return (
    <a href="#" className="back-to-top">
      <i className="fa fa-angle-double-up"></i>
    </a>
  );
};

export default BackToTopButton;
