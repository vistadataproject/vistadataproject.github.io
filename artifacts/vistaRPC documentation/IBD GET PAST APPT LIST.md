---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; IBD GET PAST APPT LIST 

 property | value 
--- | --- 
 label | IBD GET PAST APPT LIST
 tag | APPTLST
 routine | [IBDFRPC5](http://code.osehra.org/dox/Routine_IBDFRPC5_source.html)
 return value type | ARRAY
 description | This RPC can be used to return a list of appointments for a patient.  Itdefaults to returning the past 1 year's kept appointments.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| IBDF | LIST | 30 | true | Requires the variable IBDF(\DFN\) be set to the patient internal entry number.IBDF(\F\) is the from date (defaults to t-1year)IBDF(\T\) is the to date (defaults to t@midnight)IBDF(\W\) is the types of appointments to return, see SDA^VAPDT | 




 Generated on January 11th 2017, 7:15:03 am