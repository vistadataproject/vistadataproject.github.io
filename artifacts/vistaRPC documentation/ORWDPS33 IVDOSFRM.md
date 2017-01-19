---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDPS33 IVDOSFRM 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS33 IVDOSFRM{:/}
 tag | {::nomarkdown}IVDOSFRM{:/}
 routine | [ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ORDERIDS{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}DEFAULTS{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}ALLIV{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} |  | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | IVDOSFRM^[ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html)
 Input parameters | {::nomarkdown}ORDERIDS<br>ALLIV{:/}
 Code | {::nomarkdown}  N ORARRAY,CNT,CNT1,OI,POI<br> S OI="",CNT=0,CNT1=0<br> F  S OI=$O(ORDERIDS(OI)) Q:OI'>0  D<br> .S POI=+$P($G(^ORD(101.43,$G(ORDERIDS(OI)),0)),U,2) Q:POI'>0<br> .S CNT=CNT+1<br> .S ORARRAY(CNT)=POI<br> I CNT=0 Q<br> S ORARRAY(0)=CNT<br> D START1^PSSJORDF(.ORARRAY,ALLIV)<br> S CNT="" F  S CNT=$O(ORARRAY(CNT)) Q:CNT'>0  D<br> .S CNT1=CNT1+1,LST(CNT1)=$G(ORARRAY(CNT))<br> K ^TMP("PSJMR",$J){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:04:53 am</p>{:/}