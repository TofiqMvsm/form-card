import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";

export default function ProductList() {
  const formData = useSelector((state) => state.data.data);
  console.log(formData);
  return (
    <div className="w-[70%] h-auto p-8 shadow-lg shadow-gray-600 gap-6">
      <button className="block">Əlavə et</button>

      <div>
        <h1 className="text-lg font-semibold my-6">Siyahı</h1>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className="border">Məzmun undefined</TableCell>
                <TableCell className="border">
                  Əməliyyat tarixi undefined
                </TableCell>
                <TableCell className="border">Şirkət undefined</TableCell>
                <TableCell className="border">Filial undefined</TableCell>
                <TableCell className="border">Dəyiş undefined</TableCell>
                <TableCell className="border">Sil undefined</TableCell>
              </TableRow>
            </TableHead>
            
              {formData.map((e) => {
                return (
                  <TableBody>
                    <TableCell className="border">{e.content} </TableCell>
                    <TableCell className="border">{e.date}</TableCell>
                    <TableCell className="border">{e.company}</TableCell>
                    <TableCell className="border">{e.branch}</TableCell>
                    <TableCell className="border">
                      <button>Dəyiş</button>
                    </TableCell>
                    <TableCell className="border">
                      <button>Sil</button>
                    </TableCell>
                    </TableBody>
                );
              })}
          
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
