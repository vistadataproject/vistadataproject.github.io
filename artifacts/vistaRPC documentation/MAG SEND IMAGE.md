---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG SEND IMAGE 

 property | value 
--- | --- 
 label | MAG SEND IMAGE
 tag | MAGSEND
 routine | [MAGROI01](http://code.osehra.org/dox/Routine_MAGROI01_source.html)
 return value type | ARRAY
 description | QUEUE IMAGE TO A DESTINATION

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | MAGIEN | LITERAL | 7 | true | IEN of the image to send | 
| vs:Input_Parameter-8994_02 | QREC | LITERAL | 3 | true | Record number of the destination queue (DOS/DICOM) | 
| vs:Input_Parameter-8994_02 | PRI | LITERAL | 4 | true | Priority | 
| vs:Input_Parameter-8994_02 | TYPE | LITERAL | 1 | true | Type of Image: 1:DOS, 2:DICOM | 