$(document).ready(function(){
    $(".section-search .search .dep-date, .section-search .search .arr-date").datepicker({
        format: 'mm/dd/yyyy',
        startDate: '-3d'
    });
});