let productName = []
let index

function drawTable() {
    let data = "<br><table><tr><th colspan='4'><h2>Display All Product</h2></th></tr>"
    data += "<tr id='noCss'><td colspan='2'><h4>Product Name</h4></td><td colspan='2' id='products'>" + productName.length + " products</td></tr>"
    for (let i = 0; i < productName.length; i++) {
        data += "<tr>"
        data += "<td style='width: 50%'>" + productName[i] + "</td>"
        data += "<td>" + "<button type='button' class='btn btn-success' onclick='edit(" + i + ")'>Edit</button>" + "</td>"
        data += "<td>" + "<button type='button' class='btn btn-danger' onclick='deleteProduct(" + i + ")'>Delete</button>" + "</td>"
        data += "<td>" + "<button type='button' class='btn btn-secondary' onclick='viewProduct(" + i + ")'>View</button>" + "</td>"
        data += "</tr>"
    }
    data += "<table>"
    document.getElementById("product").innerHTML = data
}

function addName() {
    let newProduct = document.getElementById("add").value
    productName.push(newProduct)
    document.getElementById("add").value = ""
    drawTable()
}

function edit(i) {
    document.getElementById("edit").value = productName[i]
    index = i
}

function editName() {
    productName[index] = document.getElementById("edit").value
    document.getElementById("edit").value = ""
    drawTable()
}

function deleteProduct(i) {
    if (confirm("Bạn chắc chắc muốn xóa sản phẩm " + productName[i] + " ?")) {
        productName.splice(i, 1)
    }
    drawTable()
}

function viewProduct(i) {
    document.getElementById("product").innerHTML =
        "<br><h3>Sản phẩm thứ " + (parseInt(i) + 1) + " là: " + productName[i] + "</h3>" +
        "<br><button style='width: 150px' class='btn btn-primary' onclick='drawTable()'>Back to home</button>"

}