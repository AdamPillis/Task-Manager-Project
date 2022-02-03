document.addEventListener("DOMContentLoaded", function() {
    // sidenav initialization
    let sidenav = document.querySelectorAll(".sidenav");
    M.Sidenav.init(sidenav);


    // delete modal initialization
    let modal = document.querySelectorAll('.modal');
    M.Modal.init(modal);


      // date picker initialization
    let datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker, {
        format: "dd mmm, yyyy",
        i18n: {done: "Select"}
    });


    // select category type initialization
    let selects = document.querySelectorAll('select');
    M.FormSelect.init(selects);
  });
