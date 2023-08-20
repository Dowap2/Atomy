import React, { useState } from "react";
import styled from "styled-components";
import { Document, Page } from "react-pdf";
import atomyPDF from "./img/atomyPDF.pdf";

import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const IntroduceAtomyComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 2px solid ${(props) => props.theme.atomyBlue};
  border-bottom: 2px solid ${(props) => props.theme.atomyBlue};
  margin-top: 20px;
  padding: 20px 0 10px 0;
`;
const AtomyPDFComponent = styled.div`
  width: 100vw;
  height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const AtomyPDFButtonComponent = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  align-items: center;
  margin-top: 50px;
  color: ${(props) => props.theme.atomyDarkGray};
  text-align: center;
`;
const PDFButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 30px;
  border-radius: 50px;
  margin: 10px;
  border: 2px solid ${(props) => props.theme.atomyBlue};
`;

export function IntroduceAtomy() {
  const [numPages, setNumPages] = useState(null); // 총 페이지수
  const [pageNumber, setPageNumber] = useState(1); // 현재 페이지

  function onDocumentLoadSuccess(numPages) {
    console.log(`numPages ${numPages}`);
    setNumPages(numPages);
  }

  return (
    <IntroduceAtomyComponent>
      <AtomyPDFComponent>
        <Document file={atomyPDF} onLoadSuccess={onDocumentLoadSuccess}>
          <Page
            width={500}
            pageNumber={pageNumber}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </Document>
      </AtomyPDFComponent>
      <AtomyPDFButtonComponent>
        <PDFButton
          onClick={() => {
            setPageNumber(pageNumber === 1 ? pageNumber : pageNumber - 1);
          }}
        >
          이전
        </PDFButton>
        <PDFButton
          onClick={() => {
            setPageNumber(
              numPages === pageNumber ? pageNumber : pageNumber + 1
            );
          }}
        >
          다음
        </PDFButton>
      </AtomyPDFButtonComponent>
    </IntroduceAtomyComponent>
  );
}
