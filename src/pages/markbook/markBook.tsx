import { Stack, Typography } from "@mui/material";
import PageComponent from "../../components/pageComponent";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

const Classes = () => {
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 90,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
  ];

  const rows = [
    { id: 1056, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 1048, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 1033, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 1074, lastName: "Stark", firstName: "Arya", age: 16 },
  ];
  return (
    <PageComponent>
      <Typography variant="h4" color="#182825">
        Mark Book
      </Typography>

      <Stack sx={{ width: "100%" }} spacing={4} direction="row"></Stack>
      <Stack
        sx={{
          height: "612px",
          width: "100%",
          borderRadius: "4px",
          backgroundColor: "#FFFFFF",
          boxShadow: "0px 10px 20px 10px #0000001A",
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          //   pageSize={5}
          //   rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </Stack>
    </PageComponent>
  );
};

export default Classes;
