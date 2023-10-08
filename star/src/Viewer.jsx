import React, { useRef, useEffect } from 'react';
import WebViewer from '@pdftron/webviewer';
import './styles/Viewer.css';

const Viewer = () => {
    const viewer = useRef(null);
    
    useEffect(() => {
        WebViewer(
            {
                path: '/webviewer/lib',
                initialDoc: '/files/PDFTRON_about.pdf',
                licenseKey: 'demo:1696694806392:7ceed1ab03000000002349e86424448cab9456268a93821a2edd579453',  // sign up to get a free trial key at https://dev.apryse.com
                disabledElements: [
                    'header'
                ]
            },
            viewer.current,
        ).then((instance) => {
            const { documentViewer, Annotations, Search, annotationManager } = instance.Core;

            documentViewer.setSearchHighlightColors({
                // setSearchHighlightColors accepts both Annotations.Color objects or 'rgba' strings
                searchResult: new Annotations.Color(0, 0, 255, 0.5),
                activeSearchResult: 'rgba(0, 255, 0, 0.5)'
            });

            documentViewer.addEventListener('documentLoaded', () => {
                const searchText = 'Another mistake is where';
                const mode = Search.Mode.PAGE_STOP | Search.Mode.HIGHLIGHT;
                const searchOptions = {
                    // If true, a search of the entire document will be performed. Otherwise, a single search will be performed.
                    fullSearch: true,
                    // The callback function that is called when the search returns a result.
                    onResult: result => {
                        // with 'PAGE_STOP' mode, the callback is invoked after each page has been searched.
                        if (result.resultCode === Search.ResultCode.FOUND) {
                            const highlight = new Annotations.TextHighlightAnnotation();
                            //for (let i = 0; i < result) 
                            const textQuad = result.quads[0].getPoints(); // getPoints will return Quad objects
                            // now that we have the result Quads, it's possible to highlight text or create annotations on top of the text
                            highlight.PageNumber = result.pageNum;
                            highlight.X = 405;
                            highlight.Y = 165;
                            highlight.Width = 275;
                            highlight.Height = 25;
                            highlight.StrokeColor = new Annotations.Color(255, 255, 0);
                            highlight.Quads = [textQuad];
                            
                            annotationManager.addAnnotation(highlight);
                            annotationManager.drawAnnotations(highlight.PageNumber);
                        }
                    }
                };
                documentViewer.textSearchInit(searchText, mode, searchOptions)
            });
        });
    }, []);

    return (
        <div className="Viewer">
            <div className="webviewer" ref={viewer}></div>
        </div>
    );
};

export default Viewer;
