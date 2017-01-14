---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWPCE IMM 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE IMM{:/}
 tag | {::nomarkdown}IMM{:/}
 routine | [ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of immunizations for a clinic.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | IMM^[ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
 Method comment | get list of immunizations for clinic
 Input parameters | {::nomarkdown}CLINIC{:/}
 Code | ```  D GETLST^IBDF18A(CLINIC,"PX SELECT IMMUNIZATIONS","LST")```




 Generated on January 14th 2017, 7:26:35 am