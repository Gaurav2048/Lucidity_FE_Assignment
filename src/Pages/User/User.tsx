import InventoryTable from "@/Pages/InventoryTable"
import InventoryStats from "@/Pages/InventoryStats";
import InventoryForm from "@/Pages/InventoryForm";

const UserPage: React.FC = () => {
  return  <>
  <InventoryStats />
  <InventoryTable />
  <InventoryForm />
</>
}

export default UserPage;
