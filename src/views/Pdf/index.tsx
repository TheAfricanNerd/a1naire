
import {useCallback, useMemo, useState} from "react";
// import Iframe from "react-iframe";
import { pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { Document, Page } from 'react-pdf';
import {useResizeObserver} from "@wojtekmaj/react-hooks";
import PDF_file from '../../assets/docs/A1naire-customer-presentation.pdf'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

const options = {
    cMapUrl: '/cmaps/',
    standardFontDataUrl: '/standard_fonts/',
};


const resizeObserverOptions = {};
// const maxWidth = 780;
function PdfViewer(){
    const file = useMemo(() => ({url:PDF_file}), []);

    const [numPages, setNumPages] = useState<number>();
    // const [pageNumber, setPageNumber] = useState<number>(1);
    // const [deviceWidth, setDeviceWidth] = useState<number>()
    const [containerRef, setContainerRef] = useState<HTMLElement | null>(null);
    const [containerWidth, setContainerWidth] = useState<number>();

    const onResize = useCallback<ResizeObserverCallback>((entries) => {
        const [entry] = entries;

        if (entry) {
            setContainerWidth(entry.contentRect.width);
        }
    }, []);

    useResizeObserver(containerRef, resizeObserverOptions, onResize);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
        setNumPages(numPages);
    }
// ./src/A1naire-customer-presentation.pdf
    return (<>

        <div>
            <div className={'w-full'} ref={setContainerRef}>
                <Document loading={<div>Loading...</div>} file={file} onLoadSuccess={onDocumentLoadSuccess} options={options}>
                    {Array.from(new Array(numPages), (_el, index) => (
                        <Page
                            key={`page_${index + 1}`}
                            pageNumber={index + 1}
                            // renderAnnotationLayer={false}
                            renderTextLayer={false}
                            width={containerWidth}
                            // width={containerWidth ? Math.max(containerWidth, maxWidth) : maxWidth}
                        />
                    ))}

                </Document>
            </div>

            {/*<p>*/}
            {/*    Page {numPages} / {pageNumber}*/}
            {/*</p>*/}
        </div>

        {/*<iframe src="https://www.youtube.com/watch?v=8reaJG7z-is" width={'100%'} height={'100%'}></iframe>*/}
        {/*<div className='h-screen w-full'>*/}
        {/*    <Iframe url={'https://tunjiafonja.com/A1naire-customer-presentation.pdf'} width="100%"*/}
        {/*            height="100%"*/}
        {/*            id=""*/}
        {/*            className="h-full"*/}
        {/*            display="block"*/}
        {/*            position="relative" />*/}
        {/*</div>*/}


    </>)
}

export default PdfViewer