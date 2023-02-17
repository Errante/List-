let list = []
let bd = false

function traerDatos() {
    list.forEach(dato => {
        document.getElementById("datos").innerHTML += `
        <tr>
            <td>${dato.id}</td>
            <td>${dato.nombre}</td>
            
            <td>

            <input class="btn btn-primary" onclick=editar(${JSON.stringify(dato).toString()}) type="button" value="Edit">
            <input class="btn btn-danger" onclick=eliminar(${dato.id}) type="button" value="Delete">
            </td>
        </tr>
        `
    });
}

function agregar() { 

    list.push(
        {
            id: list.length + 1,
            nombre: document.getElementById("listBox").value,
        }
    )
    console.log(datos);
    document.getElementById("datos").innerHTML = ""
    traerDatos()
    vaciar()
}


function vaciar() {
    document.getElementById("listBox").value = ""
}

function editar(p) {
    bd = true
    id = p.id
    console.log(p);
    document.getElementById("listBox").value = p.nombre
}

function edicion() {
    if (bd === true) {
        list.forEach(dato => {
            if (dato.id == id) {
                dato.nombre = document.getElementById("listBox").value 
            }
        })
        console.log(datos);
        document.getElementById("datos").innerHTML = ""
        traerDatos()
        vaciar()
        bd = false
        id = null
    } else {
        agregar()
    }
}

function eliminar(i) {
    console.log(i);
    let pos = list.findIndex(e => e.id == i)
    console.log(pos);

    list.splice(pos, 1)
    document.getElementById("datos").innerHTML = ""
    traerDatos()
}


function validar() {
    if (document.getElementById("listBox").value === "") {
        document.getElementById("alertError").setAttribute("style", "display:block")
        document.getElementById("error").innerText = "❌ You said an article please"
        setTimeout(() => {
            document.getElementById("alertError").setAttribute("style", "display:none")
        }, 3000);

    } else if (bd === true) {

        edicion()
        document.getElementById("alertOk").setAttribute("style", "display:block")
        document.getElementById("ok").innerText = "✅ Your article has been saved"
        setTimeout(() => {
            document.getElementById("alertOk").setAttribute("style", "display:none")
        }, 3000);
        
       
    } else {
        
        document.getElementById("alertOk").setAttribute("style", "display:block")
        document.getElementById("ok").innerText = "✅ Your article has been saved"
        setTimeout(() => {
            document.getElementById("alertOk").setAttribute("style", "display:none")
        }, 3000);
        agregar()}
}

