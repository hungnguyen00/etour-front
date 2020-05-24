$(document).ready(function(){
    $(".etour-search-form .dep-date, .etour-search-form .arr-date").datepicker({
        format: 'mm/dd/yyyy',
        startDate: '-3d',
    });
});