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

 Property | Value 
 --- | --- 
 Method | LVREMLST^[ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html)
 Method comment | Returns cover sheet reminders at a specified level
 Input parameters | {::nomarkdown}LVL, CLASS{:/}
 Code | {::nomarkdown}  D REMACCUM(.ORY,LVL,"Q","",$G(CLASS)){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReminders.pas">rReminders.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 7:57:52 am</p>{:/}