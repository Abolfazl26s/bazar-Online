$(function () {
  // ==========online chat========
  !(function () {
    var i = "6RiRma",
      a = window,
      d = document;
    function g() {
      var g = d.createElement("script"),
        s = "https://www.goftino.com/widget/" + i,
        l = localStorage.getItem("goftino_" + i);
      (g.async = !0), (g.src = l ? s + "?o=" + l : s);
      d.getElementsByTagName("head")[0].appendChild(g);
    }
    "complete" === d.readyState
      ? g()
      : a.attachEvent
      ? a.attachEvent("onload", g)
      : a.addEventListener("load", g, !1);
  })();

  //   ========collape===============
  // ================searchPage collapsed show===========
  $(window).on("load", () => {
    let widthWindow = $(document).innerWidth();
    if (widthWindow > 768) {
      $("[data-collapse='show']").removeClass("collapse");
      $("[data-collapse='show']").addClass("collapsed");
      $("[data-collapse='show']").addClass("show");
      $(".widget [data-toggle='collapse']").find("i").addClass("rotateIcon");
    } else {
      $("[data-collapse='show']").addClass("collapse");
      $("[data-collapse='show']").removeClass("collapsed");
      $("[data-collapse='show']").removeClass("show");
      $(".widget [data-toggle='collapse']").find("i").removeClass("rotateIcon");
    }
  });

  $("[data-toggle='collapse']").click(function (e) {
    e.preventDefault();
    $(this).find("i").toggleClass("rotateIcon");
  });

  $(window).resize(function () {
    let widthWindow = $(document).innerWidth();
    if (widthWindow > 768) {
      $("[data-collapse='show']").removeClass("collapse");
      $("[data-collapse='show']").addClass("collapsed");
      $("[data-collapse='show']").addClass("show");
      $(".widget [data-toggle='collapse']").find("i").addClass("rotateIcon");
    } else {
      $("[data-collapse='show']").addClass("collapse");
      $("[data-collapse='show']").removeClass("collapsed");
      $("[data-collapse='show']").removeClass("show");
      $(".widget [data-toggle='collapse']").find("i").removeClass("rotateIcon");
    }
  });

  //    =============== filter price =============
  jQuery(document).ready(function () {
    let minPrice = parseFloat($(".to-price").text());
    jQuery("#slider-range").slider({
      range: true,
      min: -minPrice,
      max: 0,
      values: [-minPrice, 0],
      slide: function (event, ui) {
        jQuery(".from.range").val(-ui.values[1]);
        jQuery(".to.range").val(-ui.values[0]);
        jQuery(".from-price").text(-ui.values[1]);
        jQuery(".to-price").text(-ui.values[0]);
      },
      create: function (event, ui) {
        jQuery(".from.range").val(-jQuery(this).slider("values", 1));
        jQuery(".to.range").val(-jQuery(this).slider("values", 0));
        jQuery(".from-price").text(-jQuery(this).slider("values", 1));
        jQuery(".to-price").text(-jQuery(this).slider("values", 0));
      },
    });
  });

  // ============ sideBar_Sticky =============
  
});
