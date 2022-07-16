import { StarIcon } from "@heroicons/react/solid";

export default function CommentInHouse({ listComment }) {
  return (
    <>
      <div className="grid grid-cols-1 gap-1 lg:grid lg:gap-4 lg:grid-cols-4 mt-6 ">
        {listComment?.map((row, index) => {
          // const starRating = Math.ceil(row?.rating);
          return (
            <div
              className="col-span-3 grid md:gap-1 md:grid-cols-1"
              key={index + 1}
            >
              <div>
                <div className="flex">
                  <div className="px-3">
                    <img src="/icon/user-1.svg" width={30} height={30} />
                  </div>

                  <div className="w-full">
                    <div className="grid md:grid-cols-2 items-center pb-2">
                      <div>
                        <h3 className="text-sm font-semibold text-blacks">
                          {row?.fullname}
                        </h3>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            {[...Array(row?.rating)].map((imgs, i) => {
                              // const ratings = 5 - 1;
                              const id = i + 1;

                              return (
                                <StarIcon
                                  key={id}
                                  className={"w-5 h-5 text-primary"}
                                />
                              );
                            })}
                          </div>
                          <p className="text-xs italic text-tertiary">
                            {row?.created_at}
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-end text-tertiary text-xs">
                        <p>Report</p>
                      </div>
                    </div>
                    <div className="  rounded-lg p-4 bg-[#F3F4F5]">
                      <p className="text-xs text-blacks">{row?.comment}</p>
                    </div>
                    <div className="flex gap-3 py-2">
                      {row?.foto?.map((imgs) => {
                        return (
                          <img
                            key={imgs?.id}
                            src={imgs?.file}
                            className="w-18 h-14 rounded"
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
