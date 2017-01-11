---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG4 CP GET VISITS 

 property | value 
--- | --- 
 label | MAG4 CP GET VISITS
 tag | VISITS
 routine | [MAGGSCP](http://code.osehra.org/dox/Routine_MAGGSCP_source.html)
 return value type | ARRAY
 description |  This RPC call simply call a CP Routine that lists visits for a patient. Imaging prompts the user with this list when a Visit String is needed by CP to create a Note.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| MAGDFN | LITERAL | 30 | true | DFN of Patient | 
| MAGCONS | LITERAL | 30 | true |  Consult Number, returned in the Query to get patient CP Requests. | 




 Generated on January 11th 2017, 7:15:04 am