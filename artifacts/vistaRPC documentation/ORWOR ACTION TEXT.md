---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWOR ACTION TEXT 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWOR ACTION TEXT{:/}
 tag | {::nomarkdown}ACTXT{:/}
 routine | [ORWOR](http://code.osehra.org/dox/Routine_ORWOR_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Return detail action information
 Input Parameters | {::nomarkdown}ORIFN{:/}
 Lines | ```
 N ORI,CNT,OR0,OR3,OR6,ACTION
 K ^TMP("ORACTXT",$J)
 S ORY="^TMP(""ORACTXT"",$J)",ORI=$P(ORIFN,";",2)
 S CNT=0,ORIFN=+ORIFN,OR0=$G(^OR(100,ORIFN,0)),OR3=$G(^(3)),OR6=$G(^(6))
 F  S ORI=$O(^OR(100,+ORIFN,8,ORI)) Q:ORI'>0  S ACTION=$G(^(ORI,0)) D ACT^ORQ20
 S ORY=$NA(^TMP("ORACTXT",$J)),@ORY=""```




 Generated on January 13th 2017, 6:55:29 am