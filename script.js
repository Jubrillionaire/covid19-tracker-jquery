var selectedRow = null
var submitValue = $("#submitValue")
var cancelButton = $("#cancelButton")

function onFormSubmit(){
    var formData = readFormData();
    if(selectedRow == null){
       insertFormData(formData)
    }
    else 
       updateData(formData)
    resetForm();
}


function readFormData(){
    var formData = {}
    formData["firstName"] = $("#firstName").val();
    formData["lastName"] = $("#lastName").val();
    formData["email"] = $("#email").val();
    formData["gender"] =$("#gender").val();
    formData["checkbox"] = $("#checkbox").checked ? "yes" : "no";
return formData
}






function resetForm(){
       $("#firstName").val("") 
       $("#lastName").val("") 
       $("#email").val("")  
       $("#gender").val("") 
       $("#checkbox").checked = ""
     selectedRow = null;
}


function insertFormData (formData) {
    var tBody =$("#tbody");
    var markup = `<tr>
        <td>${formData.firstName}</td>
        <td>${formData.lastName}</td>
        <td>${formData.email}</td>
        <td>${formData.gender}</td>
        <td>${formData.checkbox}</td>
        <td><div id="buttons"><button onClick="editFormData(this)">Edit</button> <button onClick="deleteData(this)"> Delete</button></div></td>
    </tr>`;
    tBody.append(markup)
 
 }




function editFormData (td){
    var jqueryObject = jQuery(td);
        selectedRow = jqueryObject.parent().parent().parent()
  $("#firstName").val(selectedRow[0].cells[0].textContent)
 $("#lastName").val( selectedRow[0].cells[1].textContent)
  $("#email").val(selectedRow[0].cells[2].textContent)
  $("#gender").val(selectedRow[0].cells[3].textContent)
  $("#checkbox").checked = selectedRow[0].cells[4].textContent
  submitValue.val("Update")
  
}

function updateData (formData) {
    console.log(selectedRow)
    selectedRow[0].cells[0].textContent = formData.firstName
    selectedRow[0].cells[1].textContent = formData.lastName
    selectedRow[0].cells[2].textContent = formData.email
    selectedRow[0].cells[3].textContent = formData.gender
    selectedRow[0].cells[4].textContent = formData.checkbox
    submitValue.val('Submit')
}

function deleteData (td){
    if (confirm('Are you sure to delete this data ?')) {
       var jqueryObject = jQuery(td);
       row = jqueryObject.parent().parent().parent()
      row.remove();
        resetForm();
    }

}

function handleCancel (){
    confirm("are you sure you want to cancel")
    resetForm()
    submitValue.val("Submit")
}

