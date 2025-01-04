import InventoryTable from "@/Pages/InventoryTable";
import InventoryStats from "@/Pages/InventoryStats";
import InventoryForm from "@/Pages/InventoryForm";

const AdminPage: React.FC = () => {
  return (
    <>
      <InventoryStats />
      <InventoryTable />
      <InventoryForm />
    </>
  );
};

export default AdminPage;
