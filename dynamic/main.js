let rowData = [
    { name: "Pranjal", serviceName: "PM", date: "2024-03-29", profit: 100 },
    { name: "paritosh", serviceName: "PM", date: "2024-03-30", profit: 200 },
    { name: "palav", serviceName: "B2b", date: "2024-03-31", profit: 150 },
    { name: "Moumita", serviceName: "B2b", date: "2024-03-31", profit: 150 },
    { name: "Mitesh", serviceName: "B2b", date: "2024-03-31", profit: 150 },
    { name: "Srinivas", serviceName: "B2b", date: "2024-03-31", profit: 150 },
    { name: "hritik", serviceName: "B2b", date: "2024-03-31", profit: 150 },
    { name: "abc", serviceName: "B2b", date: "2024-03-31", profit: 150 },
    { name: "xyz", serviceName: "B2b", date: "2024-03-31", profit: 150 },
    { name: "bcd", serviceName: "B2b", date: "2024-03-31", profit: 150 },
    
];

const tableContainer=document.querySelector("#table");
const searchInput=document.querySelector(".table-search-input");
const entriesInput=document.querySelector("#entriesInput")
const paginationLinks=document.querySelectorAll(".pagelink")
const yourref=document.getElementById("yref")
const activeref=document.getElementById("aref")
const urlRef=document.querySelector("#yourRef");
const urlCode=document.querySelector("#codeRef");
const toggleButton=document.querySelector(".toggle-button")
const navItems=document.querySelector(".nav-items-sm")
paginationLinks[0].classList.add("active")
let display=false
toggleButton.addEventListener("click",()=>{
    console.log("click")
    display=!display
    console.log(display)
    let toggleStyle=display?"block":"none"
    console.log(toggleStyle)
    navItems.style.display=toggleStyle
    
})
let currentPage=1
function activelink(){
    for (let i of paginationLinks){
        i.classList.remove("active");
    }
    event.target.classList.add("active")
    console.log("hello")
currentPage=event.target.value;
}

function frontBtn(){
   
    if (currentPage<6){
        for (let i of paginationLinks){
            i.classList.remove("active");
        }
        currentPage++
        paginationLinks[currentPage-1].classList.add("active");
    }
}
function backBtn(){
    
    if (currentPage>1){
        for (let i of paginationLinks){
            i.classList.remove("active");
        }
        currentPage--
        paginationLinks[currentPage-1].classList.add("active");
    }
}

function increment1(){
    yourref.textContent=parseInt(yourref.textContent)+1
 
}
function increment2(){
    aref.textContent=parseInt(aref.textContent)+1
   

}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
        .then(() => {
            alert('Text copied to clipboard');
        })
        .catch(err => {
            alert('Unable to copy text: ', err);
        });
}



function yourRefCopy(){
    console.log("hello")
    copyToClipboard(urlRef.value)

}
function refCode(){
    console.log("hello")
    copyToClipboard(urlCode.value)

}



// Function to create the table
function createTable(data) {
    tableContainer.innerHTML=""
    const table = document.createElement('table');
    table.classList.add("table")
    // Create table header
    const header = table.createTHead();
   
    const headerRow = header.insertRow();
    const columns = ['Name', 'Service Name', 'Date', 'Profit'];
    columns.forEach((column)=> {
        const th = document.createElement('th');
        th.textContent = column;
        headerRow.appendChild(th);
    });

    // Create table body and populate rows
    const tbody = document.createElement('tbody');
    data.forEach((rowData) =>{
        const row = tbody.insertRow();
        Object.values(rowData).forEach((value)=> {
            const cell = row.insertCell();
            cell.textContent = value;
        });
        // row.style.borderBottom = '1px solid #ccc';
    });
    table.appendChild(tbody);

    return table;
}

// Add the table to the HTML document
function addTable(rowData){
    console.log("data",rowData)
    tableContainer.appendChild(createTable(rowData));

    
}

//fiterfunctionality

searchInput.addEventListener('input',(e)=> {
    let inputValue= e.target.value
    
    let fiterdata=rowData.filter((each)=>{
        console.log(each.name)
        console.log(each.name.toLowerCase().includes(inputValue))
        return each.name.toLowerCase().includes(inputValue)
    })
    if (fiterdata.length!==0){
        addTable(fiterdata)
   
    }
    else{
        tableContainer.innerHTML="No Data Matched"
        tableContainer.classList.add("error")
    }
  
    
});

//display entries functionality
entriesInput.addEventListener('input',(e)=> {
    // Your code to execute when the input value changes
    let inputValue= e.target.value
    console.log(inputValue);
    if (inputValue<=10){
       console.log("")
       let data=rowData.slice(0,inputValue)
       console.log(data)
       addTable(data)
    }
    // addTable(fiterdata)
    
});




addTable(rowData)
tableContainer.appendChild(createTable(rowData));