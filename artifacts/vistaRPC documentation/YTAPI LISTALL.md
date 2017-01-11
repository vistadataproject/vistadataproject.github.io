---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; YTAPI LISTALL 

 property | value 
--- | --- 
 label | YTAPI LISTALL
 tag | LISTALL
 routine | [YTAPI](http://code.osehra.org/dox/Routine_YTAPI_source.html)
 return value type | ARRAY
 description | This API returns all psychological test administrations for a specified patient during a specified time period. No scoring is returned. ASI s and optionally GAF s are also returned. Input:                 DFN : patient internal identifier                BEGIN: inclusive date in %DT acceptable format (11/11/2011) to begin search [optional]                END: inclusive date in %DT acceptable format (11/11/2011) to end search  [optional]                CODE: YS(\CODE\)=\GAF\ set to optionally return GAF administrations  Output:YSDATA(1)=[DATA]YSDATA(x)= internal administration date^external administration date^test code  Data is sorted in order of most recent administration to the oldest administration. If no administrations are found YSDATA(2) will not be returned.




 Generated on January 11th 2017, 7:15:04 am