---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWRP1 LISTNUTR 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWRP1 LISTNUTR{:/}
 tag | {::nomarkdown}LISTNUTR{:/}
 routine | [ORWRP1](http://code.osehra.org/dox/Routine_ORWRP1_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | LISTNUTR^[ORWRP1](http://code.osehra.org/dox/Routine_ORWRP1_source.html)
 Method comment | list nutritional assessments
 Input parameters | {::nomarkdown}DFN{:/}
 Code | {::nomarkdown}  N OK,I,X,SITE<br> K ^TMP($J,"FHADT")<br> S OK=$$FHWORADT^FHWORA(DFN)<br> S I=0,SITE=$$SITE^VASITE,SITE=$P(SITE,"^",2)_";"_$P(SITE,"^",3)<br> F  S I=$O(^TMP($J,"FHADT",DFN,I)) Q:'I  S X=SITE_U_I_U_^(I),^(I)=X<br> S ROOT=$NA(^TMP($J,"FHADT",DFN)){:/}


### CPRS

[rReports.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReports.pas)


{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:28:50 am</p>{:/}