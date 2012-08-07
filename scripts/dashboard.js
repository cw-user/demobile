var nid; // global node id variable
var domain; // global node id variable
domain="10.0.0.7";
$('#page_dashboard').live('pageshow',function(){
  try {
    $.ajax({
      url: "http://"+domain+"/?q=my_services/system/connect.json",
      type: 'post',
      dataType: 'json',
      contentType: 'application/x-www-form-urlencoded',
      error: function (XMLHttpRequest, textStatus, errorThrown) {
         alert('page_dashboard - failed to system connect');
        console.log(JSON.stringify(XMLHttpRequest));
        console.log(JSON.stringify(textStatus));
        console.log(JSON.stringify(errorThrown));
      },
      success: function (data) {
        var drupal_user = data.user;
        if (drupal_user.uid == 0) { // user is not logged in, show the login button, hide the logout button
          $('#button_login').show();
          $('#button_logout').hide();
          $('#button_page_create').hide();
          $('#button_view_pages').hide();
        }
        else { // user is logged in, hide the login button, show the logout button
          $('#button_login').hide();
          $('#button_logout').show();
          $('#button_page_create').show();
          $('#button_view_pages').show();
        }
      }
    });
  }
  catch (error) { alert("page_dashboard - " + error); }
});

$('#button_logout').live("click",function(){
try {
 $.ajax({
     url: "http://"+domain+"/?q=my_services/user/logout.json",
     type: 'application/x-www-form-urlencoded',
     dataType:   "jsonp",
     error: function (XMLHttpRequest, textStatus, errorThrown) {
       alert('button_logout - failed to logout');
       console.log(JSON.stringify(XMLHttpRequest));
       console.log(JSON.stringify(textStatus));
       console.log(JSON.stringify(errorThrown));
     },
     success: function (data) {
       //alert("You have been logged out.");
       //$.mobile.changePage("index.html",{reloadPage:true},{allowSamePageTranstion:true},{transition:'none'});
          $('#button_login').show();
          $('#button_logout').hide();
          $('#button_page_create').hide();
          $('#button_view_pages').hide();
          $('#button_logout').hide();

     }
 });
}
catch (error) { alert("button_logout - " + error); }
return false;
});
