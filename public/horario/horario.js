window.onload = async () => {
    const data = await (await fetch("cursos/sw_a.json")).json()
    document.getElementById("title").innerHTML = "Horario de " + data.name
    document.getElementById("wtitle").innerHTML = data.name
    createTable(data.dias)
    today(data.dias)
}

//make table

function createTable(data) {
    var table = "<tbody>";
    const links = {
        "Gestión de Proyectos Software" : "https://informatica.cv.uma.es/course/view.php?id=5405",
        "Ingeniería Web" : "https://informatica.cv.uma.es/course/view.php?id=5322",
        "Métodos Formales para la Ingeniería del Software" : "https://informatica.cv.uma.es/course/view.php?id=5297",
        "Inteligencia Artifical para Juegos" : "https://informatica.cv.uma.es/course/view.php?id=5371",
        "Sistemas Empotrados" : "https://informatica.cv.uma.es/course/view.php?id=5442"
    }

    for (var i = 0; i < 3; i++) {
        table += "<tr>"
        table += "<th scope=\"row\">" + getHour(i) + "</th>"
        for (var j = 1; j <= 5; j++) 
            table += "<td><a class=\"link\" href=\"" + links[data[j][i]] + "\" target=\"_blank\">" + data[j][i] + "</a></td>"
        
        table += "</tr>"
    }

    table += "</tbody>"

    document.getElementById('tabla').innerHTML += table
}

//get hour by number

function getHour(n) {
    var res = undefined
    switch (n) {
        case 0: res = "15:30 - 17:15"
            break
        case 1: res = "17:30 - 19:15"
            break
        case 2: res = "19:30 - 21:15"
    }
    return res
}


function getDay(day){
    const weekday = ["Domingo","Lunes","Martes","Mi&eacute;rcoles","Jueves","Viernes","S&aacute;bado"]
    return weekday[day]
}

//today table

function today(data){
    var day = new Date()
    day = day.getDay()
    var table = "<table class=\"mx-auto w-50 table table-striped\"><thead><tr class=\"text-center\"><th><scope class=\"row\">Horas</scope></th><th><scope class=\"row\">" + getDay(day) + "</scope></th></tr></thead><tbody><tr>"
    if(day > 0 && day < 6){
        for(var i = 0; i < 3 ; i++){
            table += "<td>"+getHour(i)+"</td><td>"+data[day][i]+"</td></tr><tr>"
        }
        table += "</tr></tbody></table>"
    }else{
        table = "<h4>¡No hay clase!</h4>"
    }

    document.getElementById("today").innerHTML = table

    day++
    day %= 7
    table = "<table class=\"mx-auto w-50 table table-striped\"><thead><tr class=\"text-center\"><th><scope class=\"row\">Horas</scope></th><th><scope class=\"row\">" + getDay(day) + "</scope></th></tr></thead><tbody><tr>"
    if(day > 0 && day < 6){
        for(var i = 0; i < 3 ; i++){
            table += "<td>"+getHour(i)+"</td><td>"+data[day][i]+"</td></tr><tr>"
        }
        table += "</tr></tbody></table>"
    }else{
        table = "<h4>¡No hay clase!</h4>"
    }

    document.getElementById("tomo").innerHTML = table
}
