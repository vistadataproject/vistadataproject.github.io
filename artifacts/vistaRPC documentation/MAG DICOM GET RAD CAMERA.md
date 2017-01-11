---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG DICOM GET RAD CAMERA 

 property | value 
--- | --- 
 label | MAG DICOM GET RAD CAMERA
 tag | CAMERA
 routine | [MAGDRPCB](http://code.osehra.org/dox/Routine_MAGDRPCB_source.html)
 return value type | ARRAY
 description | Used to find an entry in file CAMERA/EQUIP/RM (#78.6)

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| CAMERA | LITERAL | 30 | true | The name of the entry expected to be found in file CAMERA/EQUIP/RM (#78.6.) | 