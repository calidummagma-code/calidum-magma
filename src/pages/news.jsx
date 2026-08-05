import { useEffect, useState } from "react";

import { supabase } from "../supabase/client";

import "./News.css";

import logo from "../assets/logo-calidum.png";

import { useNavigate } from "react-router-dom";



export default function News(){


    const navigate = useNavigate();


    const [noticias,setNoticias] = useState([]);

    const [noticiaActiva,setNoticiaActiva] = useState(null);

    const [cargando,setCargando] = useState(true);



    useEffect(()=>{

        cargarNoticias();

    },[]);




    async function cargarNoticias(){


        const {data,error}=await supabase

        .from("noticias")

        .select("*")

        .order(
            "created_at",
            {
                ascending:false
            }
        )

        .limit(3);



        if(error){

            console.error(
                "Error cargando noticias:",
                error
            );

            return;

        }



        setNoticias(data || []);

        setCargando(false);


    }





    function formatearFecha(fecha){


        return new Date(fecha)

        .toLocaleDateString(

            "ca-ES",

            {
                day:"2-digit",
                month:"2-digit",
                year:"numeric"
            }

        );


    }






return(


<div className="newsPage">



    {/* BOTON VOLVER */}

   <button

    className="volverNews"

    onClick={()=>navigate(-1)}

>

    ← Tornar a la web

</button>

    {/* CABECERA */}


    <header className="newsHeader">


        <h1>

            NEWS

        </h1>


        <p>

            Últimes notícies de Calidum Magma

        </p>


    </header>







{
cargando ?


(

<div className="newsLoading">

    Carregant notícies...

</div>

)


:


(


<div className="newsLista">



{
noticias.map((noticia)=>(


<article

className="newsCard"

key={noticia.id}

>



<div className="newsImagen">


<img

src={
noticia.imagen || logo
}

alt={noticia.titulo}

/>


</div>






<div className="newsInfo">


<h2>

{noticia.titulo}

</h2>



<span>

{
formatearFecha(
noticia.created_at
)
}

</span>




<button

onClick={()=>setNoticiaActiva(noticia)}

>

Llegir més


</button>



</div>




</article>


))

}



</div>


)

}







{/* MODAL NOTICIA */}


{
noticiaActiva && (


<div className="newsModal">


<div className="newsModalContenido">



<button

className="newsCerrar"

onClick={()=>
setNoticiaActiva(null)
}

>

✕


</button>




{
noticiaActiva.imagen &&

<img

className="newsModalImagen"

src={noticiaActiva.imagen}

alt=""

/>

}





<h2>

{noticiaActiva.titulo}

</h2>



<span>

{
formatearFecha(
noticiaActiva.created_at
)
}

</span>



<div className="newsTexto">

{
noticiaActiva.contenido
}

</div>




</div>


</div>


)

}





</div>


);


}