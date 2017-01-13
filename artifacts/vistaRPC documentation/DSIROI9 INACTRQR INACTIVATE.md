---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIROI9 INACTRQR INACTIVATE 

 property | value 
--- | --- 
 label | {::nomarkdown}DSIROI9 INACTRQR INACTIVATE{:/}
 tag | {::nomarkdown}INACTRQR{:/}
 routine | [DSIROI9](http://code.osehra.org/dox/Routine_DSIROI9_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC should be used to toggle the Inactive field of the DSIR NEW REQUESTOR file (#19620.12).{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}99{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal Entry Number to file #19620.12 - DSIR NEW REQUESTOR{:/} | 
| {::nomarkdown}FLG{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Inactive Flag (Optional 0 = Active, 1 = Inactive) [Default - 0]{:/} | 




 Generated on January 13th 2017, 6:24:33 am