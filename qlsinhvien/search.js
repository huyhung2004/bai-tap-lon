function searchname(){
    const name=document.getElementById('searchname').value.toLowerCase().trim();
    let students=localStorage.getItem('student')? JSON.parse(localStorage.getItem('student')) : [];
    const s = students.filter(student => student.fullname.toLowerCase().trim().includes(name));
    pushsearch(s);
    document.getElementById('searchmsv').value='';
    document.getElementById('searchclass').value='';

}
 
function searchmsv(){
    const msv=document.getElementById('searchmsv').value.trim();
    let students=localStorage.getItem('student')? JSON.parse(localStorage.getItem('student')) : [];
    const s = students.filter(student => student.msv.trim().includes(msv));
    pushsearch(s);
    document.getElementById('searchname').value='';
    document.getElementById('searchclass').value='';

}
function searchclass(){
    const msv=document.getElementById('searchclass').value.trim();
    let students=localStorage.getItem('student')? JSON.parse(localStorage.getItem('student')) : [];
    const s = students.filter(student => student.lop.trim().includes(msv));
    pushsearch(s);
    document.getElementById('searchname').value='';
    document.getElementById('searchmsv').value='';
}
function pushsearch(studentss){
    if(studentss.length===0){
        document.getElementById('list-table').innerHTML=`
         <tr>
          <th colspan="10" class="none"><h2>   không tìm thấy sinh viên trên...</h2></th>
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
        studentss.forEach((students , i) => {
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
            </tr> `;
            
        })
        document.getElementById("list-table").innerHTML = tablee;
}
