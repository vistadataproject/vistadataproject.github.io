---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DENTVICD ICD GET DIAG 

 property | value 
--- | --- 
 label | {::nomarkdown}DENTVICD ICD GET DIAG{:/}
 tag | {::nomarkdown}ICD{:/}
 routine | [DENTVICD](http://code.osehra.org/dox/Routine_DENTVICD_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This will return specific information for a diagnosis code{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}VICD{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the IEN or .01 field value from the DIAGNOSIS file (#80){:/} | 
| {::nomarkdown}CDT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}14{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the date to be used to check if the code was active as of that date. The default value is TODAY.{:/} | 




 Generated on January 13th 2017, 6:44:48 am