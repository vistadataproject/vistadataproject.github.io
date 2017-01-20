---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU REMINDER DIALOGS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU REMINDER DIALOGS{:/}
 tag | {::nomarkdown}REMDLGS{:/}
 routine | [TIUSRVT2](http://code.osehra.org/dox/Routine_TIUSRVT2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of reminder dialogs allowed for use as Templates.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | REMDLGS^[TIUSRVT2](http://code.osehra.org/dox/Routine_TIUSRVT2_source.html)
 Method comment | Returns a list of all reminder dialogs usable in templates
 Code | {::nomarkdown}  N SRV<br> K TIUY<br> D RDACCUM(.TIUY,"USR","N")<br> S SRV=$$GETSRV(DUZ)<br> D RDACCUM(.TIUY,"SRV.`"_+$G(SRV),"N")<br> D RDACCUM(.TIUY,"DIV","N")<br> D RDACCUM(.TIUY,"SYS","N"){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Templates/rTemplates.pas">Templates/rTemplates.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 5:08:32 am</p>{:/}