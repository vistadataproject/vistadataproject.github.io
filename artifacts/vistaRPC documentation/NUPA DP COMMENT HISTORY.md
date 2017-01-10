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

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | IEN | LITERAL |  | true | The IEN of the Care Plan from file 1927.4. | 
| vs:Input_Parameter-8994_02 | FLAG | LITERAL |  | true | Flag to determine whether to return the latest comment for each Discharge Planning issue, or the entire set of Discharge Planning comments for theCare Plan. FLAG=1 - Entire set of Discharge Planning commentsFLAG=2 - Latest comment for each Discharge Planning issue | 