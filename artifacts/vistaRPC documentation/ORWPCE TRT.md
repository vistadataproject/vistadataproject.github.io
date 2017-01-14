---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWPCE TRT 


 ## VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE TRT{:/}
 tag | {::nomarkdown}TRT{:/}
 routine | [ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of treatments for a clinic.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | TRT^[ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
 Method comment | get list of treatments for clinic
 Input parameters | {::nomarkdown}CLINIC{:/}
 Code | ```  D GETLST^IBDF18A(CLINIC,"PX SELECT TREATMENTS","LST")```{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:36:24 am</p>{:/}