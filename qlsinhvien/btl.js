// window.onload= pushliststudent;
function save(){
    let a=0;
    let msv = document.getElementById('msv').value;
    let hten = document.getElementById('name').value;
    let ns=document.getElementById('namsinh').value;
    let khoa = document.getElementById('khoa').value;
    let lop = document.getElementById('lop').value;
    let email = document.getElementById('email').value;
    let sdt = document.getElementById('sdt').value;
    let gender = '';
    if (document.getElementById('nam').checked) {
        gender = document.getElementById('nam').value;
        
        document.getElementById('gender-errol').innerHTML='';
    } else if (document.getElementById('nu').checked) {
        gender = document.getElementById('nu').value;
        document.getElementById('gender-errol').innerHTML='';
    }else {

        document.getElementById('gender-errol').innerHTML='* chọn giới tính';
    }

    if (ns.trim() === "") {
        document.getElementById('namsinh-errol').innerHTML='* Nhập lại năm sinh ';
    }else {
        document.getElementById('namsinh-errol').innerHTML='';
    } 
    if (hten.trim() === "") {
        document.getElementById('name-errol').innerHTML='* Nhập lại họ và tên ';
    }else if(hten.trim().length<=8){
        document.getElementById('name-errol').innerHTML='* Họ và tên không được nhỏ hơn 8 ký tự';
        hten='';
    } 
    else {
        document.getElementById('name-errol').innerHTML='';
    }

    if(msv.trim()===''){
        document.getElementById('msv-errol').innerHTML='* Nhập lại mã sinh viên';
    }else if(!isNaN(msv)){
        document.getElementById('msv-errol').innerHTML='';
    }else{
        document.getElementById('msv-errol').innerHTML='* Nhập lại mã sinh viên';
        msv='';
    }


    if(khoa.trim()===''){
        document.getElementById('khoa-errol').innerHTML=' * Nhập lại khoa';
    }else {
        document.getElementById('khoa-errol').innerHTML='';
    }


    if(lop.trim()===''){
        document.getElementById('lop-errol').innerHTML=' * Nhập lại lớp ';
    }else {
        document.getElementById('lop-errol').innerHTML='';
    }

    
    if(email.trim()===''){
        document.getElementById('email-errol').innerHTML=' * Nhập lại email';
    }else if(validateEmail(email)){
        document.getElementById('email-errol').innerHTML='';
    } else{
        document.getElementById('email-errol').innerHTML='* Nhập lại email';
        email='';
    }

    if(sdt.trim()===''){
        document.getElementById('sdt-errol').innerHTML=' * Nhập lại số điện thoại ';
    }else if(!isNaN(sdt)){
        document.getElementById('sdt-errol').innerHTML='';
    }else{
        document.getElementById('sdt-errol').innerHTML=' * Nhập lại số điện thoại ';
        sdt='';
    }
    if(msv && hten &&ns && khoa && lop && email && sdt && gender ){
        const students= localStorage.getItem('student') ? JSON.parse(localStorage.getItem('student')): [];
        students.push({
            msv:msv,
            fullname: hten,
            ns:ns,
            khoa : khoa,
            lop: lop,
            email:email,
            dt:sdt,
            gender:gender,
        });
        
        localStorage.setItem('student', JSON.stringify(students));
        
        // document.getElementById("msv").value = "";
        // document.getElementById("name").value = "";
        // document.getElementById("namsinh").value = "";
        // document.getElementById("khoa").value = "";
        // document.getElementById("lop").value = "";
        // document.getElementById("email").value = "";
        // document.getElementById("sdt").value = "";
        // document.querySelector('input[name="gioitinh"]:checked').checked = false;
        pushliststudent();
        document.getElementById('information').style.display='none';
        document.getElementById('search').style.display='block';
        document.getElementById('list').style.display='block';
        document.getElementById('tieude').style.display='block';

        alert('SUCCESS');
        a++;
    }
    return a;
}
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}    
function pushliststudent(){
    const student= localStorage.getItem('student') ? JSON.parse(localStorage.getItem('student')): [];
    student.sort((a, b) => a.fullname.localeCompare(b.fullname));
    localStorage.setItem('student', JSON.stringify(student));
    if(student.length===0){
        document.getElementById('list-table').innerHTML=`
         <tr> 
          <th colspan="10" class="none"><h2>   không có dữ liệu của sinh viên nào...</h2></th>
         </tr>`;
        
         return ;
    }
    let tablee =` <tr>
            <th>STT</th>
            <th>MSV</th>
            <th>Họ và tên</th>
            <th>Năm sinh</th>
            <th>Giới tính</th>
            <th>Khoa</th>
            <th>Lớp</th>
            <th>Số điện thoại</th>
            <th>Địa chỉ email</th>
            <th>Thao tác</th>
        </tr>
        `;
        // for(let i=0;i<student.length;i++){
        //     tablee+= ` 
        //     <tr>
        //     <td>${i+1}</td>
        //     <td>${student[i].msv}</td>
        //     <td>${student[i].fullname}</td>
        //     <td>${student[i].gender}</td>
        //     <td>${student[i].khoa}</td>
        //     <td>${student[i].lop}</td>
        //     <td>${student[i].dt}</td>
        //     <td>${student[i].email}</td>
        //     <td>
        //         <a href="#" onclick="Delete(${i})">Delete</a>
        //     </td>
        //     </tr> `;
        // }

        student.forEach((students , i) => {
            tablee+= ` 
            <tr >
            <td>${i+1}</td>
            <td>${students.msv}</td>
            <td>${students.fullname}</td>
            <td>${students.ns}</td>
            <td>${students.gender}</td>
            <td>${students.khoa}</td>
            <td>${students.lop}</td>
            <td>${students.dt}</td>
            <td>${students.email}</td>
            <td>
                    <a href="#" onclick="Delete(${i})" class="btn btn-danger">
                    <i class="fas fa-trash"></i>
                </a>
                <a href="#" onclick="Edit(${i})" class="btn btn-warning">
                    <i class="fas fa-pen"></i>
                </a>
            </td>
            </tr>  `;
            
        })
        document.getElementById("list-table").innerHTML = tablee;
}
