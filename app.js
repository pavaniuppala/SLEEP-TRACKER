
function results() {
    var Name = document.getElementById("t1").value;
    var Age = document.getElementById("t3").value;
    var Hrate = document.getElementById("t4").value;
    var Time = document.getElementById("t5").value;

    if (Age > 6 && Age <= 15) {
        if (Hrate >= 70 && Hrate <= 100) {
            if (Time >= 7) {
                document.write(
                    '<h1 style="text-align:center ; margin-top:100px ;font-family:cursive;font-weight:bold;">YOU HAD ENOUGH SLEEP</h1>'
                );
            } else if (Time < 7) {
                var sleepneed = 7 - parseInt(Time);
                document.write(
                    '<h1 style="text-align:center; margin-top:100px ; font-family:cursive;font-weight:bold;">YOU NEED A MINIMUM OF ' +
                    sleepneed +
                    "HOURS OF SLEEP</h1>"
                );
            }
        } else if (Hrate > 100) {
            document.write(
                '<h1 style="text - align: center; margin-top:100px; font - family: cursive; font - weight: bold;">YOU ARE TIRED ,NEED MORE REST</h1>'
            );
        }
    } else if (Age >= 16 && Age <= 40) {
        if (Hrate >= 70 && Hrate <= 100) {
            if (Time >= 9) {
                document.write(
                    '<h1 style="text-align:center; margin-top:100px;font-family:cursive;font-weight:bold;">YOU HAD ENOUGH SLEEP</h1>'
                );
            } else if (Time < 9) {
                var sleepneed = 9 - parseInt(Time);
                document.write(
                    '<h1 style="text-align:center; margin-top:100px;font-family:cursive;font-weight:bold;">YOU NEED A MINIMUM OF ' +
                    sleepneed +
                    "HOURS OF SLEEP</h1>"
                );
            }
        } else if (Hrate > 100) {
            document.write(
                '<h1 style="text - align: center; margin-top:100px; font - family: cursive; font - weight: bold;">YOU ARE TIRED ,NEED MORE REST</h1>'
            );
        }
    } else {
        if (Hrate >= 70 && Hrate <= 100) {
            if (Time >= 11) {
                document.write(
                    '<h1 style="text-align:center; margin-top:100px;font-family:cursive;font-weight:bold;">YOU HAD ENOUGH SLEEP</h1>'
                );
            } else if (Time < 11) {
                var sleepneed = 11 - parseInt(Time);
                document.write(
                    '<h1 style="text-align:center; margin-top:100px;font-family:cursive;font-weight:bold;">YOU NEED A MINIMUM OF ' +
                    sleepneed +
                    "HOURS OF SLEEP</h1>"
                );
            }
        } else if (Hrate > 100) {
            document.write(
                '<h1 style="text - align: center; f margin-top:100px ;font - family: cursive; font - weight: bold;">YOU ARE TIRED ,NEED MORE REST</h1>'
            );
        }
    }

    document.write(
        '<table border="1" style="width:100%;border-collapse:collapse;margin-top:80px">'
    );
    document.write("<tr>");
    document.write(
        '<td style="text-align:center;padding-top:10px;padding-bottom:10px;"> Name </td>'
    );

    document.write(
        '<td style="text-align:center;padding-top:10px;padding-bottom:10px;"> Age </td>'
    );
    document.write(
        '<td style="text-align:center;padding-top:10px;padding-bottom:10px;"> Hrate(BPM) </td>'
    );
    document.write(
        '<td style="text-align:center;padding-top:10px;padding-bottom:10px;"> Time </td>'
    );
    document.write("</tr>");
    document.write("<tr>");
    document.write(
        '<td style="text-align:center;padding-top:10px;padding-bottom:10px;">' +
        Name +
        "</td>"
    );
    document.write(
        '<td style="text-align:center;padding-top:10px;padding-bottom:10px;">' +
        Age +
        "</td>"
    );
    document.write(
        '<td style="text-align:center;padding-top:10px;padding-bottom:10px;">' +
        Hrate +
        "</td>"
    );
    document.write(
        '<td style="text-align:center;padding-top:10px;padding-bottom:10px;">' +
        Time +
        "</td>"
    );
    document.write("</tr>");
    document.write("</table> <br><br><br>");

    document.body.style.backgroundColor = "lightblue";

    document.write(
        '<a href="index.html" style="border:2px solid black; border-radius:10px; text-decoration:none; color:black;  padding:10px ; ">BACK</a> '
    );
    document.write(
        '<div style=" postion:relative ; display:inline; margin-left:18vw ;margin-top:10vw ;width:400px ; height:500px ;" class = "col-4" >'
    );
    document.write(
        '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiBeneQpQI0jH--IUOxxDYJkCePT4jD4C9Nw&usqp=CAU" width="400px" height="350px" margin-right="20px" >'
    );
    document.write(
        '<img src="https://i.pinimg.com/originals/9b/c0/33/9bc0332fe3a483ae8471b599e2037065.jpg" width="400px" height="350px" >'
    );
}