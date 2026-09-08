import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { PublicationCard } from "@/components/PublicationCard";
import { publications } from "@/data/publications";

export const metadata: Metadata = {
  title: "Publications",
};

export default function PublicationsPage() {
  const sorted = [...publications].sort((a, b) => b.year - a.year);

  return (
    <div>
      <PageHeader
        title="Publications"
        description="Selected papers, theses, and related scholarly work."
      />

      <div className="space-y-8">
        {sorted.map((pub) => (
          <PublicationCard key={pub.title} pub={pub} />
        ))}
      </div>
    </div>
  );
}
