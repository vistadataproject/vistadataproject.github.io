---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; OOPS SET DUAL BENEFITS DATA 

 property | value 
--- | --- 
 label | {::nomarkdown}OOPS SET DUAL BENEFITS DATA{:/}
 tag | {::nomarkdown}DUAL{:/}
 routine | [OOPSGUID](http://code.osehra.org/dox/Routine_OOPSGUID_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This broker call files data in the DUAL Node of the ASISTS Accident ReportingFile (#2260).{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}INPUT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This field contains the IEN and the form of the record the data willbe filed into.  The format is IEN^FORM.  An example is 373^DUAL.{:/} | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}245{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This string contains the DUAL Benefits data.  It is in the format of:P1 data^P2 data^P3 data^P4 data^P5 data^P6 data.{:/} | 




 Generated on January 13th 2017, 5:52:13 am