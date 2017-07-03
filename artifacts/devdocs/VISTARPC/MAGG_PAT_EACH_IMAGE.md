---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAGG PAT EACH IMAGE
# MAGG PAT EACH IMAGE

Returns a list of Images with Capture date/time, image description foreach patient image, and it will list all images of all groups and allsingle images.Called from capture application to list most recent images capturedfor a patient.  

Property | Value
--- | ---
Label | EACHIMG
Routine | [MAGGTIG](http://code.osehra.org/dox/Routine_MAGGTIG_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
MAGDFN | LITERAL | 30 | true | Patient&#x27;s DFN.
MAX | LITERAL | 4 | true | The maximum number of images to return.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}