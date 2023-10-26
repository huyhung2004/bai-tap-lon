function save(){
    let a=0;
    let ma = document.getElementById('ma').value;
    let ten =document.getElementById('ten').value;
    let tinchi = document.getElementById('tinchi').value;
    let giangvien = document.getElementById('giangvien').value;

    if (ma.trim() === "") {
        ma='';
        document.getElementById('ma-errol').innerHTML='* Nhập lại mã môn học ';
    }else {
        document.getElementById('ma-errol').innerHTML='';
    } 


    if (ten.trim() === "") {
        ten='';
        document.getElementById('ten-errol').innerHTML='* Nhập lại tên môn học ';
    }    
    else {
        document.getElementById('ten-errol').innerHTML='';
    }

    if(tinchi.trim()===''){
        tinchi='';
        document.getElementById('tinchi-errol').innerHTML='* Nhập lại số tín chỉ';
    }else {
        document.getElementById('tinchi-errol').innerHTML='';
    }

    
    if (giangvien.trim() === "") {
    giangvien='';
        document.getElementById('giangvien-errol').innerHTML='* Nhập lại giang vien ';
    }else {
        document.getElementById('giangvien-errol').innerHTML='';
    } 

    if( ma && ten  && tinchi && giangvien ){
        const monhoc= localStorage.getItem('monhoc') ? JSON.parse(localStorage.getItem('monhoc')): [];
        monhoc.push({
            ma: ma,
            ten: ten,
            tinchi: tinchi,
            giangvien: giangvien,
        });
    localStorage.setItem('monhoc', JSON.stringify(monhoc));

        document.getElementById("ma").value = "";
        document.getElementById("ten").value = "";
        document.getElementById("tinchi").value = "";
        document.getElementById("giangvien").value = "";
        pushlistmonhoc();
        document.getElementById('information').style.display='none';
        document.getElementById('list').style.display='block';
        document.getElementById('search').style.display='block';
        document.getElementById('tieude').style.display='block';
        alert('SUCESS');
        a++;
    }
    return a;
}   
function pushlistmonhoc(){
    let monhoc= localStorage.getItem('monhoc') ? JSON.parse(localStorage.getItem('monhoc')): [];
    if(monhoc.length===0){
        document.getElementById('list-table').innerHTML=`
         <tr>
          <th colspan="10" class="none"><h3>   Không có dữ liệu môn học</h3></th>
         </tr>`;
        
         return ;
    }

    document.getElementById('list').style.display='block';
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