---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPCE HF 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE HF{:/}
 tag | {::nomarkdown}HF{:/}
 routine | [ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of health factors for a clinic.{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | HF^[ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
 Method comment | get list of health factors for clinic
 Input parameters | {::nomarkdown}CLINIC{:/}
 Code | {::nomarkdown}  D GETLST^IBDF18A(CLINIC,"PX SELECT HEALTH FACTORS","LST"){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 8:55:11 am</p>{:/}