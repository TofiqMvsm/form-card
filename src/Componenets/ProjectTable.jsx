import React from 'react'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";



export default function ProjectTable() {
  return (
    <>
          <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead >
              <TableRow className="border">
                <TableCell className="border">Məhsul undefined</TableCell>
                <TableCell className="border">Məhsul Növü undefined</TableCell>
                <TableCell className="border">Vahid undefined</TableCell>
                <TableCell className="border">Miqdar undefined</TableCell>
                <TableCell className="border">Qeyd undefined</TableCell>
                <TableCell className="border">Əlavə et undefined</TableCell>
                <TableCell className="border">Dəyiş undefined</TableCell>
                <TableCell className="border"> Sil undefined</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableCell className='border'>
                <select name="" id="">
                  <option value="">Çay dəsti</option>
                  <option value="">Stəkan dəsti</option>
                  <option value="">Stəkan altlıq</option>
                </select>
              </TableCell>
              <TableCell className='border'>
                <select name="" id="">
                  <option value="">Hazır məhsul</option>
                  <option value="">Xammal</option>
                  <option value="">Mal</option>
                </select>
              </TableCell>
              <TableCell className="border">
                <select name="" id="">
                  <option value="">kg</option>
                  <option value="">qram</option>
                  <option value="">litr</option>
                  <option value="">sm</option>
                  <option value="">mk</option>
                </select>
              </TableCell>
              <TableCell className='border'>
                <input type="number" className="border rounded-lg p-1" />
              </TableCell>
              <TableCell className='border'>
                <input type="text" className="border rounded-lg p-1"/>
              </TableCell>
              <TableCell className='border'>
                <button className='btn'>Əlavə et</button>
              </TableCell>
              <TableCell className='border'>
                <button className='btn'>Dəyiş</button>
              </TableCell>
              <TableCell className='border'>
                <button className='btn'>Sil</button>
              </TableCell>
            </TableBody>
          </Table>
        </TableContainer>
    </>
  )
}
