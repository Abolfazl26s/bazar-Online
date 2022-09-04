$(function () {
  $(".chatPopUp").click(function (e) {
    e.preventDefault();

    $(".chatBox").toggleClass("active");
    $(".conv-form-wrapper").convform({ selectInputStyle: "disable" });
  });
});
