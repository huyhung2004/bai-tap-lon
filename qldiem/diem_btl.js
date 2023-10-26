//window.onload= pushliststudent;
function save(){
    let a=0;
    let msv = document.getElementById('msv').value;
    let hten = document.getElementById('name').value;
    let ns=document.getElementById('namsinh').value;
    let mon = document.getElementById('mon').value;
    let giangvien = document.getElementById('giangvien').value; 
    let diem = document.getElementById('diem').value;
    let gender = '';

    //save gender
    if (document.getElementById('nam').checked) {
        gender = document.getElementById('nam').value;
        document.getElementById('gender-errol').innerHTML='';
    } else if (document.getElementById('nu').checked) {
        gender = document.getElementById('nu').value;
        document.getElementById('gender-errol').innerHTML='';
    }else {

        document.getElementById('gender-errol').innerHTML='* chọn giới tính';
    }

    //save date of birth
    if (ns.trim() === "") {
        document.getElementById('namsinh-errol').innerHTML='* Nhập lại năm sinh ';
        ns='';
    }else {
        document.getElementById('namsinh-errol').innerHTML='';
    } 

    //save name
    if (hten.trim() === "") {
        document.getElementById('name-errol').innerHTML='* Nhập lại họ và tên ';
        hten='';
    }else if(hten.trim().length<=8){
        document.getElementById('name-errol').innerHTML='* Họ và tên ko đc nhỏ hơn 8 ký tự';
        hten='';
    } 
    else {
        document.getElementById('name-errol').innerHTML='';
    }

    //save ma sinh vien
    if(msv.trim()===''){
        msv='';
        document.getElementById('msv-errol').innerHTML='* Nhập lại mã sinh viên';
    }else {
        document.getElementById('msv-errol').innerHTML='';
    }

    //save mon hoc
    if(mon.trim()===''){
        mon='';
        document.getElementById('mon-errol').innerHTML=' * Nhập lại môn';
    }else {
        document.getElementById('mon-errol').innerHTML='';
    }

    //save ten giang vien
    if (giangvien.trim() === "") {
        document.getElementById('giangvien-errol').innerHTML='* Nhập lại họ và tên giảng viên';
        giangvien='';
    }else if(giangvien.trim().length<=8){
        document.getElementById('giangvien-errol').innerHTML='* Họ và tên ko đc nhỏ hơn 8 ký tự';
        giangvien='';
    } 
    else {
        document.getElementById('giangvien-errol').innerHTML='';
    }

    //save diem
    if(diem.value===''){
        diem='';
        document.getElementById('diem-errol').innerHTML=' * Nhập lại điểm';
    }
    else if (diem < 0 || diem > 10) {
        diem='';
        document.getElementById('diem-errol').innerHTML='* Giá trị không hợp lệ';
    }
    else {
        document.getElementById('diem-errol').innerHTML='';
    }

    //save all
    if(gender && ns && hten && msv && mon && giangvien && diem){
        const marks= localStorage.getItem('mark') ? JSON.parse(localStorage.getItem('mark')): [];
        marks.push({
            msv:msv,
            fullname: hten,
            ns:ns,
            mon : mon,
            giangvien: giangvien,
            diem: diem,
            gender:gender,
        });
        localStorage.setItem('mark', JSON.stringify(marks));
        
        document.getElementById("msv").value = "";
        document.getElementById("name").value = "";
        document.getElementById("namsinh").value = "";
        document.getElementById("mon").value = "";
        document.getElementById("giangvien").value = "";
        document.getElementById("diem").value = "";
        document.querySelector('input[name="gioitinh"]:checked').checked = false;
        pushliststudent();
        document.getElementById('information').style.display='none';
        document.getElementById('button').style.display='block';
        document.getElementById('search').style.display='block';
        alert('SUCCESS');
        a++;
    }
    return a;
}
    
function pushliststudent(){
    let mark= localStorage.getItem('mark') ? JSON.parse(localStorage.getItem('mark')): [];
    if(mark.length===0){
        document.getElementById('list-table').innerHTML=`
         <tr>
          <th colspan="10" class="none"><h2>   không có dữ liệu của sinh viên nào...</h2></th>
         </tr>`;
        
         return ;
    }

    document.getElementById('list').style.display='block';
    let tablee =` <tr>
            <th>STT</th>
            <th>MSV</th>
            <th>Họ và tên</th>
            <th>Năm sinh</th>
            <th>Giới tính</th>
            <th>Môn học</th>
            <th>Giảng viên</th>
            <th>Điểm</th>
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

        mark.forEach((marks , i) => {
            tablee+= ` 
            <tr >
            <td>${i+1}</td>
            <td>${marks.msv}</td>
            <td>${marks.fullname}</td>
            <td>${marks.ns}</td>
            <td>${marks.gender}</td>
            <td>${marks.mon}</td>
            <td>${marks.giangvien}</td>
            <td>${marks.diem}</td>
            <td>
                    <a href="#" onclick="Delete(${i})" class="btn btn-danger">
                    <i class="bi bi-trash"></i> Delete
                </a>
                <a href="#" onclick="Edit(${i})" class="btn btn-warning">
                    <i class="bi bi-pencil"></i> Edit
                </a>
            </td>
            </tr> `;
            
        })
        document.getElementById("list-table").innerHTML = tablee;

}