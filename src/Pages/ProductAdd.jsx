import React, { useEffect, useState } from "react";
import ProjectTable from '../Componenets/ProjectTable';
import { useDispatch } from "react-redux";
import { addData,editData } from "../store/addDataSlice";

export default function ProductAdd({editItem}) {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    content: "",
    company: "",
    branch: "",
    date: ""
  });

  useEffect(() => {
    if (editItem) {
      setFormData(editItem);
    }
  }, [editItem]);

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value
    }));
  };

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
      date: ""
    });
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
                <option disabled value="">Bir Şirkət Seçin</option>
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
                <option disabled value="">Filial Seçin</option>
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
          <ProjectTable />
        </div>
        <div>
          <h1 className="font-semibold text-lg mb-4">Əməliyyat</h1>
          <div className="w-full bg-[#f1f1f1] p-4 flex gap-4">
            <button type="submit" className="btn w-[150px]" disabled={isFormEmpty()}>
              Yadda saxla
            </button>
            <button className="w-[150px] btn">Ləgv et</button>
          </div>
        </div>
      </form>
    </div>
  );
}
