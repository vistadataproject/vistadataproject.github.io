---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU REM DLG OK AS TEMPLATE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU REM DLG OK AS TEMPLATE{:/}
 tag | {::nomarkdown}REMDLGOK{:/}
 routine | [TIUSRVT2](http://code.osehra.org/dox/Routine_TIUSRVT2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns TRUE is the passed in reminder dialog is allowed to be used ina TIU Template.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUIEN{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Reminder Dialog IEN.{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | REMDLGOK^[TIUSRVT2](http://code.osehra.org/dox/Routine_TIUSRVT2_source.html)
 Method comment | Returns TRUE if the passed in Reminder Dialog IEN is
 Input parameters | {::nomarkdown}TIUIEN{:/}
 First comment | {::nomarkdown}<pre>                Allowed to be used as a TIU Template</pre>{:/}
 Code | {::nomarkdown}  N TIULST,SRV<br> S TIUY=-1<br> I '$D(^PXRMD(801.41,+$G(TIUIEN))) Q<br> I +$P(^PXRMD(801.41,+$G(TIUIEN),0),U,3)>0 Q  ;ICR 3410<br> S TIUY=1<br> D RDACCUM(.TIULST,"USR","Q")<br> I $$RDINLST(.TIULST,TIUIEN) Q<br> S SRV=$$GETSRV(DUZ)<br> D RDACCUM(.TIULST,"SRV.`"_+$G(SRV),"Q")<br> I $$RDINLST(.TIULST,TIUIEN) Q<br> D RDACCUM(.TIULST,"DIV","Q")<br> I $$RDINLST(.TIULST,TIUIEN) Q<br> D RDACCUM(.TIULST,"SYS","Q")<br> I $$RDINLST(.TIULST,TIUIEN) Q<br> S TIUY=0{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Templates/rTemplates.pas">Templates/rTemplates.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:20:09 am</p>{:/}