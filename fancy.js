/* This page handles the functionality for the page*/

/* This is the functionality of the Adobe PDF viewer */
document.addEventListener("adobe_dc_view_sdk.ready", function()
        {
           var adobeDCView = new AdobeDC.View({clientId: "463f26f5d78d49cba827efd6d4c7519a", divId: "adobe-dc-view"});
           adobeDCView.previewFile(
          {
              content:  {location: {URL: "./Resume.pdf"}},
              metaData: {fileName: "Resume.pdf"}
          });
        });