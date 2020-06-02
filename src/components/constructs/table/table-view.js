import React from "react";

import { useTable, useSortBy } from "react-table";

import { T, TR, TH, TD, TB, THEAD } from "./table-style";

const Table = ({ tableColumns, tableData, onClick }) => {
  const columns = React.useMemo(() => tableColumns, [tableColumns]);
  const data = React.useMemo(() => {
    return tableData;
  }, [tableData]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data }, useSortBy);

  return (
    <>
      <T {...getTableProps()}>
        <THEAD>
          {headerGroups.map((headerGroup) => (
            <TR {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <TH {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                </TH>
              ))}
            </TR>
          ))}
        </THEAD>
        <TB {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <TR onClick={onClick} {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <TD {...cell.getCellProps()}>{cell.render("Cell")}</TD>
                  );
                })}
              </TR>
            );
          })}
        </TB>
      </T>
    </>
  );
};

export default Table;
