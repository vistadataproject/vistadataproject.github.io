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

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | HANDLE | LITERAL | 30 | true | Remote Broker ID needed to find data in ^XTMP(HANDLE,\D\, | 
| vs:Input_Parameter-8994_02 | ID  | LITERAL | 30 | true | Report ID found in field .02 of file 101.24 | 