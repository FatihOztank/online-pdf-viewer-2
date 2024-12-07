"use client"

import { GlobalWorkerOptions, TextLayer, getDocument } from "pdfjs-dist"
import { createRef, useEffect, useRef } from "react";

import "pdfjs-dist/web/pdf_viewer.css"
export default function Home() {

    GlobalWorkerOptions.workerSrc = "https://unpkg.com/pdfjs-dist@4.6.82/build/pdf.worker.min.mjs";
    const CMAP_URL = "../../node_modules/pdfjs-dist/cmaps/";
    const CMAP_PACKED = true;

    const DEFAULT_URL = "/sample.pdf";
    const PAGE_TO_VIEW = 1;
    const SCALE = 1.5;

    const ENABLE_XFA = true;

    const textLayerRef = useRef(null);
    const canvasRef = useRef(null);
    var outputScale = window.devicePixelRatio || 1;

    var isPageRendering = false;

    useEffect(() => {
        const loadingTask = getDocument(DEFAULT_URL);

        const pdfDocument = loadingTask.promise;
        const canvas = canvasRef.current;

        // const transform = outputScale !== 1
        //     ? [outputScale, 0, 0, outputScale, 0, 0]
        //     : null;

        pdfDocument.then(doc => {
            const pdfPage = doc.getPage(PAGE_TO_VIEW).then(page => {
                if (isPageRendering)
                    return;
                isPageRendering = true
                console.log(outputScale)
                const viewport = page.getViewport({ scale: SCALE });
                const context = canvas.getContext("2d");
                canvas.width = Math.floor(viewport.width);
                canvas.height = Math.floor(viewport.height);
                canvas.style.width = Math.floor(viewport.width * outputScale) + "px";
                canvas.style.height = Math.floor(viewport.height * outputScale) + "px";
                const renderContext = {
                    canvasContext: context,
                    viewport: viewport
                }
                const renderTask = page.render(renderContext);

                renderTask.promise.then(() => {
                    isPageRendering = false;

                    const textLayerDiv = textLayerRef.current;
                    textLayerDiv.innerHTML = "";
                    textLayerDiv.width = Math.floor(viewport.width);
                    textLayerDiv.height = Math.floor(viewport.height);
                    textLayerDiv.style.width = Math.floor(viewport.width * outputScale) + "px";
                    textLayerDiv.style.height = Math.floor(viewport.height * outputScale) + "px";

                    const textContentPromise = page.getTextContent();

                    textContentPromise.then(textContent => {
                        const textLayer = new TextLayer({
                            textContentSource: textContent,
                            container: textLayerDiv,
                            viewport: viewport,
                        })

                        textLayer.render();
                    })


                })
            })
        })
    })

    return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}    >
        <canvas id="the-canvas" className="canvasWrapper" ref={canvasRef} style={{ '--scale-factor': SCALE * outputScale }} />
        <div id="textLayer" className="textLayer" ref={textLayerRef}  style={{ '--scale-factor': SCALE * outputScale}}></div>

    </div>
    )
}