---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWRP4 HDR MODIFY 

 property | value 
--- | --- 
 label | ORWRP4 HDR MODIFY
 tag | HDR
 routine | [ORWRP4](http://code.osehra.org/dox/Routine_ORWRP4_source.html)
 return value type | SINGLE VALUE
 description | This RPC looks at data returned from the HDR and makes any modificationsnecessary to make the data compatible with CPRS Reports.


### Method description

 property | value 
--- | --- 
 Method comment | Extract/Modify data from the HDR
 Leading comment lines | HANDLE=Remote Broker ID in ^XTMP(HANDLE,"D",,ID=Report ID found in field .02 file 101.24

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| HANDLE | LITERAL | 30 | true | Remote Broker ID needed to find data in ^XTMP(HANDLE,\D\, | 
| ID  | LITERAL | 30 | true | Report ID found in field .02 of file 101.24 | 




 ###### Generated on January 11th 2017, 6:39:43 am