"use client";

import React from "react";
import { Pagination, PaginationItem } from "@mui/material";
import { makeStyles } from "@mui/styles";

// const useStyles = makeStyles((theme) => ({
//   selected: {
//     backgroundColor: "transparent",
//     color: "#ffffff",
//     border: "solid 1px #FF2423",
//     borderBottom: "solid 4px #FF2423",
//     borderRadius: "unset",
//   },
// }));

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiPaginationItem-root": {
      color: "#fff",
      borderColor: "#fff",
      borderRadius: "unset",
      "&:hover:not(.Mui-selected)": {
        color: "#000",
        backgroundColor: "#fff",
      },
    },
    "& .Mui-selected": {
      backgroundColor: "transparent",
      color: "#ffffff",
      border: "solid 1px #FF2423",
      borderBottom: "solid 4px #FF2423",
      borderRadius: "unset",
      "&:hover": {
        backgroundColor: "#FF2423",
        border: "solid 1px #fff",
        borderBottom: "solid 1px #fff",
      },
    },
  },
}));

const GLPagination = ({ pages, setPage }) => {
  const classes = useStyles();
  const handlePageChange = ({ e, page }) => {
    console.log("page", page);
    console.log("pages", pages);
    setPage(page);
  };

  return (
    <div className="my-4 flex items-center justify-center">
      <Pagination
        count={pages}
        onChange={handlePageChange}
        className={classes.root}
        variant="outlined"
        shape="rounded"
        renderItem={(item) => (
          <PaginationItem {...item} className={classes.item} />
        )}
      />
    </div>
  );
};

export default GLPagination;
