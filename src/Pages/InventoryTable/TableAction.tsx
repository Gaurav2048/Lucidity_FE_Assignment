import { AppDelete, AppEdit, AppEyeClose, AppEyeOpen } from "@/AppIcon"
import { AccessTypeAtom, InventoryAtom } from "@/AppState"
import { produce } from "immer"
import { useNavigate } from "react-router-dom"
import { useRecoilState, useRecoilValue } from "recoil"

const TableAction: React.FC<Inventory> = ({
    id, disable
}) => {

    const [inventory, setInventory] = useRecoilState(InventoryAtom)
    const accessType = useRecoilValue(AccessTypeAtom)

    const navigate = useNavigate()

    const DisableIcon = disable ? AppEyeOpen : AppEyeClose

    const handleEdit = () => {
        if (disable) return
        navigate(`${accessType === 'USER' ? 'view' : 'edit'}/${id}`)
    }

    const toggleDisable = () => {
        if (accessType === "USER") return
        setInventory(produce(inventory, draft => {
            draft.map(item => {
                if (item.id === id) {
                    item.disable = !item.disable
                }
                return item
            })
            return draft
        }))
    }

    const removeItem = () => {
        if (disable || accessType === "USER") return
        setInventory(produce(inventory, draft => {
            return draft.filter(item => item.id !== id)
        }))
    }

    return <div className="flex gap-2">
        <AppEdit onClick={handleEdit} />
        <DisableIcon onClick={toggleDisable} />
        <AppDelete onClick={removeItem} />
    </div>
}

export default TableAction;