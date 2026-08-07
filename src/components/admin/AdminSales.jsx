import { useEffect, useRef, useState } from "react";
import { supabase } from "../../supabase/client";

import "./AdminSales.css";


export default function AdminSales() {


/* ==========================================
   REFERENCIAS
========================================== */

const inicioFormulario = useRef(null);


/* ==========================================
   PESTAÑA ACTIVA
========================================== */

const [ficha, setFicha] = useState(1);


/* ==========================================
   FORMULARIO
========================================== */

const [ciutat, setCiutat] = useState("");

const [sala, setSala] = useState("");

const [contacte, setContacte] = useState("");

const [capacitat, setCapacitat] = useState("");

const [adreca, setAdreca] = useState("");

const [email, setEmail] = useState("");

const [telefon, setTelefon] = useState("");

const [web, setWeb] = useState("");

const [instagram, setInstagram] = useState("");

const [facebook, setFacebook] = useState("");

const [altresXarxes, setAltresXarxes] = useState("");

const [notes, setNotes] = useState("");



/* ==========================================
   LISTADO
========================================== */

const [sales, setSales] = useState([]);

const [busqueda, setBusqueda] = useState("");

const [filtroCiudad, setFiltroCiudad] = useState("");

const [orden, setOrden] = useState("");



/* ==========================================
   EDICIÓN
========================================== */

const [editandoId, setEditandoId] = useState(null);



/* ==========================================
   MODAL VEURE MÉS
========================================== */

const [salaSeleccionada, setSalaSeleccionada] = useState(null);

const [fichaModal, setFichaModal] = useState(1);



/* ==========================================
   FILTRO + ORDENACIÓN
========================================== */

const salesFiltradas = sales

.filter((item) => {


    const texto = busqueda.toLowerCase();



    const coincideBusqueda =


        item.ciutat?.toLowerCase().includes(texto)

        ||

        item.sala?.toLowerCase().includes(texto)

        ||

        item.contacte?.toLowerCase().includes(texto);



    const coincideCiudad =


        filtroCiudad === ""

        ||

        item.ciutat === filtroCiudad;



    return (

        coincideBusqueda

        &&

        coincideCiudad

    );


})

.sort((a,b)=>{


    switch(orden){


        case "ciutat_az":

            return a.ciutat.localeCompare(b.ciutat);



        case "ciutat_za":

            return b.ciutat.localeCompare(a.ciutat);



        case "sala_az":

            return a.sala.localeCompare(b.sala);



        case "sala_za":

            return b.sala.localeCompare(a.sala);



        case "cap_menor":

            return (a.capacitat || 0) - (b.capacitat || 0);



        case "cap_major":

            return (b.capacitat || 0) - (a.capacitat || 0);



        default:

            return 0;

    }


});



/* ==========================================
   CARGA INICIAL
========================================== */

useEffect(() => {


    inicioFormulario.current?.scrollIntoView({

        behavior:"smooth",

        block:"start"

    });


    cargarSales();


},[]);



/* ==========================================
   CARGAR SALAS
========================================== */


async function cargarSales(){


    const {data,error}=await supabase

        .from("sales")

        .select("*")

        .order("ciutat",{ascending:true});



    if(error){

        console.error(error);

        return;

    }



    setSales(data || []);


}



/* ==========================================
   LIMPIAR FORMULARIO
========================================== */


function limpiarFormulario(){


    setCiutat("");

    setSala("");

    setContacte("");

    setCapacitat("");

    setAdreca("");

    setEmail("");

    setTelefon("");

    setWeb("");

    setInstagram("");

    setFacebook("");

    setAltresXarxes("");

    setNotes("");

    setEditandoId(null);

    setFicha(1);


}

/* ==========================================
   LIMPIAR FILTROS
========================================== */

function limpiarFiltres(){

    setBusqueda("");

    setFiltroCiudad("");

    setOrden("");

}

/* ==========================================
   GUARDAR SALA
========================================== */


async function guardarSala(){


    const registro={


        ciutat,

        sala,

        contacte,


        capacitat:

            capacitat === ""

            ?

            null

            :

            Number(capacitat),



        adreca,

        email,

        telefon,

        web,

        instagram,

        facebook,

        altres_xarxes:altresXarxes,

        notes


    };



    let error;



    if(editandoId){


        ({error}=await supabase

            .from("sales")

            .update(registro)

            .eq("id",editandoId));


    }else{


        ({error}=await supabase

            .from("sales")

            .insert(registro));


    }



    if(error){


        alert(error.message);

        return;


    }



    alert(

        editandoId

        ?

        "✅ La sala se ha actualizado correctamente."

        :

        "✅ La sala se ha guardado correctamente."

    );



    limpiarFormulario();


    cargarSales();


}
 /* ==========================================
    EDITAR SALA
 ========================================== */

function editarSala(item){


    setEditandoId(item.id);

    setCiutat(item.ciutat || "");

    setSala(item.sala || "");

    setContacte(item.contacte || "");

    setCapacitat(
        item.capacitat
        ?
        String(item.capacitat)
        :
        ""
    );

    setAdreca(item.adreca || "");

    setEmail(item.email || "");

    setTelefon(item.telefon || "");

    setWeb(item.web || "");

    setInstagram(item.instagram || "");

    setFacebook(item.facebook || "");

    setAltresXarxes(item.altres_xarxes || "");

    setNotes(item.notes || "");


    setFicha(1);


    inicioFormulario.current?.scrollIntoView({

        behavior:"smooth",

        block:"start"

    });


}



/* ==========================================
   VER SALA
========================================== */

function verSala(item){

    setSalaSeleccionada(item);

    setFichaModal(1);

}



function cerrarModal(){

    setSalaSeleccionada(null);

}



/* ==========================================
   ELIMINAR SALA
========================================== */

async function eliminarSala(id){


    const confirmar = window.confirm(

        "Segur que vols eliminar aquesta sala?"

    );



    if(!confirmar){

        return;

    }



    const {error}=await supabase

        .from("sales")

        .delete()

        .eq("id",id);



    if(error){

        alert(error.message);

        return;

    }



    alert(

        "🗑️ La sala se ha eliminado correctamente."

    );



    cargarSales();


}



/* ==========================================
   RETURN
========================================== */


return (

<section
    ref={inicioFormulario}
    className="adminSection"
>


<h1>
🏛️ Sales
</h1>



<div className="adminTabs">


<button
className={ficha===1?"activa":""}
onClick={()=>setFicha(1)}
>
🏛️ Dades de la sala
</button>



<button
className={ficha===2?"activa":""}
onClick={()=>setFicha(2)}
>
📍 Direcció
</button>



<button
className={ficha===3?"activa":""}
onClick={()=>setFicha(3)}
>
📞 Contacte
</button>



<button
className={ficha===4?"activa":""}
onClick={()=>setFicha(4)}
>
🌐 Xarxes
</button>



<button
className={ficha===5?"activa":""}
onClick={()=>setFicha(5)}
>
📝 Notes
</button>


</div>



<div className="adminFicha">



{ficha===1 && (

<div className="adminGrid2">


<div>

<label>
Ciutat
</label>

<input
value={ciutat}
onChange={(e)=>setCiutat(e.target.value)}
/>

</div>



<div>

<label>
Nom de la sala
</label>

<input
value={sala}
onChange={(e)=>setSala(e.target.value)}
/>

</div>



<div>

<label>
Persona de contacte
</label>

<input
value={contacte}
onChange={(e)=>setContacte(e.target.value)}
/>

</div>



<div>

<label>
Capacitat
</label>

<input
type="number"
value={capacitat}
onChange={(e)=>setCapacitat(e.target.value)}
/>

</div>


</div>

)}




{ficha===2 && (

<div>

<label>
Adreça
</label>

<input
value={adreca}
onChange={(e)=>setAdreca(e.target.value)}
/>

</div>

)}





{ficha===3 && (

<div className="adminGrid2">


<div>

<label>
Correu electrònic
</label>

<input
type="email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

</div>



<div>

<label>
Telèfon
</label>

<input
value={telefon}
onChange={(e)=>setTelefon(e.target.value)}
/>

</div>



<div>

<label>
Pàgina web
</label>

<input
value={web}
onChange={(e)=>setWeb(e.target.value)}
/>

</div>


</div>

)}




{ficha===4 && (

<div className="adminGrid2">


<div>

<label>
Instagram
</label>

<input
value={instagram}
onChange={(e)=>setInstagram(e.target.value)}
/>

</div>



<div>

<label>
Facebook
</label>

<input
value={facebook}
onChange={(e)=>setFacebook(e.target.value)}
/>

</div>



<div>

<label>
Altres xarxes
</label>

<input
value={altresXarxes}
onChange={(e)=>setAltresXarxes(e.target.value)}
/>

</div>


</div>

)}




{ficha===5 && (

<div>

<label>
Notes
</label>


<textarea

rows="8"

value={notes}

onChange={(e)=>setNotes(e.target.value)}

/>


</div>

)}



</div>




<div className="adminBotones">


<button
className="botonGuardar"
onClick={guardarSala}
>

Guardar

</button>



<button
className="botonCancelar"
onClick={limpiarFormulario}
>

Esborrar formulari

</button>


</div>




<div className="adminSeparador"></div>




<h2>
Llistat de sales
</h2>



<div className="adminFiltros">


<input

type="text"

placeholder="🔍 Buscar..."

value={busqueda}

onChange={(e)=>setBusqueda(e.target.value)}

/>




<select

value={filtroCiudad}

onChange={(e)=>setFiltroCiudad(e.target.value)}

>


<option value="">

Totes les ciutats

</option>



{[...new Set(

sales.map(item=>item.ciutat)

)]

.map((ciutat)=>(


<option

key={ciutat}

value={ciutat}

>

{ciutat}

</option>


))}



</select>





<select

value={orden}

onChange={(e)=>setOrden(e.target.value)}

>


<option value="">

Ordenar per...

</option>


<option value="ciutat_az">

Ciutat (A-Z)

</option>


<option value="ciutat_za">

Ciutat (Z-A)

</option>


<option value="sala_az">

Sala (A-Z)

</option>


<option value="sala_za">

Sala (Z-A)

</option>


<option value="cap_menor">

Capacitat menor a major

</option>


<option value="cap_major">

Capacitat major a menor

</option>



</select>

<button

    className="botonCancelar"

    onClick={limpiarFiltres}

>

    🔄 Netejar filtres

</button>

</div>




<table className="adminTaula">


<thead>

<tr>

<th>
Ciutat
</th>

<th>
Sala
</th>

<th>
Contacte
</th>

<th>
Capacitat
</th>

<th>
Accions
</th>

</tr>

</thead>



<tbody>


{salesFiltradas.length===0 && (

<tr>

<td
colSpan="5"
style={{
textAlign:"center",
padding:"40px"
}}
>

No hi ha sales.

</td>

</tr>

)}



{salesFiltradas.map((item)=>(


<tr key={item.id}>


<td>{item.ciutat}</td>

<td>{item.sala}</td>

<td>{item.contacte}</td>

<td>{item.capacitat}</td>


<td className="adminAccions">


<button
onClick={()=>editarSala(item)}
>
✏️ Editar
</button>



<button
onClick={()=>verSala(item)}
>
👁️ Veure més
</button>



<button
onClick={()=>eliminarSala(item.id)}
>
🗑️ Eliminar
</button>


</td>


</tr>


))}



</tbody>


</table>

{/* ==========================================
    MODAL VEURE MÉS
========================================== */}


{
salaSeleccionada && (

<div className="adminModalOverlay">


    <div className="adminModal">


        <div className="adminModalHeader">


            <h2>

                {salaSeleccionada.sala}

            </h2>



            <button

                className="adminCerrar"

                onClick={cerrarModal}

            >

                ✕

            </button>


        </div>




        <div className="adminModalTabs">


            <button

                className={fichaModal===1?"activa":""}

                onClick={()=>setFichaModal(1)}

            >

                🏛️ Dades de la sala

            </button>



            <button

                className={fichaModal===2?"activa":""}

                onClick={()=>setFichaModal(2)}

            >

                📍 Direcció

            </button>



            <button

                className={fichaModal===3?"activa":""}

                onClick={()=>setFichaModal(3)}

            >

                📞 Contacte

            </button>



            <button

                className={fichaModal===4?"activa":""}

                onClick={()=>setFichaModal(4)}

            >

                🌐 Xarxes

            </button>



            <button

                className={fichaModal===5?"activa":""}

                onClick={()=>setFichaModal(5)}

            >

                📝 Notes

            </button>


        </div>





        <div className="adminInfoGrid">





        {fichaModal===1 && (

        <>


        <div className="adminInfoItem">

            <h4>
                Ciutat
            </h4>

            <p>
                {salaSeleccionada.ciutat}
            </p>

        </div>



        <div className="adminInfoItem">

            <h4>
                Nom de la sala
            </h4>

            <p>
                {salaSeleccionada.sala}
            </p>

        </div>



        <div className="adminInfoItem">

            <h4>
                Persona de contacte
            </h4>

            <p>
                {salaSeleccionada.contacte}
            </p>

        </div>



        <div className="adminInfoItem">

            <h4>
                Capacitat
            </h4>

            <p>
                {salaSeleccionada.capacitat}
            </p>

        </div>


        </>

        )}






        {fichaModal===2 && (

        <>


        <div className="adminInfoItem">


            <h4>
                Adreça
            </h4>


            <p>
                {salaSeleccionada.adreca}
            </p>


        </div>


        </>

        )}






        {fichaModal===3 && (

        <>


        <div className="adminInfoItem">

            <h4>
                Email
            </h4>

            <p>
                {salaSeleccionada.email}
            </p>

        </div>



        <div className="adminInfoItem">

            <h4>
                Telèfon
            </h4>

            <p>
                {salaSeleccionada.telefon}
            </p>

        </div>



        <div className="adminInfoItem">

            <h4>
                Web
            </h4>

            <p>
                {salaSeleccionada.web}
            </p>

        </div>


        </>

        )}







        {fichaModal===4 && (

        <>


        <div className="adminInfoItem">


            <h4>
                Instagram
            </h4>


            <p>
                {salaSeleccionada.instagram}
            </p>


        </div>





        <div className="adminInfoItem">


            <h4>
                Facebook
            </h4>


            <p>
                {salaSeleccionada.facebook}
            </p>


        </div>





        <div className="adminInfoItem">


            <h4>
                Altres xarxes
            </h4>


            <p>
                {salaSeleccionada.altres_xarxes}
            </p>


        </div>



        </>

        )}







        {fichaModal===5 && (


        <div className="adminNotes">


            {salaSeleccionada.notes}


        </div>


        )}





        </div>



    </div>


</div>


)

}




    </section>

);


}