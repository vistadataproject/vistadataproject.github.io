---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGG PAT EACH IMAGE 

 property | value 
--- | --- 
 label | MAGG PAT EACH IMAGE
 tag | EACHIMG
 routine | [MAGGTIG](http://code.osehra.org/dox/Routine_MAGGTIG_source.html)
 return value type | ARRAY
 description | Returns a list of Images with Capture date/time, image description foreach patient image, and it will list all images of all groups and allsingle images.Called from capture application to list most recent images capturedfor a patient.  

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | MAGDFN | LITERAL | 30 | true | Patient's DFN. | 
| vs:Input_Parameter-8994_02 | MAX | LITERAL | 4 | true | The maximum number of images to return. | 