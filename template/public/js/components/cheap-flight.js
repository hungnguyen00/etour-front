$(document).ready(function(){
    $(".section-cheap-flight .cheap-flight .search .dep-date input").datepicker({
        format: 'mm/dd/yyyy',
        startDate: '-3d'
    });
});