---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIROI9 INACTRQR INACTIVATE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIROI9 INACTRQR INACTIVATE{:/}
 tag | {::nomarkdown}INACTRQR{:/}
 routine | [DSIROI9](http://code.osehra.org/dox/Routine_DSIROI9_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC should be used to toggle the Inactive field of the DSIR NEW REQUESTOR file (#19620.12).{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}99{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal Entry Number to file #19620.12 - DSIR NEW REQUESTOR{:/} | 
| {::nomarkdown}FLG{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Inactive Flag (Optional 0 = Active, 1 = Inactive) [Default - 0]{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 2:31:55 am</p>{:/}