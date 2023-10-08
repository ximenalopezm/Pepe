import React, { useRef, useEffect } from 'react';
import WebViewer from '@pdftron/webviewer';
import './styles/Viewer.css';

const Viewer = ({file}) => {
  const viewer = useRef(null);
  console.log(file);

  useEffect(() => {
    WebViewer(
      {
        licenseKey: 'demo:1696694806392:7ceed1ab03000000002349e86424448cab9456268a93821a2edd579453',  // sign up to get a free trial key at https://dev.apryse.com
        disabledElements: [
          'header'
        ]
      },
      viewer.current,
    ).then(instance => {
        console.log('WebViewer initialized');
        instance.UI.loadDocument(file, { filename: file.name })
          .then(() => {
            console.log('Document loaded successfully');
          })
          .catch((error) => {
            console.error('Error loading document:', error);
          });


      const { documentViewer, annotationManager, Annotations } = instance.Core;

      documentViewer.addEventListener('documentLoaded', () => {
        const rectangleAnnot = new Annotations.RectangleAnnotation({
          PageNumber: 1,
          // values are in page coordinates with (0, 0) in the top left
          X: 100,
          Y: 150,
          Width: 200,
          Height: 50,
          Author: annotationManager.getCurrentUser()
        });

        annotationManager.addAnnotation(rectangleAnnot);
        // need to draw the annotation otherwise it won't show up until the page is refreshed
        annotationManager.redrawAnnotation(rectangleAnnot);
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
