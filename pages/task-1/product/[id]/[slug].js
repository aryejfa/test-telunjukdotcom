import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import moment from "moment";
import axios from "axios";
import { ChevronRightIcon, StarIcon } from "@heroicons/react/solid";
import Container from "../../../../src/components/container";
import Layout from "../../../../src/components/layout";
import SlideProduct from "../../../../src/components/organisms/Slider/SlideProduct";
import DetailProductInHouse from "../../../../src/components/organisms/Category/Marketplace/DetailProduct";
import CardOrderInHouse from "../../../../src/components/organisms/Category/Marketplace/CardOrder";
import CommentInHouse from "../../../../src/components/organisms/Category/Marketplace/Comment";
import FilterItemsInHouse from "../../../../src/components/organisms/Category/Marketplace/FilterItems";
import { MyContext } from "../../../../src/contexts/Context";
export const API_SERVER = process.env.api_v1;

export default function GetDetailProduct({ detailProduct }) {
  // Set Toggle
  const [toggleClick, setToggleClick] = useState(0);

  const { addToCart } = useContext(MyContext);

  const handleClickGetId = (id) => {
    setToggleClick(id);
  };
  //Router Query Check
  const router = useRouter();
  const pages = router.query;
  // Define API
  const details = detailProduct.data;
  const rating = detailProduct.rating;
  const foto = detailProduct.foto;
  const listComment = detailProduct.data_rating;
  const totalRating = detailProduct?.total_rating;
  const filterComment = listComment?.map((row, index) => ({
    id: index + 1,
    fullname: row?.fullname,
    comment: row?.comment,
    rating: row?.rating,
    created_at: moment(row?.created_at).format("ll"),
    foto: row?.foto,
  }));
  const [filterStar, setFilterStar] = useState([]);
  useEffect(() => {
    setFilterStar(filterComment);
  }, []);

  // Membulatkan hasil rating
  const hasil = Math.ceil(rating);

  // Filter Rating
  const handleFilterData = (e) => {
    const filters = e.target.value;
    if (filters === "all") {
      setFilterStar(filterComment);
    } else if (filters === "5") {
      const filter5 = filterComment.filter((item) => item?.rating === 5);
      setFilterStar(filter5);
    } else if (filters === "4") {
      const filter4 = filterComment.filter((item) => item?.rating === 4);
      setFilterStar(filter4);
    } else if (filters === "3") {
      const filter3 = filterComment.filter((item) => item?.rating === 3);
      setFilterStar(filter3);
    } else if (filters === "2") {
      const filter2 = filterComment.filter((item) => item?.rating === 2);
      setFilterStar(filter2);
    } else if (filters === "1") {
      const filter1 = filterComment.filter((item) => item?.rating === 1);
      setFilterStar(filter1);
    }
  };

  return (
    <Layout pageTitle={pages.slug}>
      <Container padding="md:py-2 py-1" margin="mt-28 md:mt-32 lg:mt-[8rem]">
        <div className="lg:block hidden">
          <div
            className="flex items-center gap-2 py-2 md:text-sm text-xs "
            key={details.id_product}
          >
            <Link href="/">
              <a className="text-tertiary font-semibold">Marketplace</a>
            </Link>
            <ChevronRightIcon
              className="w-3 h-3 text-tertiary "
              aria-hidden="true"
            />
            <Link href={`/`}>
              <a className="text-tertiary font-semibold">
                {details.name_categories}
              </a>
            </Link>
            <ChevronRightIcon
              className="w-3 h-3 text-tertiary "
              aria-hidden="true"
            />
            <Link href="/">
              <a className="text-primary font-semibold ">{details.name}</a>
            </Link>
          </div>
        </div>
        <div className="lg:hidden">
          <div
            className="flex items-center gap-2 py-2 md:text-sm text-xs "
            key={details.id_product}
          >
            <Link href="/">
              <a className="text-tertiary font-semibold">Marketplace</a>
            </Link>
            <ChevronRightIcon
              className="w-3 h-3 text-tertiary "
              aria-hidden="true"
            />
            <Link href="/">
              <a className="text-primary font-semibold ">{details.name}</a>
            </Link>
          </div>
        </div>
        {/* Product */}
        <div className="grid grid-cols-1 gap-1 lg:grid lg:gap-4 lg:grid-cols-4">
          <div className="col-span-2 lg:grid lg:gap-1 lg:grid-cols-1">
            <div className="rounded mt-5">
              <SlideProduct foto={foto} />
            </div>
          </div>
          <div className="text-sm mt-5 col-span-2 lg:col-span-1 lg:grid lg:gap-1 lg:grid-cols-1">
            <DetailProductInHouse
              details={details}
              rating={rating}
              foto={foto}
              totalRating={totalRating}
            />
          </div>
          {/* Add Cart */}
          <CardOrderInHouse product={details} addToCart={addToCart} />
        </div>

        <div className="grid grid-cols-1 gap-1 md:grid-cols-4 mt-6">
          <div className="col-span-3 flex items-center md:gap-10 gap-4 md:pl-8 pl-4  ">
            <div className="text-center">
              <h1 className="md:text-4xl text-2xl font-semibold text-tertiary">
                {hasil}
              </h1>
              <div className="flex justify-center pt-2">
                {[...Array(hasil)].map((i, index) => {
                  const ratings = i + 1;
                  return (
                    <div key={index}>
                      <StarIcon
                        key={ratings + 1}
                        className="w-5 h-5 text-primary"
                      />
                    </div>
                  );
                })}
              </div>
              <h5 className="md:text-sm text-xs text-secondary font-semibold">
                ({listComment.length} Ulasan)
              </h5>
            </div>
            <div className="lg:block hidden">
              <FilterItemsInHouse
                handleFilterData={handleFilterData}
                toggleClick={toggleClick}
                handleClickGetId={handleClickGetId}
                listComment={filterComment}
              />
            </div>
          </div>
        </div>
        <div className="lg:hidden">
          <FilterItemsInHouse
            handleFilterData={handleFilterData}
            toggleClick={toggleClick}
            handleClickGetId={handleClickGetId}
            listComment={filterComment}
          />
        </div>
        <CommentInHouse listComment={filterStar} />
      </Container>
    </Layout>
  );
}

export const getServerSideProps = async (context) => {
  const Token =
    "sv1ozl1dv1CEXzlk9i7uckJlexnBl3nuV2GMtoQha1XmYC6adVM88XsuYBaDw4j66LesPpMlWmPysJC0";
  const id = context.query.id;
  const slug = context.query.slug;

  if (!Token) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
    };
  }

  const res = await axios
    .get(`${API_SERVER}marketplace/detail_product/${id}/${slug}`, {
      headers: {
        Authorization: `Bearer ${Token}`,
      },
      httpsAgent: new require("https").Agent({ rejectUnauthorized: false }),
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });

  const detailProduct = res.data;

  return {
    props: {
      detailProduct: detailProduct || null,
    },
  };
};
