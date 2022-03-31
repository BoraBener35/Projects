const masterList = [{
    name: "Erzurum BB",
    number: "1",
    gP: 14,
    win: 13, 
    loses: 0, 
    ties:1,
    plusminus: 30, 
    gA: 10, 
    goalsFor: 25,
    gAT: 10, 
    gFT: 20,
    points: 60,
    ppavg:8
 },
 {
    name: "Buzadam",
    number: "2",
    gp:14,
    win:10, 
    loses:3,
    ties:1, 
    plusminus:28,
    gA:15,
    goalsFor:23,
    gAt:9,
    gFt:10,
    points:55,
    ppavg:7.5
 },
 {
    name: "Istanbul BB",
    number: "3",
    gp:14,
    win:8, 
    loses:3,
    ties:3, 
    plusminus:25,
    gA:17,
    goalsFor:22,
    gAt:9,
    gFt:10,
    points:55,
    ppavg:7.5
 },
 {
    name: "Buz Beykoz",
    number: "4",
    gp:14,
    win:8, 
    loses:3,
    ties:3, 
    plusminus:25,
    gA:17,
    goalsFor:22,
    gAt:9,
    gFt:10,
    points:55,
    ppavg:7.5
 },
 {
    name: "Zeytinburnu",
    number: "5",
    gp:14,
    win:8, 
    loses:3,
    ties:3, 
    plusminus:25,
    gA:17,
    goalsFor:22,
    gAt:9,
    gFt:10,
    points:55,
    ppavg:7.5
 },
 {
    name: "Gumus Patenler",
    number: "6",
    gp:14,
    win:8, 
    loses:3,
    ties:3, 
    plusminus:25,
    gA:17,
    goalsFor:22,
    gAt:9,
    gFt:10,
    points:55,
    ppavg:7.5
 },
 {
    name: "Yukselis",
    number: "7",
    gp:14,
    win:8, 
    loses:3,
    ties:3, 
    plusminus:25,
    gA:17,
    goalsFor:22,
    gAt:9,
    gFt:10,
    points:55,
    ppavg:7.5
 },
 {
    name: "Izmir BB",
    number: "8",
    gp:14,
    win:8, 
    loses:3,
    ties:3, 
    plusminus:25,
    gA:17,
    goalsFor:22,
    gAt:9,
    gFt:10,
    points:55,
    ppavg:7.5
 },
 ];
 
 let companies = masterList;
 let isCategorySort = false;
 let categorySortDir = 'none';
 
 
 const btn = document.querySelector('button');
 btn.addEventListener('click', createTable);
 
 function createTable() {
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = '';
 
    companies.forEach(company => {
       const row = document.createElement('tr');
       tbody.appendChild(row);
       for (let key in company) {
          const cell = document.createElement('td');
          cell.textContent = company[key];
          row.appendChild(cell);
       }
    });
 }
 const sortCategory = () => {
    //isCategorySort = true;
    console.log(1);
    if (categorySortDir !== 'asc') {
       categorySortDir = 'asc';
       companies = masterList.sort((a, b) => {
          return (a.category > b.category) ? 1 : (a.category === b.category ? 0 : -1);
       });
    } else {
       categorySortDir = 'desc';
       companies = masterList.sort((a, b) => {
          return (a.category < b.category) ? 1 : (a.category === b.category ? 0 : -1);
       });
    }
 
    createTable();
 }
 
 const search = document.querySelector('#search');
 
 const filter = () => {
 
    let val = search.value;
    companies = masterList.filter(company =>
       company['number'].indexOf(val) >= 0 || company['name'].indexOf(val) >= 0
    );
    createTable();
 }
 search.addEventListener('keyup', filter);
 
 
 const catHeader = document.querySelector('#category');
 catHeader.addEventListener('click', sortCategory);



 // removing column

 var dataTable_length = document.getElementById('datatable').rows[0].cells.length;
    var count_rows = document.getElementById('datatable').rows.length;
    var column_array = [];
    for(var i=0; i<dataTable_length; i++)
    {
        var str = document.getElementById("datatable").rows[0].cells[i].innerHTML;
        if(str.search("<span></span>") != -1)
        {
            column_array.push(i);
        }

    }
    var len = column_array.length;
    for(var i=count_rows-1 ; i>=0;i--)
    {
        rows_number = document.getElementById('datatable').rows[i];
        console.log("row_number:"+i);

            for(var j=0; j<len;j++)
            {
                rows_number.deleteCell(column_array[j]);
            }

    }