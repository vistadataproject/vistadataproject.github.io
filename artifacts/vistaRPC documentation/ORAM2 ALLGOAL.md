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

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DAYS | LITERAL |  |  | NUMBER OF DAYS BACK TO INCLUDE A PT VISIT | 
| CLINIC | LITERAL |  |  | IEN of Clinic in Hospital Location File. | 




Generated on January 11th 2017, 6:34:23 am