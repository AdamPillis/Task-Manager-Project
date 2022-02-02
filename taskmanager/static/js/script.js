document.addEventListener("DOMContentLoaded", function() {
    // sidenav initialization
    let sidenav = document.querySelectorAll(".sidenav");
    M.Sidenav.init(sidenav);
});

document.addEventListener('DOMContentLoaded', function() {
    // delete modal initialization
    let modal = document.querySelectorAll('.modal');
    M.Modal.init(modal);
  });

  document.addEventListener('DOMContentLoaded', function() {
      // date picker initialization
    let datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker, {
        format: "dd mmm, yyyy",
        i18n: {done: "Select"}
    });
  });
