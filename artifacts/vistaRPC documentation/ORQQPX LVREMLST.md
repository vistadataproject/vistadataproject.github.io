---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPX LVREMLST 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPX LVREMLST{:/}
 tag | {::nomarkdown}LVREMLST{:/}
 routine | [ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns Cover Sheet reminder settings{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}LVL{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Parameter Level setting{:/} | 
| {::nomarkdown}CLASS{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Optional User Class IEN if level is CLASS{:/} | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | LVREMLST^[ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html)
 Method comment | Returns cover sheet reminders at a specified level
 Input parameters | {::nomarkdown}LVL<br>CLASS{:/}
 Code | {::nomarkdown}  D REMACCUM(.ORY,LVL,"Q","",$G(CLASS)){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:46:15 am</p>{:/}