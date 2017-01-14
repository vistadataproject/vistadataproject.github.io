---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWPCE GAFOK 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE GAFOK{:/}
 tag | {::nomarkdown}GAFOK{:/}
 routine | [ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns TRUE if supporting mental health code exists to read and writeGAF scores.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | GAFOK^[ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 Method comment | Returns true if all supporting MH GAF Code exists
 Code | ```  S ORY=0
 I $T(GAFHX^YSGAFAPI)'="",$T(ENT^YSGAFAP1)'="" S ORY=1```




 Generated on January 14th 2017, 7:26:35 am