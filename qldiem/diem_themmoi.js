function Delete(i){
    let mak= localStorage.getItem('mark') ? JSON.parse(localStorage.getItem('mark')) : [];
    
    mak.splice(i,1);
    localStorage.setItem('mark', JSON.stringify(mak));
    pushliststudent();
}

function Edit(i){
    add2(i);
    let marks=localStorage.getItem('mark') ? JSON.parse(localStorage.getItem('mark')) : [];

    document.getElementById('msv').value= marks[i].msv;
    document.getElementById('name').value= marks[i].fullname;
    document.getElementById('namsinh').value= marks[i].ns;
    document.getElementById('mon').value= marks[i].mon;
    document.getElementById('giangvien').value= marks[i].giangvien;
    document.getElementById('diem').value= marks[i].diem;
    if(marks[i].gender==='Nam'){
        document.getElementById('nam').checked=true;
    }else if(marks[i].gender==='Nữ'){
        document.getElementById('nu').checked=true;
    }
    document.getElementById('search').style.display='none';
    
    return i;
}

function add(){
    let btt=`<div style="border: 1px solid;"> <h2 >Thông tin sinh viên</h2>
    <label >Mã sinh viên: </label>
    <input type="text" id="msv" placeholder="Nhập mã sinh viên">
    <span id="msv-errol" class="errol" ></span>
    <br>

    <label >Họ và tên:</label>
    <input type="text" id="name" placeholder="Nhập tên ">
    <span id="name-errol" class="errol"></span>
    <br>

    <label >Năm sinh :</label>
    <input type="date" id="namsinh" >
    <span id="namsinh-errol" class="errol"></span>
    <br>

    <label >Môn học :</label>
    <input type="text" id="mon" placeholder="Nhập môn học">
    <span id="mon-errol" class="errol"></span>
    <br>

    

    <label >Giảng viên :</label>
    <input type="text" id="giangvien" placeholder="Nhập tên giảng viên">
    <span id="giangvien-errol" class="errol"></span>
    <br>

    <label for="">Điểm:</label>
    <input type="text" id="diem" placeholder="Nhập điểm">
    <span id="diem-errol" class="errol"></span>
    <br>

    <label for="">Giới tính:</label>
    <input type="radio" name="gioitinh" id="nam" value="Nam">Nam  
    <input type="radio" name="gioitinh" id="nu" value="Nữ">Nữ
    <span id="gender-errol" class="errol"> </span>
    <div class="button-container d-flex" id="nut">
      <button onclick="save()" class="btn btn-success" >
        <i class="bi bi-check" ></i> SAVE
      </button>
      <button onclick="cancel()" class="btn btn-danger">
        <i class="bi bi-x"></i> CANCEL
      </button>
    </div>
    </div>`; 
  document.getElementById('information').innerHTML=btt;
  document.getElementById('list').style.display= 'none';
  document.getElementById('information').style.display= 'block';
  document.getElementById('button').style.display='none';
  document.getElementById('search').style.display='none';
  
  
}
function cancel(){
    document.getElementById('information').style.display= 'none';
    pushliststudent();
    document.getElementById('button').style.display='block';
    document.getElementById('search').style.display='block';
}
function add2(i){
    let btt=`<div style="border: 1px solid;"> <h2 >Thông tin sinh viên</h2>
    <label >Mã sinh viên: </label>
    <input type="text" id="msv" placeholder="Nhập mã sinh viên">
    <span id="msv-errol" class="errol" ></span>
    <br>

    <label >Họ và tên:</label>
    <input type="text" id="name" placeholder="Nhập tên ">
    <span id="name-errol" class="errol"></span>
    <br>

    <label >Năm sinh :</label>
    <input type="date" id="namsinh" >
    <span id="namsinh-errol" class="errol"></span>
    <br>

    <label >Môn học :</label>
    <input type="text" id="mon" placeholder="Nhập môn học">
    <span id="mon-errol" class="errol"></span>
    <br>

    

    <label >Giảng viên :</label>
    <input type="text" id="giangvien" placeholder="Nhập tên giảng viên">
    <span id="giangvien-errol" class="errol"></span>
    <br>

    <label for="">Điểm:</label>
    <input type="text" id="diem" placeholder="Nhập điểm">
    <span id="diem-errol" class="errol"></span>
    <br>

    <label for="">Giới tính:</label>
    <input type="radio" name="gioitinh" id="nam" value="Nam">Nam  
    <input type="radio" name="gioitinh" id="nu" value="Nữ">Nữ
    <span id="gender-errol" class="errol"> </span>
    <div class="button-container d-flex" id="nut">
      <button onclick="save2(${i})" class="btn btn-success" >
        <i class="bi bi-check" ></i> SAVE
      </button>
      <button onclick="cancel()" class="btn btn-danger">
        <i class="bi bi-x"></i> CANCEL
      </button>
    </div>
    </div>`; 
  document.getElementById('information').innerHTML=btt;
  document.getElementById('list').style.display= 'none';
  document.getElementById('information').style.display= 'block';
  document.getElementById('button').style.display='none';
}   
function save2(i){
    let n= save();
    if(n!=0){
      Delete(i);
    }
}
