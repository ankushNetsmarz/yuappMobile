﻿

function GetAllFollowerList()
{
    var inputdata = {
        "userId": 4,
        "start": 1,
        "end": 10
    };
    $.ajax({
        type: "GET",
       // url: "http://localhost:6269/Users/GetFollower",
        url: "http://174.141.233.6/YuY/Users/GetAllFollower",
        data: inputdata,
        dataType: "json",

        success: function (data) {
            var HTML="";
          
            if (data.ResponseData.length > 0) {
               
                for (var i = 0; i < data.ResponseData.length; i++) {


                    HTML += "<div class='single-frnd'>"
                    HTML += "<div class='fl single-frnd-imgarea'><img src='images/Syra-yousaf-profile-pictures.jpg'></div>"
                    HTML += "<div>" + data.ResponseData[i].UserName + "</div>"
                    HTML += "</div>"

                    //console.log(data.ResponseData.length);
                }
                $("#getfollowerList").html(HTML);
            }
          
            },
        error: function (xhr) {
            alert(xhr.responseText);
        }
    });
}


function GetRecentFollowerList() {
    var inputdata = {
        "userId": 4,
        "start": 1,
        "end": 10
    };
    $.ajax({
        type: "GET",
       // url: "http://localhost:6269/Users/GetRecentFollower",
        url: "http://174.141.233.6/YuY/Users/GetRecentFollower",
        data: inputdata,
        dataType: "json",

        success: function (data) {
            var HTML = "";

            if (data.ResponseData.length > 0) {

                for (var i = 0; i < data.ResponseData.length; i++) {


                    HTML += "<div class='single-frnd'>"
                    HTML += "<div class='fl single-frnd-imgarea'><img src='images/Syra-yousaf-profile-pictures.jpg'></div>"
                    HTML += "<div>" + data.ResponseData[i].UserName + "</div>"
                    HTML += "</div>"

                    //console.log(data.ResponseData.length);
                }
                $("#getfollowerList").html(HTML);
            }

            console.log(data);
            //console.log(data.ResponseData.length);
        },
        error: function (xhr) {
            alert(xhr.responseText);
        }
    });
}
