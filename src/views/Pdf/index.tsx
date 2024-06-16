
import Iframe from "react-iframe";
function PdfViewer(){
    return (<>
        {/*<iframe src="https://www.youtube.com/watch?v=8reaJG7z-is" width={'100%'} height={'100%'}></iframe>*/}
        <div className='h-screen w-full'>
            <Iframe url={'https://tunjiafonja.com/A1naire-customer-presentation.pdf'} width="100%"
                    height="100%"
                    id=""
                    className="h-full"
                    display="block"
                    position="relative" />
        </div>

    </>)
}

export default PdfViewer