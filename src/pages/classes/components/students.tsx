import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import PageComponent from "../../../components/pageComponent";
import { ArrowBack } from "@mui/icons-material";
import { IconButton, Stack, Typography } from "@mui/material";

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
  { id: 1055, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 1069, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 1037, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 1028, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 1089, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function students() {
  return (
    <PageComponent>
      <Stack direction={"row"} sx={{ alignItems: "center"}} spacing={1}>
        <IconButton   href="/classes/className">
          <ArrowBack />
        </IconButton>
        <Stack >
          <Typography variant="h5">Form 3 Students</Typography>
        </Stack>
      </Stack>
        <Stack direction={"row"} sx={{ alignItems: "center",}}>
          <Typography
            sx={{
              color: "#016FB9",
              fontWeight: 700, 
            //   border: "2px solid red",
              width: '100px',
              marginLeft: '25px'
            }}
          >
            Students
          </Typography>
        </Stack>
      <div
        style={{
          height: "612px",
          width: "960px",
          margin: "auto",
          backgroundColor: "#FFFFFF",
          boxShadow: "0px 10px 20px 10px #0000001A",
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </PageComponent>
  );
}
