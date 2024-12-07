// "use client";

// import { getDocument, GlobalWorkerOptions, TextLayer } from "pdfjs-dist";
// import { useEffect, useRef } from "react";

// import "@react-pdf-viewer/core/lib/styles/index.css";
// import "@react-pdf-viewer/default-layout/lib/styles/index.css";
// import "pdfjs-dist/web/pdf_viewer.css";

// export default function Home() {
//   const canvasRef = useRef(null);
//   const textLayerRef = useRef(null);
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const loadPdf = async () => {
//       const url = "/sample.pdf";

//       GlobalWorkerOptions.workerSrc =
//         "https://unpkg.com/pdfjs-dist@4.6.82/build/pdf.worker.min.mjs";

//       const loadingTask = getDocument(url);
//       loadingTask.promise.then(
//         (pdf) => {
//           console.log("PDF loaded");

//           const pageNumber = 1;
//           pdf.getPage(pageNumber).then((page) => {
//             console.log("Page loaded");

//             const scale = 1.5;
//             // const viewport = page.getViewport({ scale: scale, rotation: 0, offsetX: -10 });
//             // Ensure canvasRef is not null
//             const canvas = canvasRef.current;
//             if (!canvas) {
//               console.error("Canvas ref is null");
//               return;
//             }

//             const context = canvas.getContext("2d");
//             const viewport = page.getViewport({ scale: scale, });
//             // Support HiDPI-screens.
//             var outputScale = window.devicePixelRatio || 1;

//             canvas.width = Math.floor(viewport.width * outputScale);
//             canvas.height = Math.floor(viewport.height * outputScale);
//             canvas.style.width = Math.floor(viewport.width) + "px";
//             canvas.style.height = Math.floor(viewport.height) + "px";

//             var transform = outputScale !== 1
//               ? [outputScale, 0, 0, outputScale, 0, 0]
//               : null;
//             // Ensure containerRef is not null
//             const container = containerRef.current;
//             if (!container) {
//               console.error("Container ref is null");
//               return;
//             }
//             container.style.position = "relative";
//             container.style.height = `${viewport.height}px`;
//             container.style.width = `${viewport.width}px`;

//             // Render PDF page into canvas context
//             const renderContext = {
//               canvasContext: context,
//               viewport: viewport,
//               transform: transform
//             };

//             const renderTask = page.render(renderContext);
//             renderTask.promise.then(() => {
//               console.log("Page rendered");

//               // Ensure textLayerRef is not null
//               const textLayerDiv = textLayerRef.current;
//               if (!textLayerDiv) {
//                 console.error("Text layer ref is null");
//                 return;
//               }

//               textLayerDiv.style.position = "absolute";
//               textLayerDiv.style.top = 0;
//               textLayerDiv.style.left = 0;
//               textLayerDiv.style.height = `${viewport.height}px`;
//               textLayerDiv.style.width = `${viewport.width}px`;
//               textLayerDiv.innerHTML = ""; // Clear any previous text content

//               const textContentPromise = page.getTextContent();
//               textContentPromise.then((textContent) => {
//                 console.log(viewport, "2")
//                 const textLayer = new TextLayer({
//                   textContentSource: textContent,
//                   container: textLayerDiv,
//                   viewport,
//                 });
//                 textLayer.render();
//               });
//             });
//           });
//         },
//         (reason) => {
//           console.error(reason);
//         }
//       );
//     };

//     loadPdf();
//   }, []);

//   return (
//     <div ref={containerRef}>
//       <canvas id="the-canvas" ref={canvasRef} />
//       <div id="text-layer" ref={textLayerRef} className="textLayer" />
//     </div>
//   );
// }
