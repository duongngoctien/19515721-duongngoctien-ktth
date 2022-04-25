$(document).ready(function() {
    var i = 1;

    $("#myBtn").click(function(){
        $("#myModal").modal();
    });

    function kiemTraTen() {
        let mauKT = /([A-Z]{1}[a-z]+)((\s{1}[A-Z]{1}[a-z]+){1,})$/
        if ($("#Name").val() == "") {
            $("#tbName").html("Không được để trống");
            return false;
        }
        if (!mauKT.test($("#Name").val())) {
            $("#tbName").html("Mỗi ký tự phải viết hoa, không sử dụng số");
            return false;
        } else
            $("tbName").html("*");
        return true;
    }
    $("#Name").blur(kiemTraTen);


    function kiemTraSDT() {
        var mauKT= /^0\d{2}-\d{3}-\d{4}$/;
        if ($("#SDT").val() == "") {
            $("#tbSDT").html("* Không được để trống");
            return false;
        }
        if (!mauKT.test($("#SDT").val())) {
            $("#tbSDT").html("* Số điện thoại 10 số và bắt đầu bằng số 0. Nhập theo định dạng 0xx-xxx-xxxx");
            return false;
        }
        $("#tbSDT").html("*");
        return true;
    }
    $("#SDT").blur(kiemTraSDT);

    function kiemTraSoCMND() {
        var mauKT = /[0-9]{9}$/;
        if ($("#CMND").val() == "") {
            $("#tbCMND").html("* Không được để trống");
            return false;
        }
        if (!mauKT.test($("#CMND").val())) {
            $("#tbCMND").html("* Số CMND gồm 9 số");
            return false;
        }
        $("#tbCMND").html("*");
        return true;
    }
    $("#CMND").blur(kiemTraSoCMND);

    function kiemTraEmail() {
        var mauKT = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        if ($("#Email").val() == "") {
            $("#tbEmail").html("* Không được để trống");
            return false;
        } else if (!mauKT.test($("#Email").val())) {
            $("#tbEmail").html("Nhập sai định dạng Email");
            return false;
        }
        $("#tbEmail").html("*");
        return true;
    }

    $("#Email").blur(kiemTraEmail);

    function kiemTraQq() {
        var mauKT = /^[A-Z0-9][a-z0-9]*(\s[A-Z0-9][a-z0-9]*)*$/;
        if ($("#Qq").val() == "") {
            $("#tbQq").html("Không được để trống");
            return false;
        }
        if (!mauKT.test($("#Qq").val())) {
            $("#tbQq").html("Mỗi ký tự đầu viết hoa, không sử dụng số");
            return true;
        }
        $("#tbQq").html("*");
        return true;
    }
    $("#Qq").blur(kiemTraQq);

    $("#btnSave").click(function(){
        if(kiemTraTen()== true && kiemTraSoCMND()== true && kiemTraQq()== true && kiemTraEmail()== true && kiemTraSDT()== true){
            row = "<tr>";
            row += "<th>" + (i++) + "</th>";
            row += "<th>" +$("#Name").val() +"</th>";
            row += "<th>" +$("#CMND").val() +"</th>";
            row += "<th>" +$("#Qq").val() +"</th>";
            row += "<th>" +$("#Email").val() +"</th>";
            row += "<th>" +$("#SDT").val() +"</th>";
            row += "<th>" +$("#ADD").val() +"</th>";
            $("#danhSach").append(row);
            $("#myModal").modal("hide");

        }
    })
})