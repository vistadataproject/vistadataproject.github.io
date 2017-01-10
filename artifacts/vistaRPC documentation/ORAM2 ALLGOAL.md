---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORAM2 ALLGOAL 

 property | value 
--- | --- 
 label | ORAM2 ALLGOAL
 tag | ALLGOAL
 routine | [ORAM2](http://code.osehra.org/dox/Routine_ORAM2_source.html)
 return value type | ARRAY
 description | Returns the percentage of patients in the Anticoagulation Flowsheet file(#103) whose last INRs (within the specified number of days) were in-goal.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DAYS | LITERAL |  |  | NUMBER OF DAYS BACK TO INCLUDE A PT VISIT | 
| vs:Input_Parameter-8994_02 | CLINIC | LITERAL |  |  | IEN of Clinic in Hospital Location File. | 