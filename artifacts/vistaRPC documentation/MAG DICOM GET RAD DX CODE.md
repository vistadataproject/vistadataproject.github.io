---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG DICOM GET RAD DX CODE 

 property | value 
--- | --- 
 label | MAG DICOM GET RAD DX CODE
 tag | DXCODE
 routine | [MAGDRPCB](http://code.osehra.org/dox/Routine_MAGDRPCB_source.html)
 return value type | ARRAY
 description | This RPC is used to lookup an entry in file DIAGNOSTIC CODES (78.3).

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DXCODE | LITERAL | 30 | true | This is the diagnostic name to be used in the lookup process. | 




 ###### Generated on January 11th 2017, 6:39:43 am