const grid = new gridjs.Grid({
   fixeheader:true,
   search:true,
   sort:true,
   resizable: true,
  
   pagination:{
       'limit':5,
   },

   language: {
       'search': {
         'placeholder': '🔍 Buscar...'
       },
       pagination:{
           'previous': '⬅️',
           'next': '➡️',
           'showing': '😃 Mostrando',
           'results': () => 'Registros',
       },
   },

   style:{
       th: {
           'background-color': '#512da8',
           'color': 'white',
           'text-align': 'center'
       },
       td: {
           'text-align': 'center'
       }
   },
   columns: ['Id', 'Name', 'Descripcion', 'Categoria'],
   server:{
       url: "https://dummyjson.com/products/products",
       then: ((data )=> {
           console.log(data);
           return data.map(item => [
              
               item.brand,
               item.description,
               item.category

           ])
       })
   }
}).render(document.getElementById('raizche'));


/* const grid = new gridjs.Grid({
   columns: ['Title', 'Episode Id', 'Director', 'Producer'],
   server: {
     url: 'https://swapi.dev/api/films/',
     then: data => data.results.map(movie => [
       movie.title,
       movie.episode_id,
       movie.director,
       movie.producer
   ])
   } 
 }).render(document.getElementById('wrapper')); */


/* new gridjs.Grid({
   columns: ['Name', 'Email', 'Phone Number'],
   data: [
       ["John", "john@example.com", "(353) 01 222 3333"],
       ["Mark", "mark@gmail.com", "(01) 22 888 4444"],
       ["Eoin", "eoin@gmail.com", "0097 22 654 00033"],
       ["Sarah", "sarahcdd@gmail.com", "+322 876 1233"],
       ["Afshin", "afshin@mail.com", "(353) 22 87 8356"]
   ]
}).render(document.getElementById('wrapper')) */