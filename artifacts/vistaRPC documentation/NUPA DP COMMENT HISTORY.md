---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; NUPA DP COMMENT HISTORY 

 property | value 
--- | --- 
 label | NUPA DP COMMENT HISTORY
 tag | DPH
 routine | [NUPABCL2](http://code.osehra.org/dox/Routine_NUPABCL2_source.html)
 return value type | GLOBAL ARRAY
 description | Pulls in the comments for Discharge Planning issues for a care plan.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| IEN | LITERAL |  | true | The IEN of the Care Plan from file 1927.4. | 
| FLAG | LITERAL |  | true | Flag to determine whether to return the latest comment for each Discharge Planning issue, or the entire set of Discharge Planning comments for theCare Plan. FLAG=1 - Entire set of Discharge Planning commentsFLAG=2 - Latest comment for each Discharge Planning issue | 




 Generated on January 11th 2017, 7:15:04 am