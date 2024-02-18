// App.js
import  { useState } from "react";  
import Select from "./Componenets/Select";
import ProductAdd from "./Pages/ProductAdd";
import ProductList from "./Pages/ProductList";
const App = () => {
  const options = [
    "Məhsul Silinmə (Əlavə et/ Dəyiş)",
    "Məhsul Silinmə Siyahısı",
  ];

  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleOptionChange = (event, newValue) => {
    setSelectedOption(newValue);
  };

  
  const renderPage = () => {
    switch (selectedOption) {
      case options[0]:
        return <ProductAdd  />;
      case options[1]:
        return <ProductList />;
        default:
          return <ProductAdd  />;
    }
  };

  return (
    <div className="flex flex-col gap-8">
      <Select
        options={options}
        selectedOption={selectedOption}
        handleOptionChange={handleOptionChange}
      />
      {renderPage()}
    </div>
  );
};

export default App;