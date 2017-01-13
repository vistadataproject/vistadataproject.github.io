---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDPS33 IVDOSFRM 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS33 IVDOSFRM{:/}
 tag | {::nomarkdown}IVDOSFRM{:/}
 routine | [ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Input Parameters | {::nomarkdown}ORDERIDS<br/>ALLIV{:/}
 Lines | ```
 N ORARRAY,CNT,CNT1,OI,POI
 S OI="",CNT=0,CNT1=0
 F  S OI=$O(ORDERIDS(OI)) Q:OI'>0  D
 .S POI=+$P($G(^ORD(101.43,$G(ORDERIDS(OI)),0)),U,2) Q:POI'>0
 .S CNT=CNT+1
 .S ORARRAY(CNT)=POI
 I CNT=0 Q
 S ORARRAY(0)=CNT
 D START1^PSSJORDF(.ORARRAY,ALLIV)
 S CNT="" F  S CNT=$O(ORARRAY(CNT)) Q:CNT'>0  D
 .S CNT1=CNT1+1,LST(CNT1)=$G(ORARRAY(CNT))
 K ^TMP("PSJMR",$J)```

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ORDERIDS{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}DEFAULTS{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}ALLIV{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} |  | 




 Generated on January 13th 2017, 6:55:29 am