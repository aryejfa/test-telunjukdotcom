import { ShareIcon, StarIcon } from "@heroicons/react/solid";
import swal from "sweetalert";

export default function DetailProductInHouse({ details, rating, totalRating }) {
  const hasil = Math.ceil(rating);
  return (
    <>
      <div className="px-6 py-1 text-2xl">
        <h3 className="md:text-xl pt-2 text-lg font-semibold">
          {details.name}
        </h3>
        <div className="flex gap-1 items-center">
          <h6 className="text-xs font-semibold text-tertiary">{hasil}</h6>
          <div className="pr-1">
            <StarIcon className="w-5 h-5 text-primary" aria-hidden="true" />
          </div>
          <div className="bg-secondary h-2 w-2 rounded-full"></div>
          <h6 className="text-xs font-semibold text-tertiary px-2">
            {totalRating} Pesanan
          </h6>
        </div>
        <h6 className="text-xs py-2">
          Kategori :{" "}
          <span className="text-primary font-semibold">
            {details.name_categories}
          </span>
        </h6>

        <div className="border rounded-lg py-3 px-3">
          <h5 className="text-sm font-semibold"> Deskripsi Produk</h5>
          <p className="text-xs text-tertiary pt-2">{details.description}</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex py-4 items-center gap-1">
            <button
              className="flex items-center gap-2 border border-primary rounded-xl px-2 py-1"
              onClick={() =>
                navigator.clipboard.writeText(
                  `https://testnet123.com/marketplace/product/${details?.id_package}/${details?.slug}`
                ) + swal("Link Coppied", "", "success")
              }
            >
              <p className="text-xs text-tertiary">Bagikan</p>

              <ShareIcon className="h-4 w-4 text-tertiary" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-1"></div>
    </>
  );
}
