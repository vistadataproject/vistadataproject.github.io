---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWPCE SK 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE SK{:/}
 tag | {::nomarkdown}SK{:/}
 routine | [ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of skin tests for a clinic.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | SK^[ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
 Method comment | get list of skin test for clinic
 Input parameters | {::nomarkdown}CLINIC{:/}
 Code | ```  D GETLST^IBDF18A(CLINIC,"PX SELECT SKIN TESTS","LST")```




 Generated on January 14th 2017, 7:26:35 am