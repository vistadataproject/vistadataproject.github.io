---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPX IMMUN LIST 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPX IMMUN LIST{:/}
 tag | {::nomarkdown}IMMLIST{:/}
 routine | [ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of patient immunizations.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PATIENT ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient identifier (DFN) from patient file [#2].{:/} | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | IMMLIST^[ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html)
 Method comment | return pt's immunization list:
 First comment | {::nomarkdown}<pre>id^name^date/time^reaction^inverse d/t</pre>{:/}
 Input parameters | {::nomarkdown}ORPT{:/}
 Code | {::nomarkdown}  I $L($T(IMMUN^PXRHS03))<1 S ORY(1)="^Immunizations not available." Q<br> K ^TMP("PXI",$J)<br> D IMMUN^PXRHS03(ORPT)<br> N ORI,IMM,IVDT,IEN,X<br> S ORI=0,IMM="",IVDT="",IEN=0<br> F  S IMM=$O(^TMP("PXI",$J,IMM)) Q:IMM=""  D<br> .F  S IVDT=$O(^TMP("PXI",$J,IMM,IVDT)) Q:IVDT=""  D<br> ..F  S IEN=$O(^TMP("PXI",$J,IMM,IVDT,IEN)) Q:IEN<1  D<br> ...S ORI=ORI+1,X=$G(^TMP("PXI",$J,IMM,IVDT,IEN,0)) Q:'$L(X)<br> ...S ORY(ORI)=IEN_U_IMM_U_$P(X,U,3)<br> ...I $P(X,U,7)=1 S ORY(ORI)=ORY(ORI)_U_$P(X,U,6)_U_IVDT<br> ...E  S ORY(ORI)=ORY(ORI)_U_U_IVDT<br> S:+$G(ORY(1))<1 ORY(1)="^No immunizations found.^2900101^^9999999"<br> K ^TMP("PXI",$J){:/}


### CPRS

[NOT OSEHRA CPRS]()

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:21:34 am</p>{:/}