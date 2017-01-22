---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU TEMPLATE PERSONAL OBJECTS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU TEMPLATE PERSONAL OBJECTS{:/}
 tag | {::nomarkdown}PERSOBJS{:/}
 routine | [TIUSRVT2](http://code.osehra.org/dox/Routine_TIUSRVT2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list or Patient Data Objects allowed in Personal Templates.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | PERSOBJS^[TIUSRVT2](http://code.osehra.org/dox/Routine_TIUSRVT2_source.html)
 Method comment | Returns the list of Patient Data Objects that are
 First comment | {::nomarkdown}<pre>         allowed to be used in Personal Templates</pre>{:/}
 Code | {::nomarkdown}  N SRV<br> K TIUY<br> D OBJACCUM(.TIUY,"USR")<br> S SRV=$$GETSRV(DUZ)<br> I +SRV D OBJACCUM(.TIUY,"SRV.`"_+$G(SRV))<br> D OBJACCUM(.TIUY,"DIV")<br> D OBJACCUM(.TIUY,"SYS"){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Templates/rTemplates.pas">Templates/rTemplates.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:23:02 am</p>{:/}