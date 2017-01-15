---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPCE SK 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE SK{:/}
 tag | {::nomarkdown}SK{:/}
 routine | [ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of skin tests for a clinic.{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | SK^[ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
 Method comment | get list of skin test for clinic
 Input parameters | {::nomarkdown}CLINIC{:/}
 Code | {::nomarkdown}  D GETLST^IBDF18A(CLINIC,"PX SELECT SKIN TESTS","LST"){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:50 am</p>{:/}