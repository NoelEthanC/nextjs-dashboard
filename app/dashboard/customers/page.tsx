import Table from "@/app/ui/customers/table";
import { Metadata } from "next";
import { fetchCustomers, fetchFilteredCustomers } from "@/app/lib/data";
import { CustomerField } from "@/app/lib/definitions";

export const metadata: Metadata = {
  title: "Customers ",
};

export default async function Page() {
  const customers = await fetchFilteredCustomers();

  return <Table customers={customers} />;
}
