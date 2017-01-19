---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIR RPT REQUESTS BY TYPE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIR RPT REQUESTS BY TYPE{:/}
 tag | {::nomarkdown}REQTYP{:/}
 routine | [DSIROIR](http://code.osehra.org/dox/Routine_DSIROIR_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | 

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FROM DATE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}TO DATE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}STATUS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}99{:/} | {::nomarkdown}true{:/} | {::nomarkdown}\A\  : Get only the appealed requests  (-RV,-PR)\O\  : Get only the open\C\  : \          \ closed  (-D,-G,-P)\P\  : \          \ pending\N\  : \          \other nondisclosured (-NR,-RF,-ND,-NV,-RC)\E\  : \          \ entered in error\X\  : \          \ cancelled\ALL\: Gets all statuses This parameter may be any combination of the codes delimited by the '^'or the word 'ALL'.{:/} | 
| {::nomarkdown}DIVISIONS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}99{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This parameter is used by the routine if the person requesting thisreport holds the DSIR MDIV key.  It is a list of internal InstitutionFile entry numbers (File 4), delimited by '^'.{:/} | 
| {::nomarkdown}TYPES{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}99{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is an array of internal numbers to file 19620.61 DSIR TYPE OF REQUEST.  It is used for reporting criteria if no types are specified then all types will be included in the report.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 8:55:11 am</p>{:/}