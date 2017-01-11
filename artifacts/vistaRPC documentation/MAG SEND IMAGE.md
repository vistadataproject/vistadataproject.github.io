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

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| MAGIEN | LITERAL | 7 | true | IEN of the image to send | 
| QREC | LITERAL | 3 | true | Record number of the destination queue (DOS/DICOM) | 
| PRI | LITERAL | 4 | true | Priority | 
| TYPE | LITERAL | 1 | true | Type of Image: 1:DOS, 2:DICOM | 




 ###### Generated on January 11th 2017, 6:39:43 am