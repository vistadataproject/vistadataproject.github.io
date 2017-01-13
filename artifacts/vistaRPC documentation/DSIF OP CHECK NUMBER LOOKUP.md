---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF OP CHECK NUMBER LOOKUP 

 property | value 
--- | --- 
 label | {::nomarkdown}DSIF OP CHECK NUMBER LOOKUP{:/}
 tag | {::nomarkdown}OPCKN{:/}
 routine | [DSIFPAY8](http://code.osehra.org/dox/Routine_DSIFPAY8_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Pass in one parameter - delimited BY \;\ (Semicolon) Invoice IEN(Required);;  (Inpatient claims)Invoice IEN(Required);Invoice date (FM format,Required);external CPT code           (Required) - (Outpatient claims){:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}INPUT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Pass in one parameter, \;\ delimited Invoice IEN;;  (Inpatient claims)Invoice IEN;Invoice date (FM format);CPT code (Outpatient claims){:/} | 
| {::nomarkdown}INVOICE DATE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}SERVICE (CPT CODE){:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}5{:/} | {::nomarkdown}true{:/} |  | 




 Generated on January 13th 2017, 6:24:32 am