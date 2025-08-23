'use client';

import { useState } from 'react';
import Link from 'next/link';
import Lfx_orgs from './Lfx_orgs';
import Issues from './Issues';
import SearchFilters from './filters';
import IssueFilter from './issueFilter';
// import IconExternalLink
import IconExternalLink from '@tabler/icons-react'

export const Dashboard = () => {
  const [filters, setFilters] = useState({
    technologies: [],
    lfx_years: [],
    topics: [],
  });

  const [issueFilters, setIssueFilters] = useState({
    state: [],
    label: [],
    organizations: [],
  });

  return (
    <div className="flex flex-1 mx-auto min-h-screen bg-transparent">
      <div className="flex flex-col lg:flex-row border w-full">
        {/* Left: Issues section */}
        <div className="flex-1 h-full overflow-auto">
          <div className="p-4 md:p-6 rounded-md border-neutral-200 dark:border-neutral-700 bg-white dark:bg-transparent flex flex-col gap-4 shadow-lg">
            <div className="flex justify-between items-center gap-2 w-5/6 m-auto pt-5 sm:pt-14">
              <h2 className="text-lg sm:text-xl lg:text-xl font-bold text-gray-800 dark:text-white">
                Top Issues
              </h2>
              <Link
                href="/lfx-issues"
                className="text-sm sm:text-base text-blue-500 hover:text-blue-700 font-semibold flex items-center gap-1"
              >
                <IconExternalLink className="h-5 w-5" />
                View All
              </Link>
            </div>

            <div className="sticky top-0">
              <IssueFilter onFilterChange={setIssueFilters} />
            </div>

            <div className="overflow-y-auto rounded-lg shadow-md h-[330px] sm:h-[400px] lg:h-full">
              <Issues filters={issueFilters} />
            </div>
          </div>
        </div>

        {/* Right: LFX Orgs section */}
        <div className="flex-1 h-full overflow-auto">
          <div className="p-4 md:p-6 rounded-md border-neutral-200 dark:border-neutral-700 bg-white dark:bg-transparent flex flex-col gap-4 shadow-lg">
            <div className="flex justify-between items-center gap-2 w-5/6 m-auto pt-2 sm:pt-14">
              <h2 className="text-lg sm:text-xl lg:text-xl font-bold text-gray-800 dark:text-white">
                Top LFX Organizations
              </h2>
              <Link
                href="/lfx-orgs"
                className="text-sm sm:text-base text-blue-500 hover:text-blue-700 font-semibold flex items-center gap-1"
              >
                <IconExternalLink className="h-5 w-5" />
                View All
              </Link>
            </div>

            <div className="sticky top-4 bg-black rounded-3xl my-4">
              <SearchFilters onFilterChange={setFilters} />
            </div>

            <div className="overflow-y-auto rounded-md shadow-md h-[300px] sm:h-[400px] lg:h-full">
              <Lfx_orgs top={true} filters={filters} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
