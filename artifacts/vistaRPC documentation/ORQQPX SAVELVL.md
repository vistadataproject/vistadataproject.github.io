---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPX SAVELVL 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPX SAVELVL{:/}
 tag | {::nomarkdown}SAVELVL{:/}
 routine | [ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Saves Parameter Level settings.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}LVL{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Parameter Level{:/} | 
| {::nomarkdown}CLASS{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Optional User Class IEN if LVL is CLASS{:/} | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}Data.{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | SAVELVL^[ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html)
 Method comment | Save cover sheet reminders at a specified level
 Input parameters | {::nomarkdown}LVL, CLASS, DATA{:/}
 Code | {::nomarkdown}  N ORERR,PARAM,I<br> I LVL="CLASS" D  I 1<br> .S PARAM="ORQQPX COVER SHEET REM CLASSES"<br> .S LVL="SYS"<br> .D DEL^XPAR(LVL,PARAM,"`"_CLASS,.ORERR)<br> .D EN^XPAR(LVL,PARAM,"`"_CLASS,.DATA,.ORERR)<br> E  D<br> .S PARAM="ORQQPX COVER SHEET REMINDERS"<br> .D NDEL^XPAR(LVL,PARAM,.ORERR)<br> .S I=0<br> .F  S I=$O(DATA(I)) Q:'I  D<br> ..D EN^XPAR(LVL,PARAM,$P(DATA(I),U,1),$P(DATA(I),U,2),.ORERR)<br> S ORY=1{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReminders.pas">rReminders.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:25:13 am</p>{:/}