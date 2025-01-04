import { Field, Form, ErrorMessage, useFormikContext } from "formik";
import { useEffect } from "react";

const InventoryFields: React.FC = () => {
  const { values, handleChange, setFieldValue } =
    useFormikContext<InventoryForm>();

  useEffect(() => {
    setFieldValue("value", values.price * values.quantity);
  }, [values.price, values.quantity]);

  return (
    <Form className="space-y-4">
      {/* Name Field */}
      <div>
        <label
          htmlFor="name"
          className="block text-gray-900 text-sm font-medium"
        >
          Name
        </label>
        <Field
          id="name"
          name="name"
          type="text"
          value={values.name}
          onChange={handleChange}
          className="mt-1 block w-full text-black border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
        <ErrorMessage
          name="name"
          component="div"
          className="text-red-600 text-sm"
        />
      </div>

      {/* Category Field */}
      <div>
        <label
          htmlFor="category"
          className="block text-sm text-gray-900 font-medium"
        >
          Category
        </label>
        <Field
          id="category"
          name="category"
          type="text"
          value={values.category}
          onChange={handleChange}
          className="mt-1 block text-black w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
        <ErrorMessage
          name="category"
          component="div"
          className="text-red-600 text-sm"
        />
      </div>

      {/* Value Field */}
      <div>
        <label
          htmlFor="value"
          className="block text-sm text-gray-900 font-medium"
        >
          {`Value {Will be calculated automatically}`}
        </label>
        <Field
          id="value"
          name="value"
          type="number"
          disable
          value={values.value}
          className="mt-1 block text-black w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
        <ErrorMessage
          name="value"
          component="div"
          className="text-red-600 text-sm"
        />
      </div>

      {/* Quantity Field */}
      <div>
        <label
          htmlFor="quantity"
          className="block text-sm text-gray-900 font-medium"
        >
          Quantity
        </label>
        <Field
          id="quantity"
          name="quantity"
          type="number"
          value={values.quantity}
          onChange={handleChange}
          className="mt-1 block text-black w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
        <ErrorMessage
          name="quantity"
          component="div"
          className="text-red-600 text-sm"
        />
      </div>

      {/* Price Field */}
      <div>
        <label
          htmlFor="price"
          className="block text-sm text-gray-900 font-medium"
        >
          Price
        </label>
        <Field
          id="price"
          name="price"
          type="number"
          value={values.price}
          onChange={handleChange}
          className="mt-1 block text-black w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
        <ErrorMessage
          name="price"
          component="div"
          className="text-red-600 text-sm"
        />
      </div>
    </Form>
  );
};

export default InventoryFields;
