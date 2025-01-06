import { ROUTES } from "@/constants";
import { http, HttpResponse } from "msw";
import { setupWorker } from "msw/browser";
const BASE_URL = import.meta.env.VITE_INVENTORY_BASE_URL

console.log("from mock", BASE_URL)

// 2. Describe network behavior with request handlers.
const worker = setupWorker(
  http.get(`${BASE_URL}${ROUTES.FETCH_INVENTORY_URL}`, () => {
    return HttpResponse.json([
      {
        name: "Bluetooth",
        category: "Electronic",
        value: "$150",
        quantity: 5,
        price: "$30",
      },
      {
        name: "Edifier M43560",
        category: "Electronic",
        value: "0",
        quantity: 0,
        price: "$0",
      },
      {
        name: "Sony 4k ultra 55 inch TV",
        category: "Electronic",
        value: "$1190",
        quantity: 17,
        price: "$70",
      },
      {
        name: "Samsumg 55 inch TV",
        category: "Electronic",
        value: "$600",
        quantity: 50,
        price: "$12",
      },
      {
        name: "samsumg S34 Ultra",
        category: "phone",
        value: "$0",
        quantity: 0,
        price: "$0",
      },
    ]);
  }),
);

// start local mocking server
// worker.start();

export default worker;

