function Delete(i){
  let monhoc= localStorage.getItem('monhoc') ? JSON.parse(localStorage.getItem('monhoc')) : [];
  
  monhoc.splice(i,1);
   localStorage.setItem('monhoc', JSON.stringify(monhoc));
   pushlistmonhoc();
}
function Edit(i){
  add2(i);
  let monhoc=localStorage.getItem('monhoc') ? JSON.parse(localStorage.getItem('monhoc')) : [];

  document.getElementById('ma').value= monhoc[i].ma;
  document.getElementById('ten').value= monhoc[i].ten;
  document.getElementById('tinchi').value= monhoc[i].tinchi;
  document.getElementById('giangvien').value= monhoc[i].giangvien;
  document.getElementById('search').style.display='none';
  document.getElementById('tieude').style.display='none';

  return i;
}
function add(){
  let btt=`<div style="border: 1px solid;"> <h4 >Nhập dữ liệu môn học</h4>
  <label >Mã môn học: </label>
  <input type="text" id="ma" placeholder="Nhập mã môn học">
  <span id="ma-errol" class="errol" ></span>
  <br>

  <label >Tên môn học:</label>
  <input type="text" id="ten" placeholder="Nhập tên môn học ">
  <span id="ten-errol" class="errol"></span>
  <br>

  <label >Số tín chỉ :</label>
  <input type="text" id="tinchi" placeholder="Nhập số tín chỉ" >
  <span id="tinchi-errol" class="errol"></span>
  <br>

  <label >Giảng viên :</label>
  <input type="text" id="giangvien" placeholder="Nhập tên giảng viên">
  <span id="giangvien-errol" class="errol"></span>
  <br>

  <div class="button-container d-flex" id="nut">
    <button onclick="save()" class="btn btn-outline-success" >
      <i class="bi bi-check" ></i> SAVE
    </button>
    <button onclick="cancel()" class="btn btn-outline-danger">
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
    pushlistmonhoc();
    document.getElementById('search').style.display='block';
    document.getElementById('tieude').style.display='block';
  
  }
function add2(i){
      let btt=`<div style="border: 1px solid;"> <h4 >NhậP dữ liệu môn học</h4>
      <label >Mã môn học: </label>
      <input type="text" id="ma" placeholder="Nhập mã môn học">
      <span id="ma-errol" class="errol" ></span>
      <br>
  
      <label >Tên môn học:</label>
      <input type="text" id="ten" placeholder="Nhập tên môn học ">
      <span id="ten-errol" class="errol"></span>
      <br>
  
      <label >Số tín chỉ :</label>
      <input type="text" id="tinchi" placeholder="Nhập số tín chỉ" >
      <span id="tinchi-errol" class="errol"></span>
      <br>
  
      <label >Giảng viên :</label>
      <input type="text" id="giangvien" placeholder="Nhập tên giảng viên">
      <span id="giangvien-errol" class="errol"></span>
      <br>
  <div class="button-container d-flex" id="nut">
    <button onclick="save2(${i})" class="btn btn-outline-success" >
      <i class="bi bi-check" ></i> SAVE
    </button>
    <button onclick="cancel()" class="btn btn-outline-danger">
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