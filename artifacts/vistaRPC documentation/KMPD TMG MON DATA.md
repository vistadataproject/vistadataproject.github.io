---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; KMPD TMG MON DATA 

 property | value 
--- | --- 
 label | KMPD TMG MON DATA
 tag | TMGMON
 routine | [KMPDU7](http://code.osehra.org/dox/Routine_KMPDU7_source.html)
 return value type | ARRAY
 description | Return Timing Monitor data.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| MONITOR START TIME | LITERAL | 25 | true | Time the Timing Monitor started, in internal fileman format. This will be used to determine the Running Time (how long the system monitor has been running for this user. If not defined then $$NOW^XLFDT will be used. | 




 ###### Generated on January 11th 2017, 6:39:43 am