'use client'

import React, { useEffect, useState } from "react";
import { BentoGrid, } from "@/components/ui/bento-grid";
import { Organisation } from "@/lib/type";
import { ClipLoader } from "react-spinners";
import { fetchLFXOrganizations } from "@/actions/lfx";

export default function Lfx_orgs({ top, filters }: { top?: boolean; filters?: any }) {
  const [items, setItems] = useState<Organisation[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);

  useEffect(() => {
    setPage(1);
    setHasMore(true);
  }, [filters]);

  useEffect(() => {
    const fetchOrgs = async () => {
      try {
        setLoading(true);
        const response = await fetchLFXOrganizations(top, { ...filters, page });
        if (response.length === 0) {
          setHasMore(false);
        } else {
          setItems((prev) => (page === 1 ? response : [...prev, ...response]));
        }
      } catch (error) {
        console.error("Error fetching Lfx organizations:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchOrgs();
  }, [filters, page, top]);

  const loadMore = () => setPage((prev) => prev + 1);

  return (
    <div>
      <BentoGrid className="mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            id={item._id}
            title={item.organisation}
            description={item.description}
            header={<Skeleton item={item} />}
            icon={item.image_url}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            url={item.github}
            technologies={item.technologies}
            twitter_url={item.twitter_url}
            github_url={item.github}
            blog_url={item.blog_url}
            website_url={item.url}
            email={item.contact_email}
          />
        ))}
      </BentoGrid>

      {loading && (
        <div className="flex justify-center items-center w-full h-full text-center my-4">
          <ClipLoader color="#fff" loading={loading} size={50} />
        </div>
      )}

      {!loading && hasMore && (
        <div className="flex justify-center mt-4">
          <button
            onClick={loadMore}
            className="px-6 py-2 bg-green-700 text-white rounded-full hover:bg-green-800"
          >
            Load More
          </button>
        </div>
      )}

      {!hasMore && (
        <div className="flex justify-center mt-4 text-gray-400">
          No more organizations to load.
        </div>
      )}
    </div>
  );
}

const Skeleton = ({ item }: { item: any }) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-transparent items-center justify-center">
    <div className="flex items-center justify-center bg-gray-300 rounded-lg p-2">
      <img src={item.image_url} className="h-16" alt={item.organisation || "Org Logo"} />
    </div>
  </div>
);
