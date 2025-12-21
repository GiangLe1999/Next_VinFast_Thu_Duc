"use client";

import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { formatShortDate } from "@/lib/formatData";
import { initialDateRange, initialFilter } from "./filter-initial-data";
import { getAllQuickConsults } from "@/queries/quick-consult.query";
import QuickConsultListTableHeader from "./quick-consult-list-table-header";
import RowSkeleton from "./row-skeleton";
import QuickConsultStatus from "./quick-consult-status";
import QuickConsultListTableFooter from "./quick-consult-list-table-footer";

const QuickConsultListTable = () => {
  const [isClient, setIsClient] = useState(false);

  const [keyword, setKeyword] = useState("");

  const [dateRange, setDateRange] = useState<any>(initialDateRange);

  const startDate = dateRange[0].startDate;
  const endDate = dateRange[0].endDate;

  const [filter, setFilter] = useState(initialFilter);

  const [limit, setLimit] = useState(15);

  const [currentPage, setCurrentPage] = useState(1);

  const { data, isPending } = useQuery({
    queryKey: [
      `admin-quick-consults`,
      keyword,
      startDate,
      endDate,
      filter,
      limit,
      currentPage,
    ],
    queryFn: () =>
      getAllQuickConsults({
        keyword,
        startDate,
        endDate,
        ...(filter.carNames.length > 0 && { carNames: filter.carNames }),
        ...(filter.statuses.length > 0 && { statuses: filter.statuses }),
        limit,
        currentPage,
      }),
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="admin-card pt-6">
      <h2 className="mx-6 font-bold text-xl">Khách hàng cần báo giá</h2>
      <QuickConsultListTableHeader
        keyword={keyword}
        setKeyword={setKeyword}
        dateRange={dateRange}
        setDateRange={setDateRange}
        data={data?.data || []}
        filter={filter}
        setFilter={setFilter}
      />
      <div className="overflow-x-scroll no-scrollbar">
        {isClient && (
          <table className="admin-table w-full text-sm">
            <thead>
              <tr>
                <th className="text-center border border-l-0">STT</th>
                <th className="border text-left pl-3 min-w-[200px] md:min-w-auto">
                  Họ & Tên
                </th>
                <th className="border text-left pl-3 min-w-[200px] md:min-w-auto">
                  SĐT
                </th>
                <th className="border text-left pl-3 min-w-[200px] md:min-w-auto">
                  Email
                </th>
                <th className="border text-left pl-3 min-w-[200px] md:min-w-auto">
                  Dòng xe
                </th>
                <th className="border text-left pl-3 min-w-[200px] md:min-w-auto">
                  Ngày
                </th>
                <th className="border text-left pl-3 min-w-[200px] md:min-w-auto">
                  Trạng thái
                </th>
              </tr>
            </thead>
            {isPending ? (
              <tbody>
                {[...Array(8).keys()].map((item) => (
                  <tr key={item}>
                    <td colSpan={11}>
                      <RowSkeleton />
                    </td>
                  </tr>
                ))}
              </tbody>
            ) : (
              <tbody>
                {data?.data?.map((quickConsult: any, index: number) => (
                  <tr key={index}>
                    <td className="text-center border border-l-0 !pl-0">
                      {index + 1 + limit * (currentPage - 1)}
                    </td>
                    <td className="border">{quickConsult?.name}</td>
                    <td className="border">{quickConsult?.phone}</td>
                    <td className="border">{quickConsult?.email}</td>
                    <td className="border">{quickConsult?.carName}</td>
                    <td className="border">
                      {formatShortDate(quickConsult?.createdAt)}
                    </td>
                    <td className="border border-r-0">
                      <QuickConsultStatus
                        initialStatus={quickConsult?.status}
                        quickConsultId={quickConsult._id}
                        keyword={keyword}
                        startDate={startDate}
                        endDate={endDate}
                        filter={filter}
                        limit={limit}
                        currentPage={currentPage}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        )}
      </div>

      <QuickConsultListTableFooter
        limit={limit}
        setLimit={setLimit}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalDocuments={data?.totalDocuments}
        totalPages={data?.totalPages}
      />
    </div>
  );
};

export default QuickConsultListTable;
