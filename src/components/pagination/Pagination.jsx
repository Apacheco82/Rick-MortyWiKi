import React from "react"
import ReactPaginate from "react-paginate"

const Pagination = ({ info, pageNumber, setPageNumber }) => {
  const handlePageChange = (data) => {
    setPageNumber(data.selected + 1)
  }

  return (
    
    <div className="container my-5 col-lg-8 col-12 align-items-center justify-content-center">
      <ReactPaginate
        className="pagination justify-content-center gap-4 "
        pageCount={info?.pages}
        previousLabel="Prev"
        previousClassName="btn btn-warning"
        nextClassName="btn btn-warning"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        onPageChange={handlePageChange}
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        // breakLabel={"..."}
      />
    </div>
  )
}

export default Pagination
