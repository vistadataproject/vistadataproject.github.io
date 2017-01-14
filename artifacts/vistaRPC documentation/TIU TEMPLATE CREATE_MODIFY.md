---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; TIU TEMPLATE CREATE_MODIFY 


 ## VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU TEMPLATE CREATE_MODIFY{:/}
 tag | {::nomarkdown}SETTMPLT{:/}
 routine | [TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This remote procedure allows creation and update of Templates.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUDA{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This optional parameter is the record number of the Template to bemodified. If the Template is new, it may be passed as zero or null, toindicate that a new Template is to be created.{:/} | 
| {::nomarkdown}TIUX{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This array contains the data to be filed in the Template entry,subscripted by field number. It should look something like this: TIUX(.01)=\ACTIVE MEDICATIONS\TIUX(.03)=\T\TIUX(.04)=\A\TIUX(.05)=0TIUX(.06)=\\TIUX(2,1,0)=\Active Medications:\TIUX(2,2,0)=\AMED\{:/} | {::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:36:24 am</p>{:/}