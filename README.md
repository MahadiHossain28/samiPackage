# JavaScript Functions Documentation
This repository contains a collection of JavaScript functions designed to perform various tasks within web applications.

## How to Add
1. First Add Jquery CDN from [Jsdelivr](https://www.jsdelivr.com/package/npm/jquery) or [cdnjs](https://cdnjs.com/libraries/jquery).
2. Copy This JS URL/Script
```javascript
 https://cdn.jsdelivr.net/gh/UnanimousIT/samiPackage/dist/js/samipack.min.js
```
or

```apacheconf
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/UnanimousIT/samiPackage/dist/js/samipack.min.js"></script>
```
3. Copy This CSS URL/CSS
```javascript
 https://cdn.jsdelivr.net/gh/UnanimousIT/samiPackage/dist/css/samipack.min.css
```
or

```apacheconf
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/UnanimousIT/samiPackage/dist/css/samipack.min.css">
```


## Functions List
### 1. **cus_toast_auto(options)**
#### **Description :** Automatically displays a customizable toast notification.
#### **Parameters :**
* ##### **options (object) :** An object containing customization options for the toast notification.
  * ##### **cus_toast_time (number) :** The duration (in milliseconds) for which the toast notification should be displayed. Default: 5000ms.
  * ##### **cus_toast_top (string) :** The distance from the top of the viewport at which the toast notification should be positioned. Default: "25px".
  * ##### **cus_toast_bg (string) :** Background color of the toast notification. Default: "#f2f2f2".
  * ##### **cus_toast_border (string) :** Border color of the toast notification. Default: "#008080".
  * ##### **cus_toast_check_bg (string) :** Background color of the success toast notification. Default: "#198754".
  * ##### **cus_toast_check_icon (string) :** Icon color of the success toast notification. Default: "#ffffff".
  * ##### **cus_toast_error_bg (string) :** Background color of the error toast notification. Default: "#dc3545".
  * ##### **cus_toast_error_icon (string) :** Icon color of the error toast notification. Default: "#ffffff".
  * ##### **cus_toast_text (string) :** Text color of the toast notification. Default: "#666666".
#### Usage Example:
```javascript
$(document).ready(function() {
   $(document).cus_toast_auto({
   cus_toast_time: 3000,
   cus_toast_top: "50px",
   cus_toast_bg: "#fff",
   cus_toast_text: "#333"
   });
});
   ```
### 2. **sami_Toast_Append(options)**
#### **Description :** Appends a customized toast notification to the DOM.
#### **Parameters :**
* ##### **options (object) :** An object containing customization options for the toast notification.
   * ##### **cus_toast_status (string) :** The status of the toast notification (e.g., 'success' or 'error').
   * ##### **cus_toast_time  (number) :** The duration (in milliseconds) for which the toast notification should be displayed. Default: 5000ms.
   * ##### **cus_toast_msg (string) :** The message to be displayed in the toast notification.
#### Usage Example:
```javascript
$(document).sami_Toast_Append({
   cus_toast_status: 'success',
   cus_toast_time: 3000,
   cus_toast_msg: 'Operation successful!'
});
   ```

### 3. **image_preview()**
#### **Description :** Displays a full-size preview of an image when clicked.
#### Usage Example:
```javascript
$(".thumbnail").image_preview();
   ```
### 4. **modal_image_preview()**
#### **Description :** Displays a full-size preview of an image when clicked.
#### Usage Example:
```javascript
$(".thumbnail").modal_image_preview();
   ```

### 5. **handleEdit(options)**
#### **Description :** Handles editing functionality, such as fetching data from the server and populating form fields.
#### **Parameters :**
* ##### **options (object) :** An object containing options for editing.
  * #### **editUrl (string) :** The URL for fetching data for editing.
  * #### **modalId (string) :** The ID of the modal containing the form fields.
  * #### **valuesId (object) :** An object containing the IDs of form fields and corresponding keys in the fetched data.
  * #### **ReturnFromApi (string) :** The key from which the data is returned from the API.
  * #### **imagePrev (boolean) :** Whether to preview images fetched from the API.
  * #### **dbImgColName (string) :** The name of the column containing the image filename in the database.
#### Usage Example:
```javascript
$(document).on('click', '.editButton', function () {
   $(this).handleEdit({
      editUrl: "{{route('RouteName',[':id'])}}",
      modalId:'editModal',
      ReturnFromApi: 'data',
      valuesId:{
         dbColName:'FormInputId',
      },
      imagePrev: true,
      dbImgColName:'database Column Name',
   });
});
   ```

### 6. **handleUpdate(formData, options)**
#### **Description :** Handles form submission for updating data.
#### **Parameters :**
* ##### **options (object) :** An object containing options for editing.
  * #### **formData (FormData) :** The form data to be submitted.
  * #### **options (object) :** An object containing additional options.
  * #### **modalId (string) :** The ID of the modal containing the form.
  * #### **listName (string) :** The class name of the list to be updated after successful submission.
#### Usage Example:
```javascript
$(document).on('submit', '#updateForm', function(e) {
   e.preventDefault();
   var formData = new FormData(this);
   $(this).handleUpdate(formData,{
      modalId: 'editModal',
      listName:'Table Name'
   });
});
   ```

### 6. **handleDelete(options)**
#### **Description :** Handles deletion functionality, including confirmation and deletion of data.
#### **Parameters :**
* ##### **options (object) :** An object containing options for deletion.
  * #### **editUrl (string) :** The URL for fetching data before deletion.
  * #### **deleteUrl (string) :** The URL for deleting data.
  * #### **modalId (string) :** The ID of the confirmation modal.
  * #### **ReturnFromApi (string) :** The key from which the data is returned from the API.
  * #### **dbColName (string) :** The name of the column containing the data to be deleted in the database.
  * #### **imagePrev (boolean) :** Whether to preview images fetched from the API.
  * #### **dbImgColName (string) :** The name of the column containing the image filename in the database.
#### Usage Example:
```javascript
$(document).on('click', '.deleteButton', function () {
   $(this).handleDelete({
      editUrl: "{{route('route name',[':id'])}}",
      deleteUrl: "{{route('route name',[':id'])}}",
      modalId:'deleteModal',
      ReturnFromApi: 'data',
      dbColName: 'database Column Name',
      imagePrev: true,
      dbImgColName: 'database Column Name'
   });
});
   ```