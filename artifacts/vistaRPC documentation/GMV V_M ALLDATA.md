---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; GMV V_M ALLDATA 

 property | value 
--- | --- 
 label | GMV V_M ALLDATA
 tag | VMDATA
 routine | [GMVGGR1](http://code.osehra.org/dox/Routine_GMVGGR1_source.html)
 return value type | GLOBAL ARRAY
 description | This remote procedure call lists all vitals/measurements data for a givendate/time span. This remote procedure call is documented in Integration Agreement 4654.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| GMVDATA | LITERAL | 60 | true | GMVDATA consists of 4 pieces of data:  piece1^piece2^piece3^piece4  where piece1 = File 2 IEN (i.e., DFN)       piece2 = Start date/time for search (FileMan internal format)       piece3 = End date/time for search (FileMan internal format)       piece4 = 0 (zero) | 




 ###### Generated on January 11th 2017, 6:39:43 am