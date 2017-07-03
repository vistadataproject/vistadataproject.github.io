---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORQQPX IMMUN LIST
# ORQQPX IMMUN LIST

Returns a list of patient immunizations.

Property | Value
--- | ---
Label | IMMLIST
Routine | [ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PATIENT ID | LITERAL | 16 | true | Patient identifier (DFN) from patient file [#2].



### MUMPS Method Description

Property | Value
--- | ---
Method | [IMMLIST^ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html)
Method Comment | return pt&#x27;s immunization list:
Input Parameters | ORPT
First Comment | {::nomarkdown}<pre><code>id^name^date/time^reaction^inverse d/t</code></pre>{:/}
Code | {::nomarkdown}<pre><code> I $L($T(IMMUN^PXRHS03))<1 S ORY(1)="^Immunizations not available." Q<br/> K ^TMP("PXI",$J)<br/> D IMMUN^PXRHS03(ORPT)<br/> N ORI,IMM,IVDT,IEN,X<br/> S ORI=0,IMM="",IVDT="",IEN=0<br/> F  S IMM=$O(^TMP("PXI",$J,IMM)) Q:IMM=""  D<br/> .F  S IVDT=$O(^TMP("PXI",$J,IMM,IVDT)) Q:IVDT=""  D<br/> ..F  S IEN=$O(^TMP("PXI",$J,IMM,IVDT,IEN)) Q:IEN<1  D<br/> ...S ORI=ORI+1,X=$G(^TMP("PXI",$J,IMM,IVDT,IEN,0)) Q:'$L(X)<br/> ...S ORY(ORI)=IEN_U_IMM_U_$P(X,U,3)<br/> ...I $P(X,U,7)=1 S ORY(ORI)=ORY(ORI)_U_$P(X,U,6)_U_IVDT<br/> ...E  S ORY(ORI)=ORY(ORI)_U_U_IVDT<br/> S:+$G(ORY(1))<1 ORY(1)="^No immunizations found.^2900101^^9999999"<br/> K ^TMP("PXI",$J)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}N/A{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}