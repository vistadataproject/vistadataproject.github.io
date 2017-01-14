---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWRP1 LISTNUTR 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWRP1 LISTNUTR{:/}
 tag | {::nomarkdown}LISTNUTR{:/}
 routine | [ORWRP1](http://code.osehra.org/dox/Routine_ORWRP1_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | LISTNUTR^[ORWRP1](http://code.osehra.org/dox/Routine_ORWRP1_source.html)
 Method comment | list nutritional assessments
 Input parameters | {::nomarkdown}DFN{:/}
 Code | ```  N OK,I,X,SITE
 K ^TMP($J,"FHADT")
 S OK=$$FHWORADT^FHWORA(DFN)
 S I=0,SITE=$$SITE^VASITE,SITE=$P(SITE,"^",2)_";"_$P(SITE,"^",3)
 F  S I=$O(^TMP($J,"FHADT",DFN,I)) Q:'I  S X=SITE_U_I_U_^(I),^(I)=X
 S ROOT=$NA(^TMP($J,"FHADT",DFN))```




 Generated on January 14th 2017, 7:26:35 am