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
 Code | ```  Q:'$D(^TMP($J,"ORMONOGRAPH"))<br/> N I S I=0<br/> F  S I=$O(^TMP($J,"ORMONOGRAPH",I)) Q:'I  D<br/> .S ORY($G(^TMP($J,"ORMONOGRAPH",I,"INT")))=I_U_$G(^TMP($J,"ORMONOGRAPH",I,"INT"))```{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:36:25 am</p>{:/}