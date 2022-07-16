import { ShoppingCartIcon } from "@heroicons/react/solid";
import Link from "next/link";
import React from "react";
import NumberFormat from "react-number-format";

export default function CardOrderInHouse({ product }) {
  return (
    <>
      <div className="text-sm row-span-2 mt-5 pb-5 ">
        <div className="rounded-lg overflow-hidden shadow-lg">
          <div className="px-4 py-2">
            <h3 className="md:text-xl text-lg py-2 font-semibold">
              {product.categories_package == 2 ? "Platinum" : "Gold"}
            </h3>

            <NumberFormat
              value={product.price.slice(0, -2)}
              thousandSeparator="."
              decimalSeparator=","
              prefix="Rp. "
              displayType="text"
              className="md:text-xl text-lg  text-primary font-semibold"
            />
            <span className="text-sm text-tertiary">/pcs</span>
            <div className="text-tertiary text-xs pt-2">
              <Link href="/s&k">
                <a className=" py-2 text-primary">Syarat &amp; Ketentuan</a>
              </Link>
              <p className="pt-2 text-justify">
                Pembeli wajib bertransaksi melalui prosedur transaksi yang telah
                ditetapkan oleh JJ Group. Pembeli melakukan pembayaran dengan
                menggunakan metode pembayaran yang sebelumnya telah dipilih oleh
                Pembeli, dan kemudian JJ Group akan meneruskan dana ke pihak
                Penjual apabila tahapan transaksi jual beli pada sistem JJ Group
                telah selesai. Pengguna disarankan membaca dengan seksama karena
                dapat berdampak kepada hak dan kewajiban Pengguna di bawah
                hukum.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 bg-pattern-1 px-12">
            <div className=" flex items-center justify-center ">
              <Link href={`/`} passHref>
                <a className=" flex items-center justify-center">
                  <button
                    type="submit"
                    className=" justify-center py-2 px-1 border border-transparent shadow-sm text-1xl text-xs font-semibold text-white  focus:outline-none inline-flex gap-2 items-center"
                  >
                    <ShoppingCartIcon
                      className="w-5 h-5 text-white"
                      aria-hidden="true"
                    />
                    Order
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
