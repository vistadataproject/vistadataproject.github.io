---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIRRPT6 RQSTRS REPORT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIRRPT6 RQSTRS REPORT{:/}
 tag | {::nomarkdown}RQSTRS{:/}
 routine | [DSIRRPT6](http://code.osehra.org/dox/Routine_DSIRRPT6_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This RPC will return entries from the DSIR NEW REQUESTORS file (#19620.12) in alphabetical order.  The report can be pulled for all requestors or in an alphabetic range, and further sorted by those flagged as Active, Inactive or Both.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}INACT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Inactive/Active Flag (Optional - A = Active Only, I = Inactive Only, B = Both) [Default - B]{:/} | 
| {::nomarkdown}FRNM{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}From Name (Optional - Starting name or partial name, if null all names pulled){:/} | 
| {::nomarkdown}TONM{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}To Name (Optional - Ending name or partial name, only valid if starting name passed){:/} | 
| {::nomarkdown}SCHED{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is a flag to indicate if the report should be scheduled in TaskMan or not.  1 = Yes, 0 = No, Default is 0.{:/} | 
| {::nomarkdown}ESTART{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}14{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the FileMan format date/time to start the task. If blank the task will run immediately.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 8:30:46 pm</p>{:/}