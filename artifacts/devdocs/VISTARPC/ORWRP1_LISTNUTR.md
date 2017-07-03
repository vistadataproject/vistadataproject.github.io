---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWRP1 LISTNUTR
# ORWRP1 LISTNUTR



Property | Value
--- | ---
Label | LISTNUTR
Routine | [ORWRP1](http://code.osehra.org/dox/Routine_ORWRP1_source.html)
Return Type | GLOBAL ARRAY




### MUMPS Method Description

Property | Value
--- | ---
Method | [LISTNUTR^ORWRP1](http://code.osehra.org/dox/Routine_ORWRP1_source.html)
Method Comment | list nutritional assessments
Input Parameters | DFN
Code | {::nomarkdown}<pre><code> N OK,I,X,SITE<br/> K ^TMP($J,"FHADT")<br/> S OK=$$FHWORADT^FHWORA(DFN)<br/> S I=0,SITE=$$SITE^VASITE,SITE=$P(SITE,"^",2)_";"_$P(SITE,"^",3)<br/> F  S I=$O(^TMP($J,"FHADT",DFN,I)) Q:'I  S X=SITE_U_I_U_^(I),^(I)=X<br/> S ROOT=$NA(^TMP($J,"FHADT",DFN))</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReports.pas">rReports.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}