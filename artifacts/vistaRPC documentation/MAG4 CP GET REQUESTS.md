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

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | MAGDFN | LITERAL | 30 | true | DFN of Patient | 
| vs:Input_Parameter-8994_02 | PROC | LITERAL | 10 | true |  IEN from file 702.01 if just ome procedure desired, but it defaults to all. | 