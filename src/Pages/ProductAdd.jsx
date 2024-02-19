import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addData, editData } from "../store/addDataSlice";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";


export default function ProductAdd({ editItem }) {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    content: "",
    company: "",
    branch: "",
    date: "",
    product: "",
    kindOfProduct: "",
    unit: "",
    count: "",
    note: "",
  });

  useEffect(() => {
    if (editItem) {
      setFormData(editItem);
    }
  }, [editItem]);

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClose = ()=>{
    setFormData({
      content: "",
      company: "",
      branch: "",
      date: "",
      product: "",
      kindOfProduct: "",
      unit: "",
      count: "",
      note: "",
    });
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (editItem) {
      dispatch(editData(formData));
    } else {
      dispatch(addData(formData));
    }
    setFormData({
      content: "",
      company: "",
      branch: "",
      date: "",
      product: "",
      kindOfProduct: "",
      unit: "",
      count: "",
      note: "",
    });
    console.log(formData);
  };

  const isFormEmpty = () => {
    return Object.values(formData).some(value => value === '');
  };

  return (
    <div className="w-[70%] h-auto p-8 shadow-lg shadow-gray-600 flex flex-col gap-6">
      <h1 className="text-lg font-semibold">Məzmun Məlumatları</h1>
      <form onSubmit={handleSubmit}>
        <div className="bg-[#f1f1f1] w-full h-auto p-5 gap-4 flex flex-col">
          <div>
            <h3 className="font-semibold">Məzmun</h3>
            <input
              type="text"
              className="w-full p-2 rounded-lg text-[18px]"
              name="content"
              value={formData.content}
              onChange={handleChange}
            />
          </div>
          <div className="flex gap-4">
            <div className="w-[30%] flex flex-col gap-2">
              <p>Şirkət</p>
              <select
                className="w-full p-2"
                name="company"
                value={formData.company}
                onChange={handleChange}
              >
                <option disabled value="">
                  Bir Şirkət Seçin
                </option>
                <option value="Muğam MMC">Muğam MMC</option>
                <option value="Tac MMC">Tac MMC</option>
              </select>
            </div>
            <div className="w-[30%] flex flex-col gap-2">
              <p>Filial</p>
              <select
                className="w-full p-2"
                name="branch"
                value={formData.branch}
                onChange={handleChange}
              >
                <option disabled value="">
                  Filial Seçin
                </option>
                <option value="Baş Ofis">Baş Ofis</option>
                <option value="Binəqədi Filialı">Binəqədi Filialı</option>
              </select>
            </div>
            <div className="w-[30%] flex flex-col gap-2">
              <p>Əməliyyat Tarixi</p>
              <input
                className="w-full p-2"
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div>
          <h1 className="mb-2 font-semibold text-lg">Məhsul Siyahısı</h1>
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
                <select value={formData.product} id="" name="product"  onChange={handleChange}>
                  <option value="" >Bir məhsul seçin</option>
                  <option value="Çay dəsti">Çay dəsti</option>
                  <option value="Stəkan dəsti">Stəkan dəsti</option>
                  <option value="Stəkan altlıq">Stəkan altlıq</option>
                </select>
              </TableCell>
              <TableCell className='border'>
                <select name="kindOfProduct" value={formData.kindOfProduct} id="" onChange={handleChange} >
                   <option value="">Bir məhsul seçin</option>
                  <option value="Hazır məhsul">Hazır məhsul</option>
                  <option value="Xammal">Xammal</option>
                  <option value="Mal">Mal</option>
                </select>
              </TableCell>
              <TableCell className="border">
                <select value={formData.unit} onChange={handleChange}  name="unit" id="">
                <option value="" >Bir vahid seçin</option>
                  <option value="kg">kg</option>
                  <option value="qram">qram</option>
                  <option value="litr">litr</option>
                  <option value="sm">sm</option>
                  <option value="mk">mk</option>
                </select>
              </TableCell>
              <TableCell className='border'>
                <input type="number" name='count' value={formData.count} onChange={handleChange} className="border rounded-lg p-1" />
              </TableCell>
              <TableCell className='border'>
                <input type="text" name='note'  onChange={handleChange} value={formData.note} className="border rounded-lg p-1"/>
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
        </div>
        <div>
          <h1 className="font-semibold text-lg mb-4">Əməliyyat</h1>
          <div className="w-full bg-[#f1f1f1] p-4 flex gap-4">
            <button
              type="submit"
              className="btn w-[150px]"
              disabled={isFormEmpty()}
            >
              Yadda saxla
            </button>
            <button onClick={handleClose} className="w-[150px] btn">Ləgv et</button>
          </div>
        </div>
      </form>
    </div>
  );
}
