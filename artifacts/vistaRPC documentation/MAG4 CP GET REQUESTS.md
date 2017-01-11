---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG4 CP GET REQUESTS 

 property | value 
--- | --- 
 label | MAG4 CP GET REQUESTS
 tag | LIST
 routine | [MAGGSCP](http://code.osehra.org/dox/Routine_MAGGSCP_source.html)
 return value type | ARRAY
 description | Return a list of Clinical Procedure Requests for a Patient.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| MAGDFN | LITERAL | 30 | true | DFN of Patient | 
| PROC | LITERAL | 10 | true |  IEN from file 702.01 if just ome procedure desired, but it defaults to all. | 




 Generated on January 11th 2017, 7:15:04 am