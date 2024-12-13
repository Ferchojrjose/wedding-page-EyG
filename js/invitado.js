
document.addEventListener('DOMContentLoaded', () => {

    // URL del backend (Google Apps Script)
    const url = "https://script.google.com/macros/s/AKfycbxU2ZtActDtxPhvCL6aMDOSjpuktFDZi7Mkjnm3d6uS8YNmXoTPg2jd2nuk485jQSw/exec";

    // Datos a enviar al backend
    let data = {
        NombreAsistente: "",
        Cantidad: "",
        SiNo: "",
        Mensaje: ""
    };


    // Lista de invitados con nombre y número de invitados
    const invitados = [
        { nombre: "Fam. Castellanos Avila", numInvitados: 4 },
        { nombre: "Fam. Castellanos Franco", numInvitados: 2 },
        { nombre: "Srta. Andrea Lopez", numInvitados: 1 },
        { nombre: "Srta. Silsa Pirir", numInvitados: 1 },
        { nombre: "Sr y Sra Xicol", numInvitados: 2 },
        { nombre: "Sr y Sra Cac", numInvitados: 2 },
        { nombre: "Srta Alba Rivera", numInvitados: 1 },
        { nombre: "Sr y Sra Milian", numInvitados: 2 },
        { nombre: "Sr y Sra De la Cruz", numInvitados: 2 },
        { nombre: "Sr y Sra Pelen", numInvitados: 2 },
        { nombre: "Angelica y fam", numInvitados: 3 },
        { nombre: "Sr y Sra Valenzuela", numInvitados: 2 },
        { nombre: "Anselma y Camila", numInvitados: 2 },
        { nombre: "Fam Villalta Aceituno", numInvitados: 3 },
        { nombre: "Sr y Sra Diaz", numInvitados: 2 },
        { nombre: "Olgui", numInvitados: 1 },
        { nombre: "Damaso Avila", numInvitados: 1 },
        { nombre: "Noelia Avila", numInvitados: 1 },
        { nombre: "Fam. Gomar Peralta", numInvitados: 4 },
        { nombre: "Jeremias Avila", numInvitados: 1 },
        { nombre: "Jhony Avila", numInvitados: 1 },
        { nombre: "Sr y Sra Avila", numInvitados: 2 },
        { nombre: "Sr y Sra Palencia", numInvitados: 2 },
        { nombre: "Gery y Helen", numInvitados: 2 },
        { nombre: "Sr y Sra Rodriguez", numInvitados: 2 },
        { nombre: "Fam. Rodríguez Blanco", numInvitados: 5 },
        { nombre: "Fam. Rodríguez Moreno", numInvitados: 2 },
        { nombre: "Magda Azucena", numInvitados: 4 },
        { nombre: "Sr y Sra Ramirez", numInvitados: 2 },
        { nombre: "Sr y Sra Juarez", numInvitados: 2 },
        { nombre: "Fernando y Mariandre", numInvitados: 2 },
        { nombre: "Andrea Bautista", numInvitados: 1 },
        { nombre: "Willy y Gaby", numInvitados: 2 },
        { nombre: "Angel y Yody", numInvitados: 2 },
        { nombre: "Flavio Hernandez", numInvitados: 1 },
        { nombre: "Kiria Castellanos", numInvitados: 1 },
        { nombre: "Rene y Sara", numInvitados: 2 },
        { nombre: "Luis y Ana Cecilia", numInvitados: 2 },
        { nombre: "Juan Carlos Rax", numInvitados: 1 },
        { nombre: "Jeimy Rodríguez", numInvitados: 1 },
        { nombre: "Ruth Samayoa", numInvitados: 1 },
        { nombre: "Gaby Arroche", numInvitados: 1 },
        { nombre: "Heber Castillo", numInvitados: 1 },
        { nombre: "Isaac Ortíz", numInvitados: 1 },
        { nombre: "Nanci Mazariegos", numInvitados: 1 },
        { nombre: "Miguel Angel Pu", numInvitados: 1 },
        { nombre: "Sr y Sra Belteton", numInvitados: 2 },
        { nombre: "Marvin Hernandez", numInvitados: 1 },
        { nombre: "Pastor Steve y Pastora Ingrid", numInvitados: 2 },
        { nombre: "Sr y Sra Cardona", numInvitados: 2 },
        { nombre: "Sr y Sra Blanco", numInvitados: 2 },
        { nombre: "Alexander Caná", numInvitados: 1 },
        { nombre: "Wilfredo Lucas", numInvitados: 1 },
        { nombre: "Sr y Sra Rodas", numInvitados: 2 },
        { nombre: "Jacobo Aguilar", numInvitados: 1 },
        { nombre: "Pablo Serrano", numInvitados: 1 },
        { nombre: "Ana Lucia Alvarez", numInvitados: 2 },
        { nombre: "Familia Avila Arrivillaga", numInvitados: 6 },
        { nombre: "Abraham y Sugeydi", numInvitados: 2 },
        { nombre: "Roni Ambrocio", numInvitados: 1 },
        { nombre: "Ekdy Herrera", numInvitados: 1 },
        { nombre: "Alejandro Zárate", numInvitados: 1 },
        { nombre: "Warner Chacón", numInvitados: 1 },
        { nombre: "Denilso Morales", numInvitados: 1 },
        { nombre: "Max Chanquin", numInvitados: 1 },
        { nombre: "Daniel Juarez", numInvitados: 1 },
        { nombre: "Jenny López", numInvitados: 1 },
        { nombre: "Marelyn Lemus", numInvitados: 1 },
        { nombre: "Maeva Valdez", numInvitados: 1 },
        { nombre: "Johanes Caballeros", numInvitados: 1 },
    ];


    // Referencia al select
    const guestSelect = document.getElementById('guestSelect');
    const personInvitation = document.getElementById('personInvitation');
    const attendingYes = document.getElementById('atttending-yes');
    const attendingNo = document.getElementById('atttending-no');
    const confirmBtn = document.getElementById('confirmBtn');
    const mensajeBtn = document.getElementById('btnMensaje');
    const inputText = document.getElementById('inputText');


    // Añadir cada invitado como una opción en el select
    invitados.forEach(invitado => {
        const option = document.createElement('option');
        option.value = invitado.nombre;
        option.textContent = invitado.nombre;
        guestSelect.appendChild(option);
    });


    // Escuchar cambios en la selección del combo box
    guestSelect.addEventListener('change', () => {
        const selectedGuest = guestSelect.value;
        const invitado = invitados.find(item => item.nombre === selectedGuest);

        if (selectedGuest === "") {
            personInvitation.value = "";
        } else if (invitado) {
            personInvitation.value = invitado.numInvitados;
        }
    });



    // Escuchar el clic del botón "Confirmar"
    confirmBtn.addEventListener('click', (event) => {

        event.preventDefault(); // Evitar el comportamiento por defecto del formulario

        // Obtener el nombre del invitado seleccionado
        const selectedGuest = guestSelect.value;
        const numPeople = personInvitation.value;

        // Verificar si se seleccionó un invitado y se introdujo un número de personas
        if (!selectedGuest || !numPeople) {
            alert("Por favor, selecciona un invitado y la cantidad de personas.");
            return;
        }


        //Buscar invidado en la ista de invitados
        const invitado = invitados.find(item => item.nombre === selectedGuest);

        // Buscar el número de invitados del invitado seleccionado
        const numInvitados = invitado.numInvitados;

        // Verificar si el número de personas es mayor al número de invitados
        if (numPeople > numInvitados) {
            alert("El número de personas no puede ser mayor al número de invitados.");
            return;
        }



        // Obtener si la persona asistirá o no
        const attendingStatus = attendingYes.checked ? "Si" : attendingNo.checked ? "No" : null;

        if (!attendingStatus) {
            alert("Por favor, selecciona tu respuesta sobre asistir.");
            return;
        }


        // -------- GOOGLE APP SCRIPT - Enviar datos al backend ------------

        // Datos a enviar al backend
        data = {
            NombreAsistente: selectedGuest,
            Cantidad: numPeople,
            SiNo: attendingStatus,
            Mensaje: ""
        };


        // Enviar los datos al backend
        fetch(url, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(response => {
            console.log("Se ha enviado los archivos correctamente: ", response);
            console.log(response.status);
        }).catch(error => {
            console.error("Error:", error);
        });

        // -------- FIN GOOGLE APP SCRIPT - Enviar datos al backend --------

        // Aquí puedes hacer una acción, como enviar los datos al backend, o mostrar un mensaje de confirmación
        alert(`¡Gracias por confirmar! Invitado: ${selectedGuest}, Personas: ${numPeople}, Asistencia: ${attendingStatus}`);

        //Limpiar los campos
        guestSelect.value = "";
        personInvitation.value = "";
        attendingYes.checked = false;
        attendingNo.checked = false;
    });


    // Escuchar el clic del botón "Mensaje"
    mensajeBtn.addEventListener('click', (event) => {

        event.preventDefault(); // Evitar el comportamiento por defecto del formulario

        // Obtener el nombre del invitado seleccionado
        const mensaje = inputText.value;

        // Verificar si se introdujo un mensaje
        if (!mensaje) {
            alert("Por favor, introduce un mensaje.");
            return;
        }

        // Mandar el mensaje al backend
        data = {
            NombreAsistente: "",
            Cantidad: "",
            SiNo: "",
            Mensaje: mensaje
        };


        // -------- GOOGLE APP SCRIPT - Enviar datos al backend ------------

        // Enviar los datos al backend
        fetch(url, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(response => {
            console.log("Se ha enviado los archivos correctamente: ", response);
            console.log(response.status);
        }).catch(error => {
            console.error("Error:", error);
        });

        // -------- FIN GOOGLE APP SCRIPT - Enviar datos al backend --------

        // Aquí puedes hacer una acción, como enviar los datos al backend, o mostrar un mensaje de confirmación
        alert(`¡Gracias por tu mensaje!`);

        //Limpiar los campos
        inputText.value = "";

    });

});