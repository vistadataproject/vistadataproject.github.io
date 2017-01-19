---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; EC GETENCDXS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}EC GETENCDXS{:/}
 tag | {::nomarkdown}ENCDXS{:/}
 routine | [ECUERPC1](http://code.osehra.org/dox/Routine_ECUERPC1_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Returns a patient encounter primary and secondary diagnosis codes from Event Capture Patient File (#721).{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ECARY{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Input variable ECARY has the followed pieces of data separated by up-arrows.  1. ECDFN - Patient ien (#200)  2. ECDT  - Procedure date and time (fileman format)  3. ECL   - Location ien  4. EC4   - Clinic ien{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:28:51 am</p>{:/}