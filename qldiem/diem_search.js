function searchname(){
    const name=document.getElementById('searchname').value.toLowerCase().trim();
    let marks=localStorage.getItem('mark')? JSON.parse(localStorage.getItem('mark')) : [];
    const m = marks.filter(mark => mark.fullname.toLowerCase().includes(name));
    pushsearch(m);
    document.getElementById('searchmsv').value='';
    document.getElementById('searchsubject').value='';

}

function searchmsv(){
    const msv=document.getElementById('searchmsv').value.trim();
    let marks=localStorage.getItem('mark')? JSON.parse(localStorage.getItem('mark')) : [];
    const s = marks.filter(mark => mark.msv.trim().includes(msv));
    pushsearch(s);
    document.getElementById('searchname').value='';
    document.getElementById('searchsubject').value='';

}
function searchsubject(){
    const mon=document.getElementById('searchsubject').value.trim();
    let marks=localStorage.getItem('mark')? JSON.parse(localStorage.getItem('mark')) : [];
    const s = marks.filter(mark => mark.mon.toLowerCase().includes(mon));
    pushsearch(s);
    document.getElementById('searchname').value='';
    document.getElementById('searchmsv').value='';
}
function pushsearch(mak){
    if(mak.length===0){
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
            <th>Môn học</th>
            <th>Giảng viên</th>
            <th>Điểm</th>
            <th>Thao tác</th>
        </tr>
        `;
        mak.forEach((marks , i) => {
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
