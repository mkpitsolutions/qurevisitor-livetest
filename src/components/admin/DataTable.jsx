import React from "react";
import { useReactTable } from "@tanstack/react-table";
import { DndContext, MouseSensor, TouchSensor, KeyboardSensor, useSensor, useSensors } from "@dnd-kit/core";
import { closestCenter, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { arrayMove } from "array-move";
import { Button, Badge, Select, SelectTrigger, SelectContent, SelectItem, DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuCheckboxItem, Label, Tabs, TabsList, TabsTrigger, TabsContent } from "@shadcn/ui";  // Updated ShadCN import
import { PlusIcon, ColumnsIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, ChevronsLeftIcon, ChevronsRightIcon } from "@heroicons/react/solid";

export function DataTable({ data: initialData }) {
  const [data, setData] = React.useState(() => initialData);
  const [rowSelection, setRowSelection] = React.useState({});
  const [columnVisibility, setColumnVisibility] = React.useState({});
  const [columnFilters, setColumnFilters] = React.useState([]);
  const [sorting, setSorting] = React.useState([]);
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const sortableId = React.useId();
  const sensors = useSensors(
    useSensor(MouseSensor, {}),
    useSensor(TouchSensor, {}),
    useSensor(KeyboardSensor, {})
  );

  const dataIds = React.useMemo(
    () => data?.map(({ id }) => id) || [],
    [data]
  );

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
      pagination,
    },
    getRowId: (row) => row.id.toString(),
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  });

  function handleDragEnd(event) {
    const { active, over } = event;
    if (active && over && active.id !== over.id) {
      setData((data) => {
        const oldIndex = dataIds.indexOf(active.id);
        const newIndex = dataIds.indexOf(over.id);
        return arrayMove(data, oldIndex, newIndex);
      });
    }
  }

  return (
    <Tabs defaultValue="outline" className="flex w-full flex-col justify-start gap-6">
      <div className="flex items-center justify-between p-4 lg:p-6">
        <Label htmlFor="view-selector" className="sr-only">
          View
        </Label>
        <Select defaultValue="outline">
          <SelectTrigger className="flex items-center w-fit">
            <span className="hidden lg:inline">Select a view</span>
            <ChevronDownIcon className="ml-2" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="outline">Outline</SelectItem>
            <SelectItem value="past-performance">Past Performance</SelectItem>
            <SelectItem value="key-personnel">Key Personnel</SelectItem>
            <SelectItem value="focus-documents">Focus Documents</SelectItem>
          </SelectContent>
        </Select>

        <TabsList className="hidden lg:flex gap-4">
          <TabsTrigger value="outline">Outline</TabsTrigger>
          <TabsTrigger value="past-performance" className="gap-1">
            Past Performance
            <Badge variant="secondary" className="flex items-center justify-center rounded-full bg-muted-foreground/30">
              3
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="key-personnel" className="gap-1">
            Key Personnel
            <Badge variant="secondary" className="flex items-center justify-center rounded-full bg-muted-foreground/30">
              2
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="focus-documents">Focus Documents</TabsTrigger>
        </TabsList>

        <div className="flex items-center gap-2">
          <DropdownMenu>
            <div asChild>
              <Button variant="outline" size="sm" className="flex items-center">
                <ColumnsIcon className="mr-2" />
                <span className="hidden lg:inline">Customize Columns</span>
                <span className="lg:hidden">Columns</span>
                <ChevronDownIcon className="ml-2" />
              </Button>
            </div>
            <DropdownMenuContent align="end" className="w-56">
              {table.getAllColumns()
                .filter((column) => typeof column.accessorFn !== "undefined" && column.getCanHide())
                .map((column) => (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) => column.toggleVisibility(!!value)}
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="outline" size="sm" className="flex items-center">
            <PlusIcon className="mr-2" />
            <span className="hidden lg:inline">Add Section</span>
          </Button>
        </div>
      </div>

      {/* Outline Tab Content */}
      <TabsContent value="outline" className="relative flex flex-col gap-4 overflow-auto p-4 lg:p-6">
        <div className="overflow-hidden rounded-lg border">
          <DndContext
            collisionDetection={closestCenter}
            modifiers={[restrictToVerticalAxis]}
            onDragEnd={handleDragEnd}
            sensors={sensors}
            id={sortableId}
          >
            <table className="min-w-full">
              <thead className="sticky top-0 z-10 bg-muted">
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <th key={header.id} className="p-2 text-left font-medium text-gray-700">
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>

              <tbody>
                {table.getRowModel().rows.length ? (
                  <SortableContext items={dataIds} strategy={verticalListSortingStrategy}>
                    {table.getRowModel().rows.map((row) => (
                      <DraggableRow key={row.id} row={row} />
                    ))}
                  </SortableContext>
                ) : (
                  <tr>
                    <td colSpan={columns.length} className="h-24 text-center text-gray-500">
                      No results.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </DndContext>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between p-4">
          <div className="hidden flex-1 text-sm text-muted-foreground lg:flex">
            {table.getFilteredSelectedRowModel().rows.length} of{" "}
            {table.getFilteredRowModel().rows.length} row(s) selected.
          </div>

          <div className="flex w-full items-center gap-8 lg:w-fit">
            <div className="hidden items-center gap-2 lg:flex">
              <Label htmlFor="rows-per-page" className="text-sm font-medium">
                Rows per page
              </Label>
              <Select
                value={`${table.getState().pagination.pageSize}`}
                onValueChange={(value) => table.setPageSize(Number(value))}
              >
                <SelectTrigger className="w-20" id="rows-per-page">
                  <span>{table.getState().pagination.pageSize}</span>
                </SelectTrigger>
                <SelectContent side="top">
                  {[10, 20, 30, 40, 50].map((pageSize) => (
                    <SelectItem key={pageSize} value={`${pageSize}`}>
                      {pageSize}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex w-fit items-center justify-center text-sm font-medium">
              Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
            </div>

            <div className="ml-auto flex items-center gap-2 lg:ml-0">
              <Button
                variant="outline"
                className="hidden h-8 w-8 p-0 lg:flex"
                onClick={() => table.setPageIndex(0)}
                disabled={!table.getCanPreviousPage()}
              >
                <ChevronsLeftIcon className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                className="size-8"
                size="icon"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                <ChevronLeftIcon className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                className="size-8"
                size="icon"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                <ChevronRightIcon className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                className="hidden size-8 lg:flex"
                size="icon"
                onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                disabled={!table.getCanNextPage()}
              >
                <ChevronsRightIcon className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
}
