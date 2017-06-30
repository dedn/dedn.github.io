$(document).bind("mobileinit", function () {
  $.mobile.defaultPageTransition = pop;
});
//navigation
$(document).ready(function () {
  $("#left-panel2 a").click(function () {
    var elementClick = $(this).attr("href");
    var elementLink = elementClick.substr(1);
    var element = 'a[title=' + '"' + elementLink + '"' + ']';
    $('#pdfviewesection').scrollTo(element, {duration: 'slow', offsetTop: '60'});
    return false;
  });
  $("#left-panel1 a").click(function () {
    var elementClick = $(this).attr("href");
    var elementLink = elementClick.substr(1);
    var element = 'a[title=' + '"' + elementLink + '"' + ']';
    $.mobile.changePage("#page_2", {transition: "pop", changeHash: true});
    $(document).on("pageshow", "#page_2", function () {
      $('#pdfviewesection').scrollTo(element, {duration: 'slow', offsetTop: '60'});
    });
    return false;
  });
});


//autocompleate searche
$(document).ready(function () {
  $("#autocompleateitem2").on("filterablebeforefilter", function (e, data) {
    var $ul = $(this),
      $input = $(data.input),
      value = $input.val(),
      html = "";
    $ul.html("");
    if (value && value.length > 2) {
      $ul.html("<li><div class='ui-loader'><span class='ui-icon ui-icon-loading'></span></div></li>");
      $ul.listview("refresh");
      var a = $input.val();
      $('tspan:contains(' + a + ')')
        .map(function () {
          html += "<li><a href='#' title='" + $(this).html() + "'>" + $(this).html() + "</a></li>";
        });
      $ul.html(html);
      $ul.listview("refresh");
      $ul.trigger("updatelayout");
    }
    $("#autocompleateitem2 a").click(function () {
      var elementClick = $(this).attr("title");
      console.log(elementClick);
      var element = $('tspan:contains(' + elementClick + ')');
      $('#pdfviewesection').scrollTo(element, {duration: 'slow', offsetTop: '60'});
    });
  });
  $("#autocompleateitem1").on("filterablebeforefilter", function (e, data) {
    var $ul = $(this),
      $input = $(data.input),
      value = $input.val(),
      html = "";
    $ul.html("");
    if (value && value.length > 2) {
      $ul.html("<li><div class='ui-loader'><span class='ui-icon ui-icon-loading'></span></div></li>");
      $ul.listview("refresh");
      var a = $input.val();
      $('tspan:contains(' + a + ')')
        .map(function () {
          html += "<li><a href='#' title='" + $(this).html() + "'>" + $(this).html() + "</a></li>";
        });
      $ul.html(html);
      $ul.listview("refresh");
      $ul.trigger("updatelayout");
    }
    $("#autocompleateitem1 a").click(function () {
      var elementClick = $(this).attr("title");
      var element = $('tspan:contains(' + elementClick + ')');
      $.mobile.changePage("#page_2", {transition: "pop", changeHash: true});
      $(document).on("pageshow", "#page_2", function () {
        $('#pdfviewesection').scrollTo(element, {duration: 'slow', offsetTop: '60'});
      });
    });
  });

});

