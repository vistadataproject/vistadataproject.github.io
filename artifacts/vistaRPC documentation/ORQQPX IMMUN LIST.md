---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPX IMMUN LIST 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPX IMMUN LIST{:/}
 tag | {::nomarkdown}IMMLIST{:/}
 routine | [ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of patient immunizations.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | return pt's immunization list:
 Input Parameters | {::nomarkdown}ORPT{:/}
 Lines | ```
 I $L($T(IMMUN^PXRHS03))<1 S ORY(1)="^Immunizations not available." Q
 K ^TMP("PXI",$J)
 D IMMUN^PXRHS03(ORPT)
 N ORI,IMM,IVDT,IEN,X
 S ORI=0,IMM="",IVDT="",IEN=0
 F  S IMM=$O(^TMP("PXI",$J,IMM)) Q:IMM=""  D
 .F  S IVDT=$O(^TMP("PXI",$J,IMM,IVDT)) Q:IVDT=""  D
 ..F  S IEN=$O(^TMP("PXI",$J,IMM,IVDT,IEN)) Q:IEN<1  D
 ...S ORI=ORI+1,X=$G(^TMP("PXI",$J,IMM,IVDT,IEN,0)) Q:'$L(X)
 ...S ORY(ORI)=IEN_U_IMM_U_$P(X,U,3)
 ...I $P(X,U,7)=1 S ORY(ORI)=ORY(ORI)_U_$P(X,U,6)_U_IVDT
 ...E  S ORY(ORI)=ORY(ORI)_U_U_IVDT
 S:+$G(ORY(1))<1 ORY(1)="^No immunizations found.^2900101^^9999999"
 K ^TMP("PXI",$J)```
 Leading comment lines | {::nomarkdown}id^name^date/time^reaction^inverse d/t{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PATIENT ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient identifier (DFN) from patient file [#2].{:/} | 




 Generated on January 13th 2017, 6:55:28 am