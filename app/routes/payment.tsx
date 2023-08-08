import type { V2_MetaFunction } from "@remix-run/node";
import NavBar from "./navbar";
import { useEffect, useRef } from "react";
import {
  loadPaymentWidget,
  PaymentWidgetInstance,
} from "@tosspayments/payment-widget-sdk";
import { nanoid } from "nanoid";
import { ANONYMOUS } from "@tosspayments/payment-widget-sdk";
import { RenderPaymentMethodsAmountParameter } from "@tosspayments/payment-widget__types/types/types/widget";

export const meta: V2_MetaFunction = () => [{ title: "Purchasing" }];

function searchParam(key: string) {
  return new URLSearchParams(location.search).get(key);
}

export default function Show() {
  const item = searchParam("item");
  let product: string;
  let price: number;

  switch (item) {
    case "one":
      product = "1 Class";
      price = 25_000;
      break;
    case "month":
      product = "Monthly Plan";
      price = 180_000;
      break;
    case "year":
      product = "Yearly Plan";
      price = 2_000_000;
      break;
    default:
      product = "Error";
      price = 0;
      break;
  }

  const clientKey = "test_ck_D5GePWvyJnrK0W0k6q8gLzN97Eoq";
  const customerKey = ANONYMOUS;
  const paymentWidgetRef = useRef<PaymentWidgetInstance | null>(null);

  useEffect(() => {
    (async () => {
      const paymentWidget = await loadPaymentWidget(clientKey, customerKey);
      paymentWidget.renderPaymentMethods("#payment-widget", price);

      paymentWidgetRef.current = paymentWidget;
    })();
  }, []);

  return (
    <main className="absolute inset-0 bg-[#DAEDFF] sm:flex sm:items-center sm:justify-center">
      <div className="absolute top-4 z-0 w-full">
        <NavBar />
      </div>
      <div className="absolute inset-x-64 top-64 sm:inset-x-16">
        <div className="flex flex-auto flex-col">
          <div className="text-left text-6xl font-bold sm:ml-10 sm:text-2xl md:text-2xl lg:text-4xl 2xl:ml-36 2xl:text-6xl">
            <span className="block text-[#1119CB] ">Payment</span>
            <div className="mt-8 flex flex-col">
              <a className="text-xl font-semibold text-black">{product}</a>
              <a className="text-xl font-semibold text-black">
                ￦
                {price
                  .toString()
                  .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
              </a>
            </div>
          </div>
          <div
            id="payment-widget"
            className="m:ml-10 mt-8 sm:mx-10 2xl:mx-36"
          />
          <div className="mb-16 mt-8 flex justify-center">
            <button
              className="h-12 w-48 rounded-lg border-2 border-blue-600 bg-blue-500 text-white"
              onClick={async () => {
                const paymentWidget = paymentWidgetRef.current;

                try {
                  await paymentWidget?.requestPayment({
                    orderId: nanoid(),
                    orderName: "토스 티셔츠 외 2건",
                    customerName: "김토스",
                    customerEmail: "customer123@gmail.com",
                    successUrl: `${window.location.origin}/success`,
                    failUrl: `${window.location.origin}/fail`,
                  });
                } catch (err) {
                  console.log(err);
                }
              }}
            >
              Proceed
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
