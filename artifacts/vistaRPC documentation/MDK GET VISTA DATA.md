---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MDK GET VISTA DATA 

 property | value 
--- | --- 
 label | MDK GET VISTA DATA
 tag | RPC
 routine | [MDKRPC1](http://code.osehra.org/dox/Routine_MDKRPC1_source.html)
 return value type | ARRAY
 description | 

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| OPTION | LITERAL | 8 | true | This is the routine tag that will be called to retrieve the data. | 
| DATA | LITERAL | 50 | true | This is whatever data is needed by the subroutine to process the request for data. In many cases it will be a single value (e.g., patient id - DFN). | 




 ###### Generated on January 11th 2017, 6:39:43 am