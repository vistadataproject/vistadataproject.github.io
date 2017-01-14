---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWRP1 LISTNUTR 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWRP1 LISTNUTR{:/}
 tag | {::nomarkdown}LISTNUTR{:/}
 routine | [ORWRP1](http://code.osehra.org/dox/Routine_ORWRP1_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | list nutritional assessments
 Input Parameters | {::nomarkdown}DFN{:/}
 Lines | {::nomarkdown} N OK,I,X,SITE<br/> K ^TMP($J,"FHADT")<br/> S OK=$$FHWORADT^FHWORA(DFN)<br/> S I=0,SITE=$$SITE^VASITE,SITE=$P(SITE,"^",2)_";"_$P(SITE,"^",3)<br/> F  S I=$O(^TMP($J,"FHADT",DFN,I)) Q:'I  S X=SITE_U_I_U_^(I),^(I)=X<br/> S ROOT=$NA(^TMP($J,"FHADT",DFN)){:/}




 Generated on January 13th 2017, 7:15:27 am