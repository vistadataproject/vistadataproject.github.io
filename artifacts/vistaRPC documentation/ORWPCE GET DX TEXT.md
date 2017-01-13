---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPCE GET DX TEXT 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE GET DX TEXT{:/}
 tag | {::nomarkdown}GETDXTXT{:/}
 routine | [ORWPCE3](http://code.osehra.org/dox/Routine_ORWPCE3_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Resolves the preferred expanded form of the Diagnosis text for the encounter pane on the notes tab.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | RPC to resolve Dx Text for PCE view

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}NARR{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the narrative entered for the Dx.{:/} | 
| {::nomarkdown}CODE{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the ICD code.{:/} | 




 Generated on January 13th 2017, 6:44:48 am