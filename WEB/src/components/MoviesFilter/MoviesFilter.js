import React from "react";
import { Button, TextField } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import styles from "./MoviesFilter.module.css";

const MoviesFilter = ({
  totalPages,
  movieName,
  setMovieName,
  currentPage,
  setCurrentPage,
  itemsPerPage,
  setItemsPerPage
}) => (
  <div className={styles.filterContainer}>
    <TextField
      value={movieName}
      fullWidth
      onChange={({ target: { value } }) => setMovieName(value)}
      placeholder="Search"
    />
    <div className={styles.pagingContainer}>
      <div>
        <InputLabel>Page</InputLabel>
        <div>
          <Button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage + -1)}
          >
            <ArrowBackIcon />
          </Button>
          {currentPage} / {totalPages}
          <Button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            <ArrowForwardIcon />
          </Button>
        </div>
      </div>
      <div>
        <FormControl className={styles.formControl}>
          <InputLabel>Page size</InputLabel>
          <Select
            value={itemsPerPage}
            onChange={({ target: { value } }) => setItemsPerPage(value)}
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={30}>30</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  </div>
);
export default MoviesFilter;
