---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; EC GETENCDXS 

 property | value 
--- | --- 
 label | {::nomarkdown}EC GETENCDXS{:/}
 tag | {::nomarkdown}ENCDXS{:/}
 routine | [ECUERPC1](http://code.osehra.org/dox/Routine_ECUERPC1_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Returns a patient encounter primary and secondary diagnosis codes from Event Capture Patient File (#721).{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ECARY{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Input variable ECARY has the followed pieces of data separated by up-arrows.  1. ECDFN - Patient ien (#200)  2. ECDT  - Procedure date and time (fileman format)  3. ECL   - Location ien  4. EC4   - Clinic ien{:/} | 




 Generated on January 13th 2017, 6:24:32 am