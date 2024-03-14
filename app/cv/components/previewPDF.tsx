"use client";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
const options = {
  cMapUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/cmaps/`,
};
export const PreviewPDF = () => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [pageNumber, setPageNumber] = useState(1); // In case your PDF has multiple pages

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setLoading(false);
    setNumPages(numPages);
    setPageNumber(1);
  }
  return (
    <div>
      {loading && <LoadingResume />}

      <Document
        file="/resume.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
        onLoad={() => setLoading(false)}
        loading={<></>}
        options={options}
        className={"resume__file"}
      >
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          <Page pageNumber={pageNumber} />
        </a>
      </Document>
    </div>
  );
};

const LoadingResume = () => {
  return (
    <div className="loading-resume">
      <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
      Loading Resume
    </div>
  );
};
