---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWDFH FINDTYP 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWDFH FINDTYP{:/}
 tag | {::nomarkdown}FINDTYP{:/}
 routine | [ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Return type of dietetics order based on display group.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | FINDTYP^[ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html)
 Method comment | Return type of dietetics order based on display group
 Input parameters | {::nomarkdown}DGRP{:/}
 Code | ```  S VAL=$P($G(^ORD(100.98,DGRP,0)),U,3)
 S:VAL="D AO" VAL="A" S VAL=$E(VAL)```




 Generated on January 14th 2017, 7:26:35 am