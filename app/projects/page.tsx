import { SuspenseLoading } from "@/components/main/loading/loading";

import { format } from "date-fns";
import { nb } from "date-fns/locale";
import { Metadata } from "next";
import { Suspense } from "react";
import { getAllProjects } from "./api";

export const metadata: Metadata = {
  title: "Projects",
  description: "My projects and work",
};
export default async function ProjectPage() {
  const projects = await getAllProjects();

  return (
    <Suspense fallback={<SuspenseLoading />}>
      <div style={{ minHeight: "calc(100vh - 100px - 200px)" }}>
        <h1
          style={{
            fontSize: "2rem",
            marginBottom: "1.2rem",
            textAlign: "center",
          }}
        >
          Projects
        </h1>
        <p
          style={{
            fontSize: "1rem",
            marginBottom: "1rem",
            textAlign: "center",
          }}
        >
          ⚠️👷🏻 Under construction 🛠️⚠️
        </p>
      </div>
    </Suspense>
  );
}

export const getSanityDate = (publishedDate: string) => {
  return format(new Date(publishedDate), "dd.MM.yyyy", {
    locale: nb,
  });
};
