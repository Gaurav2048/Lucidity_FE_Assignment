import React, { useMemo } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useRecoilState } from 'recoil';
import { InventoryAtom } from '@/AppState';
import { useParams } from 'react-router-dom';
import InventoryFields from '@/Pages/InventoryForm/InventoryFields';
import AppModal from '@/components/AppModal';
import useNavDisclosure from '@/hooks/useNavDisclosure';
import { currencyConverter } from '@/utils/utils';
import { produce } from 'immer';

const initialValues: InventoryForm = {
  id: '',
  name: '',
  category: '',
  value: 0,
  quantity: 0,
  price: 0,
  disable: false
};

// Define Yup validation schema
const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  category: Yup.string().required('Category is required'),
  value: Yup.number().required('Value is required'),
  quantity: Yup.number()
    .required('Quantity is required')
    .min(1, 'Quantity must be at least 1'),
  price: Yup.number().required('Price is required'),
});

const ItemForm: React.FC = () => {
  const { productId } = useParams()
  const [inventory, setInventory] = useRecoilState(InventoryAtom)
  const currentItem = inventory.find(item => item.id === productId)!
  const currentItemFormData: InventoryForm = {
    ...currentItem,
    value: currencyConverter(currentItem?.value),
    price: currencyConverter(currentItem?.price)

  }
  const { open: openModal, goBack } = useNavDisclosure("edit")

  const handleClose = () => goBack()


  const handleSubmit = (values: InventoryForm) => {
    setInventory(produce(inventory, draft => {
      draft = draft.map(item => {
       if (item.id === values.id) {
         return {
           ...values,
           value: `$${values.value}`,
           price: `$${values.price}`
         }
       }
       return item
      })
      goBack()
      return draft
     }))
  };

  return (
    <Formik
      initialValues={currentItemFormData}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      {({ submitForm }) => (
        <AppModal open={openModal} onClose={handleClose} onSubmit={submitForm}>
            <InventoryFields />
        </AppModal>
      )}
    </Formik>
  );
};

export default ItemForm;
