$(document).ready(function () {


  var bs_grid = function () {
    var grid_status;

    $("#grid-id").bs_grid({
      pageNum: 1,
      rowsPerPage: 10,
      maxRowsPerPage: 100,
      ajaxFetchDataURL: "js/mock.json",
      row_primary_key: "customer_id",
      rowSelectionMode: "single",
      columns: [
        {field: "customer_id", header: "Code", visible: "no"},
        {field: "lastname", header: "Lastname"},
        {field: "firstname", header: "Firstname"},
        {field: "email", header: "Email", visible: "no", "sortable": "no"},
        {field: "gender", header: "Gender"},
        {field: "date_updated", header: "Date updated"}
      ],

      sorting: [
        {sortingName: "Code", field: "customer_id", order: "none"},
        {sortingName: "Lastname", field: "lastname", order: "ascending"},
        {sortingName: "Firstname", field: "firstname", order: "ascending"},
        {sortingName: "Date updated", field: "date_updated", order: "none"}
      ],
      paginationOptions: {
        containerClass: "well pagination-container",
        visiblePageLinks: 5,
        showGoToPage: true,
        showRowsPerPage: true,
        showRowsInfo: false,
        showRowsDefaultInfo: false,
        disableTextSelectionInNavPane: false
      }
    });
  };

  bs_grid();
});