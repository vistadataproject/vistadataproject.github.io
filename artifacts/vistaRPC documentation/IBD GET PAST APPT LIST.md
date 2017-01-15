---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; IBD GET PAST APPT LIST 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}IBD GET PAST APPT LIST{:/}
 tag | {::nomarkdown}APPTLST{:/}
 routine | [IBDFRPC5](http://code.osehra.org/dox/Routine_IBDFRPC5_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC can be used to return a list of appointments for a patient.  Itdefaults to returning the past 1 year's kept appointments.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}IBDF{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Requires the variable IBDF(\DFN\) be set to the patient internal entry number.IBDF(\F\) is the from date (defaults to t-1year)IBDF(\T\) is the to date (defaults to t@midnight)IBDF(\W\) is the types of appointments to return, see SDA^VAPDT{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:50 am</p>{:/}