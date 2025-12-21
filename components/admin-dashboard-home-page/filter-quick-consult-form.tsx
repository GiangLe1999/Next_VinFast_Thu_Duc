"use client";

import { Dispatch, FC, SetStateAction } from "react";

interface Props {
  carNames: any;
  statuses: any;
  filter: any;
  setFilter: Dispatch<SetStateAction<any>>;
}

const FilterQuickConsultForm: FC<Props> = ({
  carNames,
  statuses,
  filter,
  setFilter,
}) => {
  return (
    <div className="admin-card-body">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Status Filter */}
        <div>
          <h4 className="text-sm font-bold border-b pb-2 mb-2 text-gray-700 uppercase">
            Trạng thái
          </h4>
          <ul className="space-y-1 max-h-[200px] overflow-y-auto custom-scrollbar pr-2">
            {statuses?.map((status: string) => {
              if (status)
                return (
                  <label
                    key={status}
                    className="flex items-center gap-2 py-1.5 text-sm cursor-pointer hover:bg-gray-50 rounded transition-colors select-none"
                    htmlFor={status}
                  >
                    <div className="relative flex items-center">
                      <input
                        type="checkbox"
                        name="status"
                        checked={filter.statuses.includes(status)}
                        id={status}
                        className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-gray-300 shadow-sm checked:bg-primary checked:border-primary transition-all"
                        onChange={() => {
                          if (filter.statuses.includes(status)) {
                            return setFilter((prev: any) => ({
                              ...prev,
                              statuses: prev.statuses.filter(
                                (item: any) => item !== status
                              ),
                            }));
                          }

                          setFilter((prev: any) => ({
                            ...prev,
                            statuses: [...prev.statuses, status],
                          }));
                        }}
                      />
                      <svg
                        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100 text-white w-3 h-3 transition-opacity"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <path
                          d="M3 8L6 11L11 3.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span className="truncate text-gray-700">{status}</span>
                  </label>
                );
            })}
          </ul>
        </div>

        {/* Car Name Filter */}
        <div>
          <h4 className="text-sm font-bold border-b pb-2 mb-2 text-gray-700 uppercase">
            Dòng xe
          </h4>
          <ul className="space-y-1 max-h-[300px] overflow-y-auto custom-scrollbar pr-2">
            {carNames?.map((carName: string) => {
              if (carName)
                return (
                  <label
                    key={carName}
                    className="flex items-center gap-2 py-1.5 text-sm cursor-pointer hover:bg-gray-50 rounded transition-colors select-none"
                    htmlFor={carName}
                  >
                    <div className="relative flex items-center">
                      <input
                        type="checkbox"
                        name="carName"
                        checked={filter.carNames.includes(carName)}
                        id={carName}
                        className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-gray-300 shadow-sm checked:bg-primary checked:border-primary transition-all"
                        onChange={() => {
                          if (filter.carNames.includes(carName)) {
                            return setFilter((prev: any) => ({
                              ...prev,
                              carNames: prev.carNames.filter(
                                (item: any) => item !== carName
                              ),
                            }));
                          }

                          setFilter((prev: any) => ({
                            ...prev,
                            carNames: [...prev.carNames, carName],
                          }));
                        }}
                      />
                      <svg
                        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100 text-white w-3 h-3 transition-opacity"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <path
                          d="M3 8L6 11L11 3.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span className="truncate text-gray-700">{carName}</span>
                  </label>
                );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FilterQuickConsultForm;