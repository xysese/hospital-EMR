

function clearFields() {
    // Clear text fields if the selected option is empty
    if ($('#regionSelect').val() === "") {
        $('#region_value').val("");
        $('#province_value').val("");
        $('#mun_value').val("");
        $('#barangay_value').val("");
    }
    if ($('#provinceSelect').val() === "") {
        $('#province_value').val("");
        $('#mun_value').val("");
        $('#barangay_value').val("");
    }
    if ($('#citySelect').val() === "") {
        $('#mun_value').val("");
        $('#barangay_value').val("");
    }
    if ($('#barangaySelect').val() === "") {
        $('#barangay_value').val("");
    }
   
}
function empty_cell(){
    if($('#region_value').val()=== ""){
        $('#province_value').val("");
        $('#mun_value').val("");
        $('#barangay_value').val("");
    }
}