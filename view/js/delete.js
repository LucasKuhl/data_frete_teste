const deleteCep = (id) => {
  return new Promise((resolve, reject) => {
    resolve(
      deleteAPI(id).then((result) => {
        return result;
      })
    );
  });
};

const deleteAPI = (id) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      type: "GET",
      dataType: "json",
      data: "action=delete&cep_id=" + id,
      url: "../api/index.php",
      async: true,
      success: function (response) {
        resolve(response);
      },
    });
  });
};
