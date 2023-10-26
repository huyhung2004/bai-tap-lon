function searchma(){
    const ma=document.getElementById('searchma').value.trim();
    let monhoc=localStorage.getItem('monhoc')? JSON.parse(localStorage.getItem('monhoc')) : [];
    const s = monhoc.filter(monhoc => monhoc.ma.trim().includes(ma));
    pushsearch(s);
    document.getElementById('searchten').value='';
    document.getElementById('searchtinchi').value='';

}

function searchten(){
    const ten=document.getElementById('searchten').value.toLowerCase().trim();
    let monhoc=localStorage.getItem('monhoc')? JSON.parse(localStorage.getItem('monhoc')) : [];
    const s = monhoc.filter(monhoc => monhoc.ten.toLowerCase().includes(ten));
    pushsearch(s);
    document.getElementById('searchma').value='';
    document.getElementById('searchctinchi').value='';

}
function searchtinchi(){
    const tinchi=document.getElementById('searchtinchi').value.toLowerCase().trim();
    let monhoc=localStorage.getItem('monhoc')? JSON.parse(localStorage.getItem('monhoc')) : [];
    const s = monhoc.filter(monhoc => monhoc.tinchi.toLowerCase().includes(tinchi));
    pushsearch(s);
    document.getElementById('searchten').value='';
    document.getElementById('searchcma').value='';

}
function pushsearch(monhoc){
    if(monhoc.length===0){
        document.getElementById('list-table').innerHTML=`
         <tr>
          <th colspan="10" class="none"><h3>   Không tìm thấy môn học trên</h3></th>
         </tr>`;
        
         return ;
    }

    let tablee =` <tr>
            <th>STT</th>
            <th>Mã môn học</th>
            <th>Tên môn học</th>
            <th>Số tín chỉ</th>
            <th>Giảng viên </th>
            <th>Thao tác</th>
        </tr>
        `;
        
        monhoc.forEach((monhoc , i) => {
            tablee+= ` 
            <tr >
            <td>${i+1}</td>
            <td>${monhoc.ma}</td>
            <td>${monhoc.ten}</td>
            <td>${monhoc.tinchi}</td>
            <td>${monhoc.giangvien}</td>
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