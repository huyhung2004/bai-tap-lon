function Delete(i){
  let studentss= localStorage.getItem('student') ? JSON.parse(localStorage.getItem('student')) : [];
  studentss.splice(i,1);
   localStorage.setItem('student', JSON.stringify(studentss));
   pushliststudent();
} 
function Edit(i){
  add2(i);
  let students=localStorage.getItem('student') ? JSON.parse(localStorage.getItem('student')) : [];

  document.getElementById('msv').value= students[i].msv;
  document.getElementById('name').value= students[i].fullname;
  document.getElementById('namsinh').value= students[i].ns;
  document.getElementById('khoa').value= students[i].khoa;
  document.getElementById('lop').value= students[i].lop;
  document.getElementById('email').value= students[i].email;
  document.getElementById('sdt').value= students[i].dt;
  if(students[i].gender==='Nam'){
      document.getElementById('nam').checked=true;
  }else if(students[i].gender==='Nữ'){
      document.getElementById('nu').checked=true;
  }
  document.getElementById('search').style.display='none';
  document.getElementById('tieude').style.display='none';

  return i;
}

function add(){
  let btt=`
  <div class="bg-light  rounded-4"> <h2 >Thông tin sinh viên</h2>
  
  <label >Mã sinh viên: </label>
  <input type="text" id="msv" placeholder="Nhập mã sinh viên" class="form-control ">
  <span id="msv-errol" class="errol" ></span>
  <br>

  <label >Họ và tên:</label>
  <input type="text" id="name" placeholder="Nhập tên " class="form-control">
  <span id="name-errol" class="errol"></span>
  <br>

  <label >Năm sinh :</label>
  <input type="date" id="namsinh" class="form-control">
  <span id="namsinh-errol" class="errol"></span>
  <br>

  <label >Khoa :</label>
  <input type="text" id="khoa" placeholder="Nhập khoa" class="form-control">
  <span id="khoa-errol" class="errol"></span>
  <br>

  

  <label >Lớp :</label>
  <input type="text" id="lop" placeholder="Nhập lớp" class="form-control">
  <span id="lop-errol" class="errol"></span>
  <br>

  <label for="">Địa chỉ email:</label>
  <input type="text" id="email" placeholder="Nhập email" class="form-control">
  <span id="email-errol" class="errol"></span>
  <br>

  <label for="">Số điện thoại:</label>
  <input type="text" id="sdt" placeholder="Nhập số điện thoại" class="form-control">
  <span id="sdt-errol" class="errol"></span>
  <br>

  <label for="">Giới tính:</label>
  <input type="radio" name="gioitinh" id="nam" value="Nam" class="form-check-input">Nam  
  <input type="radio" name="gioitinh" id="nu" value="Nữ" class="form-check-input">Nữ
  
  <span id="gender-errol" class="errol"> </span>
  <div id="nut">
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
document.getElementById('search').style.display='none';
document.getElementById('tieude').style.display='none';


}
function cancel(){
  document.getElementById('information').style.display= 'none';
  document.getElementById('list').style.display= 'block';
  pushliststudent();
  document.getElementById('search').style.display='block';
  document.getElementById('tieude').style.display='block';

}
function add2(i){
  let btt=`
  <div  class="bg-light rounded-4"> <h2 >Thông tin sinh viên</h2>
  <label >Mã sinh viên: </label>
  <input type="text" id="msv" placeholder="Nhập mã sinh viên" class="form-control">
  <span id="msv-errol" class="errol" ></span>
  <br>

  <label >Họ và tên:</label>
  <input type="text" id="name" placeholder="Nhập tên " class="form-control">
  <span id="name-errol" class="errol"></span>
  <br>

  <label >Năm sinh :</label>
  <input type="date" id="namsinh" class="form-control">
  <span id="namsinh-errol" class="errol"></span>
  <br>

  <label >Khoa :</label>
  <input type="text" id="khoa" placeholder="Nhập khoa" class="form-control">
  <span id="khoa-errol" class="errol"></span>
  <br>

  

  <label >Lớp :</label>
  <input type="text" id="lop" placeholder="Nhập lớp" class="form-control">
  <span id="lop-errol" class="errol"></span>
  <br>

  <label for="">Địa chỉ email:</label>
  <input type="text" id="email" placeholder="Nhập email" class="form-control">
  <span id="email-errol" class="errol"></span>
  <br>

  <label for="">Số điện thoại:</label>
  <input type="text" id="sdt" placeholder="Nhập số điện thoại" class="form-control">
  <span id="sdt-errol" class="errol"></span>
  <br>

  <label for="">Giới tính:</label>
  <input type="radio" name="gioitinh" id="nam" value="Nam" class="form-check-input">Nam  
  <input type="radio" name="gioitinh" id="nu" value="Nữ" class="form-check-input">Nữ
  <span id="gender-errol" class="errol"> </span>
  <div id="nut">
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
}   
function save2(i){
  let n= save();
  if(n!=0){
    Delete(i);
  }
}
