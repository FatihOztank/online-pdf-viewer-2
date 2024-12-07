// "use client"
// import { DocumentLoadEvent, getPage, ProgressBar, RenderPageProps, Viewer, Worker } from '@react-pdf-viewer/core';
// import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
// import { selectionModePlugin } from '@react-pdf-viewer/selection-mode';
// import '@react-pdf-viewer/core/lib/styles/index.css';
// import '@react-pdf-viewer/default-layout/lib/styles/index.css';


// import { useEffect } from 'react';
// import DisplayNotesSidebarExample from './highlightpage';
// import SwitchSelectionModeButtonsExample from './highlightpage';
// import { TextLayer } from 'pdfjs-dist';

// interface ViewPortParams {
//   rotation?: number;
//   scale: number;
// }

// export default function Home() {
//   const defaultLayoutPluginInstance = defaultLayoutPlugin();
//   const selectionModePluginInstance = selectionModePlugin();
//   // const renderPage = (props: RenderPageProps) => {
//   //   // console.log(props.textLayer.children.type)
//   //   return (
//   //     <>
//   //       {props.canvasLayer.children}
//   //       {props.annotationLayer.children}
//   //       {props.textLayer.children}
//   //     </>
//   //   );
//   // };

//   // const documentLoad = (event: DocumentLoadEvent) => {
//   //   console.log(event.doc)
//   //   getPage(event.doc, 0).then(async res => {
//   //     console.log(res.getTextContent())
//   //     const textContent = await res.getTextContent();
//   //     res.getViewport({ scale: 1.5 })
//   //     textContent.items
//   //     const textLayer = new ({
//   //       textContentSource: textContent,
//   //       viewport: res.getViewport({ scale: 1.5 })
//   //       container: 
//   //     });
//   //     await textLayer.render();
      
//   //   })
//   // }

//   return (
//     <Worker workerUrl="https://unpkg.com/pdfjs-dist@4.6.82/build/pdf.worker.min.mjs">
//       <Viewer
//         theme={"dark"}
//         fileUrl="/sample.pdf"
//         plugins={[
//           defaultLayoutPluginInstance,
//           selectionModePluginInstance
//         ]}
//         // renderPage={renderPage}
//         // onDocumentLoad={documentLoad}

//       />
//       {/* <SwitchSelectionModeButtonsExample fileUrl={"/sample.pdf"}/> */}
//     </Worker>
//   );
// }
