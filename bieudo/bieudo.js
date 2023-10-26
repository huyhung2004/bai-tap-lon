//Biểu đồ sinh viên
function drawKhoaChartFromLocalStorage() {
    const students = localStorage.getItem('student') ? JSON.parse(localStorage.getItem('student')) : [];
  
    const khoaCountMap = new Map();
  
    students.forEach(student => {
      const khoa = student.khoa;
      if (khoaCountMap.has(khoa)) {
        khoaCountMap.set(khoa, khoaCountMap.get(khoa) + 1);
      } else {
        khoaCountMap.set(khoa, 1);
      }
    });
  
    const data = [['Khoa', 'Số lượng sinh viên']];
  
    khoaCountMap.forEach((count, khoa) => {
      data.push([khoa, count]);
    });
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);
  
    function drawChart() {
      const dataTable = google.visualization.arrayToDataTable(data);
      const options = {
        title: 'Số lượng sinh viên theo khoa',
        is3D: true, 
      };
      const chart = new google.visualization.PieChart(document.getElementById('bieudo1'));
      chart.draw(dataTable, options);
    }
  }
    drawKhoaChartFromLocalStorage();
  //Biểu đồ điểm
  function drawDiemChartFromLocalStorage() {
    const marks = localStorage.getItem('mark') ? JSON.parse(localStorage.getItem('mark')) : [];
    const diemCountMap = new Map();
    marks.forEach(mark => {
      const diem = mark.diem;
      if (diemCountMap.has(diem)) {
        diemCountMap.set(diem, diemCountMap.get(diem) + 1);
      } else {
        diemCountMap.set(diem, 1);
      }
    });
    const data = [['Điểm', 'Số lượng sinh viên']];
    diemCountMap.forEach((count, diem) => {
      data.push([diem, count]);
    });
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      const dataTable = google.visualization.arrayToDataTable(data);
  
      const options = {
        title: 'Số lượng sinh viên theo điểm',
        is3D: true, 
      };
      const chart = new google.visualization.PieChart(document.getElementById('bieudo2'));
      chart.draw(dataTable, options);
    }
  }
  
  drawDiemChartFromLocalStorage();
// Biểu đồ nam nữ
function drawGenderChartFromLocalStorage() {
  const students = localStorage.getItem('student') ? JSON.parse(localStorage.getItem('student')) : [];

  const genderCountMap = new Map();

  students.forEach(student => {
    const gender = student.gender;
    if (genderCountMap.has(gender)) {
      genderCountMap.set(gender, genderCountMap.get(gender) + 1);
    } else {
      genderCountMap.set(gender, 1);
    }
  });

  const data = [['Giới tính', 'Số lượng sinh viên']];

  genderCountMap.forEach((count, gender) => {
    data.push([gender, count]);
  });

  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    const dataTable = google.visualization.arrayToDataTable(data);
    const options = {
      title: 'Số lượng sinh viên theo giới tính',
      bars: 'vertical', 
      legend: { position: 'none' }, 
    };
    const chart = new google.visualization.ColumnChart(document.getElementById('bieudo3')); 
    chart.draw(dataTable, options);
  }
}

drawGenderChartFromLocalStorage();
  // Biểu đồ sinh viên theo lớp
function drawTinchiChartFromLocalStorage() {
  const students = localStorage.getItem('student') ? JSON.parse(localStorage.getItem('student')) : [];

  const lopCountMap = new Map();

  students.forEach(student => {
    const lop = student.lop;
    if (lopCountMap.has(lop)) {
      lopCountMap.set(lop, lopCountMap.get(lop) + 1);
    } else {
      lopCountMap.set(lop, 1);
    }
  });

  const data = [['Lớp', 'Số lượng sinh viên']];

  lopCountMap.forEach((count, lop) => {
    data.push([lop, count]);
  });

  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    const dataTable = google.visualization.arrayToDataTable(data);
    const options = {
      title: 'Số lượng sinh viên theo lớp',
      bars: 'vertical', 
      legend: { position: 'none' }, 
    };
    const chart = new google.visualization.ColumnChart(document.getElementById('bieudo4'));
    chart.draw(dataTable, options);
  }
}

drawTinchiChartFromLocalStorage();