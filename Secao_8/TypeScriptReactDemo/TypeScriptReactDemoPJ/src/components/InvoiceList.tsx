import * as React from "react";
import { useState } from "react";

export interface IInvoiceListProps {
    invoiceData: {
      customerName: string;
      invoices: { id: number; name: string; total: string }[];
    };
    logo?: string;
  }
  
  const InvoiceList = (props: IInvoiceListProps) => {
    const { customerName, invoices } = props.invoiceData;
  
    return (
      <div>
        <h1>{customerName}</h1>
      </div>
    );
  };

  
export default InvoiceList;