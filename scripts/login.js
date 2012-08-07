$('#page_login_submit').live('click',function(){
  var name = $('#page_login_name').val();
  if (!name) { alert('Please enter your user name.'); return false; }
  var pass = $('#page_login_pass').val();
  if (!pass) { alert('Please enter your password.'); return false; }
  
  // BEGIN: drupal services user login (warning: don't use https if you don't have ssl setup)
  $.ajax({
      url: "http://"+domain+"/?q=my_services/user/login.json",
      type: 'post',
      dataType: "json",
      data: 'username=' + encodeURIComponent(name) + '&password=' + encodeURIComponent(pass),
      error: function(XMLHttpRequest, textStatus, errorThrown) {
        alert('page_login_submit - failed to login');
        alert(JSON.stringify(XMLHttpRequest));
        alert(JSON.stringify(textStatus));
        alert(JSON.stringify(errorThrown));
      },
      success: function (data) {
       $.mobile.changePage("index.html",{reloadPage:true},{allowSamePageTranstion:true},{transition:'none'});
      }
  });
  // END: drupal services user login
  return false;
});