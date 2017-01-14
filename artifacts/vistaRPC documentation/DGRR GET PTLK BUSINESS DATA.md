---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; DGRR GET PTLK BUSINESS DATA 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}DGRR GET PTLK BUSINESS DATA{:/}
 tag | {::nomarkdown}BUS{:/}
 routine | [DGRRLU1](http://code.osehra.org/dox/Routine_DGRRLU1_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Returns XML document containing data needed to perform business logicchecks on patient lookup.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PARAM{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}PARAM(\PatientId_Type\) = DFN (default) or ICNPARAM(\PatientId\) = value for dfn or ICNPARAM(\UserId\) = DUZPARAM(\UserInstitution\) = division usage default to DUZ(2){:/} | 




 Generated on January 14th 2017, 7:26:36 am