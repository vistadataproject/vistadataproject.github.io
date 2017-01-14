---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORCHECK GETMONOL 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORCHECK GETMONOL{:/}
 tag | {::nomarkdown}GETMONOL{:/}
 routine | [ORCHECK](http://code.osehra.org/dox/Routine_ORCHECK_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | GETMONOL^[ORCHECK](http://code.osehra.org/dox/Routine_ORCHECK_source.html)
 Method comment | returns a list of monographs available for the orderchecks being presented to the user
 Code | ```  Q:'$D(^TMP($J,"ORMONOGRAPH"))
 N I S I=0
 F  S I=$O(^TMP($J,"ORMONOGRAPH",I)) Q:'I  D
 .S ORY($G(^TMP($J,"ORMONOGRAPH",I,"INT")))=I_U_$G(^TMP($J,"ORMONOGRAPH",I,"INT"))```




 Generated on January 14th 2017, 7:26:36 am