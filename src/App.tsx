import './App.css'
import AppRouter from "@/Router";
import useAxios from './hooks/useAxios';
import { ROUTES } from './constants';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { InventoryAtom } from './AppState';
import "@/mock/mock.tsx";


export default function App() {
  const [inventory, setInventory] = useRecoilState(InventoryAtom)

  const { fetchData, loading, response: inventoryResponse } = useAxios({
    url: ROUTES.FETCH_INVENTORY_URL,
    method: "get"
  })


  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    if (!!inventoryResponse) setInventory(inventoryResponse)
  }, [inventoryResponse])

  useEffect(() => {
    console.log(inventory)
  }, [inventory]) 

  return loading ? <div>Loading ...</div> : <AppRouter />
}