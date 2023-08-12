document.getElementById('submitBtn').addEventListener('keypress', function(){
   const nameFild = document.getElementById('nameFild');
   const nameValue = nameFild.value ;
   nameFild.value = '';
   const rollFild = document.getElementById('rollFild');
   const rollValue = rollFild.value;
   rollFild.value = '';

   const sectionContainer = document.getElementById('allStudents');
   const studentInfo = document.createElement('div');
   sectionContainer.appendChild(studentInfo);

   const h2 = document.createElement('h2');
   h2.innerText = nameValue;
   studentInfo.appendChild(h2);

   const h3 = document.createElement('h3');
   studentInfo.appendChild(h3);
   h3.innerText = rollValue;




})