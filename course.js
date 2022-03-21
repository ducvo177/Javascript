var coureApi= "http://localhost:3000/courses";
fetch(coureApi)
.then(function(response){
    return response.json();
})
.then(function(courses){
   var htmls=courses.map(function(courses){
       return `<div>
           <h1> ${courses.id}</h1>
           <p> ${courses.name}</p>
           <p> ${courses.description}</p>

       </div>`

   });
   var html=htmls.join("");
   document.getElementById("post").innerHTML=html;
   
  
});