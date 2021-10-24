import * as React from "react";

import Hello from "./Hello";
import HelloWithHooks from "./HelloWithHooks";
import InvoiceList from "./invoiceList"

const App = () => {

  const dados = {
    customerName: "Google",
    invoices: [
      { id: 123, name: "Dev work", total: "20.00" },
      { id: 456, name: "More Dev work", total: "50.00" },
      { id: 789, name: "Something different", total: "100.00" },
    ],
  }; 
  return (
    <div>
      <Hello compiler={"TS"} framework={"React"} />
      <br/>
      <br/>
      <HelloWithHooks />
      <br/>
      <br/>
      <InvoiceList invoiceData={dados} />
    </div>
  );
};

export default App;
