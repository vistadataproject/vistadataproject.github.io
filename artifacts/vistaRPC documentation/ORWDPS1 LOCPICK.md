---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDPS1 LOCPICK 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS1 LOCPICK{:/}
 tag | {::nomarkdown}LOCPICK{:/}
 routine | [ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | LOCPICK^[ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html)
 Method comment | return default Location level routing
 Input parameters | {::nomarkdown}LOC{:/}
 Code | {::nomarkdown}  S Y=""<br> S Y=$$GET^XPAR("LOC.`"_LOC_"^SYS","ORWDPS ROUTING DEFAULT",1,"I")<br> I Y="C" S Y="C^in Clinic"<br> I Y="M" S Y="M^by Mail"<br> I Y="W" S Y="W^at Window"<br> I Y="N" S Y=""{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code |  [Orders/rODMeds.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODMeds.pas)


{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 4:54:07 am</p>{:/}