

var courseApi='http://localhost:3000/courses';
function start(){
 
    getCourses(renderCourses);
    handleCreateForm();
}
//Start 
start();
function getCourses(callback){
    fetch(courseApi)
    .then(function(response){
     return response.json(); 
    })
    .then(callback);
}
//Function
function renderCourses(courses){
    var listCourseBlock= document.querySelector('#list-courses');
    var html=courses.map(function(course){
    return`
    <li class="course-item-${course.id}">
    <h4>${course.name}</h4>
    <p>${course.description}</p>
     <button onclick ="deleteCourse(${course.id})">Xóa</button>
    </li>
    `;
    });
    document.querySelector('#list-courses').innerHTML=html.join('');
};
function deleteCourse(id){
    var options={
        method: 'DELETE',
        headers: {
           'Content-type': 'application/json; charset=UTF-8',
         },
        body:JSON.stringify(data)
    };
    fetch(courseApi+"/"+id,options)
    .then(function(response){
     response.json();
    })
    .then(function(){
    var courseItem=document.querySelector(".course-item-"+id);
    if(courseItem){
        courseItem.remove();
    }
    });
    

}

function createCourse(data,callback){
 var options={
     method: 'POST',
     headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
     body:JSON.stringify(data)
 };
    fetch(courseApi,options)
    .then(function(response){
     response.json();
    })
    .then(callback);
    

}
function handleCreateForm(){
   var createBtn= document.querySelector('#create');
   
   createBtn.onclick=function(){
     var name=document.querySelector('input[name="name"]').value;
     var description=document.querySelector('input[name="description"]').value;
    var formData={
        name:name,
        description:description,
    }
     createCourse(formData,function(){
         getCourses(renderCourses);
     });
   }
}