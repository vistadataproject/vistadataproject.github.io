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

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | MAGDFN | LITERAL | 30 | true | DFN of Patient | 
| vs:Input_Parameter-8994_02 | MAGCONS | LITERAL | 30 | true |  Consult Number, returned in the Query to get patient CP Requests. | 