import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import ProductAdd from "./ProductAdd";
import { deleteData } from "../store/addDataSlice";

export default function ProductList() {
  const [editItem, setEditItem] = useState(null);
  const formData = useSelector((state) => state.data.data);
  const dispatch = useDispatch()

  const handleDeleteButtonClick = (id) => {
    dispatch(deleteData({ id }));
  };

  const handleEditButtonClick = (item) => {
    setEditItem(item);
  };
  const [showProductAdd, setShowProductAdd] = useState(false);

  const handleAddButtonClick = () => {
    setShowProductAdd(true);
  };

  if (editItem) {
    return <ProductAdd editItem={editItem} />;
  }

  if (showProductAdd) {
    return <ProductAdd />;
  }

  return (
    <div className="w-[70%] h-auto p-8 shadow-lg shadow-gray-600 gap-6">
      <button className="btn" onClick={handleAddButtonClick}>Əlavə et</button>

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
                <TableCell className="border">Məhsul undefined</TableCell>
                <TableCell className="border">Məhsul növü undefined</TableCell>
                <TableCell className="border">Məhsul vahidi undefined</TableCell>
                <TableCell className="border">Məhsul miqdarı undefined</TableCell>
                <TableCell className="border">Qeyd undefined</TableCell>
                <TableCell className="border">Dəyiş undefined</TableCell>
                <TableCell className="border">Sil undefined</TableCell>
              </TableRow>
            </TableHead>
            
              {formData.map((e) => {
                return (
                  <TableBody key={e.content}>
                    <TableCell className="border">{e.content} </TableCell>
                    <TableCell className="border">{e.date}</TableCell>
                    <TableCell className="border">{e.company}</TableCell>
                    <TableCell className="border">{e.branch}</TableCell>
                    <TableCell className="border">{e.product}</TableCell>
                <TableCell className="border">{e.kindOfProduct}</TableCell>
                <TableCell className="border">{e.unit}</TableCell>
                <TableCell className="border">{e.count}</TableCell>
                <TableCell className="border">{e.note}</TableCell>
                    <TableCell className="border">
                      <button onClick={() => handleEditButtonClick(e)} className="btn">Dəyiş</button>
                    </TableCell>
                    <TableCell className="border">
                      <button  onClick={() => handleDeleteButtonClick(e.id)} className="btn">Sil</button>
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
