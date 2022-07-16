import { useRouter } from "next/router";
import "react-multi-carousel/lib/styles.css";
import DataTable from "react-data-table-component";
import React, {
  useState,
  useEffect,
  useMemo,
  useContext,
  useCallback,
} from "react";
import Container from "../src/components/container";
import Layout from "../src/components/layout";
import { MyContext } from "../src/contexts/Context";
import ReactPaginate from "react-paginate";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";

const FilterComponent = ({ filterText, onFilter, onOrdering }) => (
  <>
    <div className="flex">
      <div className="absolute left-0 top-1.5 -ml-2 lg:ml-2">
        <select
          onChange={onOrdering}
          className="border-2 border-gray-300 bg-white h-10 rounded-lg text-sm focus:outline-none"
        >
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>
    </div>
    <div className="relative text-gray-600 h-auto  md:w-[15rem] lg:w-[20rem]">
      <input
        className=" md:w-[15rem] lg:w-[20rem] border-2 border-gray-300 bg-white h-10 pl-[1rem] pr-8 rounded-lg text-sm focus:outline-none"
        type="search"
        name="search"
        value={filterText}
        onChange={onFilter}
        placeholder="Search filter data"
      />
      <button
        type="submit"
        className="absolute right-0 top-0 mt-3 mr-2 flex"
        href=""
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
          className="pb-1 h-6 w-6 text-gray-400 hover:text-gray-500"
        >
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </button>
    </div>
  </>
);

export default function Task2() {
  const { locale } = useRouter();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterText, setFilterText] = useState("");
  const { listfetchUsers } = useContext(MyContext);

  useEffect(() => {
    fetchUsers(1);
  }, []);

  const fetchUsers = useCallback(async (page, size = perPage) => {
    setLoading(true);

    const dataJson = await listfetchUsers(page, size);

    setData(dataJson.data);
    setTotalRows(dataJson.total);
    setLoading(false);
  }, []);

  const handlePerRowsChange = async (newPerPage, page) => {
    fetchUsers(page, newPerPage);
    setPerPage(newPerPage);
  };

  const subHeaderComponent = useMemo(() => {
    return (
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        filterText={filterText}
        onOrdering={(val) =>
          handlePerRowsChange(val.target.value, setCurrentPage(1))
        }
      />
    );
  }, [filterText]);

  const CustomPagination = () => {
    const count = Math.ceil(totalRows / perPage);
    return (
      <ReactPaginate
        pageCount={count || 1}
        forcePage={currentPage !== 0 ? currentPage - 1 : 0}
        onPageChange={(page) => handlePagination(page)}
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        breakLabel={"..."}
        breakClassName={"break-me"}
        previousLabel={<ChevronLeftIcon className="h-5 w-5" />}
        nextLabel={<ChevronRightIcon className="h-5 w-5" />}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
      />
    );
  };

  const handlePagination = (page) => {
    setCurrentPage(page.selected + 1);
    fetchUsers(page.selected, perPage);
  };

  const columns = useMemo(() => [
    {
      id: "title",
      name: <div style={{ fontSize: 14, fontWeight: "bold" }}>Title</div>,
      selector: (row) => row.title,
      cell: (row) => row.title,
      sortable: true,
    },
    {
      id: "firstName",
      name: <div style={{ fontSize: 14, fontWeight: "bold" }}>First Name</div>,
      selector: (row) => row.firstName,
      cell: (row) => row.firstName,
      sortable: true,
    },
    {
      id: "lastName",
      name: <div style={{ fontSize: 14, fontWeight: "bold" }}>Last Name</div>,
      selector: (row) => row.lastName,
      cell: (row) => row.lastName,
      sortable: true,
    },
    {
      id: "picture",
      name: <div style={{ fontSize: 14, fontWeight: "bold" }}>Avatar</div>,
      selector: (row) => row.picture,
      cell: (row) => (
        <img height="30px" width="30px" alt={row.firstName} src={row.picture} />
      ),
    },
  ]);

  return (
    <>
      <Layout pageTitle="Task 3">
        <Container
          padding="lg:pt-16"
          margin="mt-[7rem] sm:mt-31 md:mt-31 lg:mt-[4rem]"
        >
          <DataTable
            title={
              locale === "en" ? "Employees - Task 2" : "Para karyawan - Tugas 3"
            }
            columns={columns}
            data={data.filter((item) => {
              return (
                JSON.stringify(item)
                  .toLowerCase()
                  .indexOf(filterText.toLowerCase()) !== -1
              );
            })}
            progressPending={loading}
            pagination
            paginationServer
            paginationComponent={CustomPagination}
            subHeader
            subHeaderComponent={subHeaderComponent}
            defaultSortFieldId="title"
            defaultSortAsc={true}
            striped
          />
          <h5 className="text-center mb-1 text-sm">{`Row per page ${perPage} :  ${
            Math.ceil(perPage * currentPage + 1) - perPage
          } - ${
            Math.ceil(totalRows / perPage) === currentPage
              ? totalRows
              : Math.ceil(perPage * currentPage)
          } of ${totalRows}`}</h5>
        </Container>
      </Layout>
    </>
  );
}
