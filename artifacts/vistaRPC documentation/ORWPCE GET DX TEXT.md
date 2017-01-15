---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPCE GET DX TEXT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE GET DX TEXT{:/}
 tag | {::nomarkdown}GETDXTXT{:/}
 routine | [ORWPCE3](http://code.osehra.org/dox/Routine_ORWPCE3_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Resolves the preferred expanded form of the Diagnosis text for the encounter pane on the notes tab.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}NARR{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the narrative entered for the Dx.{:/} | 
| {::nomarkdown}CODE{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the ICD code.{:/} | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | GETDXTXT^[ORWPCE3](http://code.osehra.org/dox/Routine_ORWPCE3_source.html)
 Method comment | RPC to resolve Dx Text for PCE view
 Input parameters | {::nomarkdown}NARR<br>CODE{:/}
 Code | {::nomarkdown}  S ORY=$$SETNARR(NARR,CODE){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:51 am</p>{:/}