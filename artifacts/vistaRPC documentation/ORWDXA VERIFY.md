---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXA VERIFY 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXA VERIFY{:/}
 tag | {::nomarkdown}VERIFY{:/}
 routine | [ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Verify an order via CPRS GUI.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Verify order
 Input Parameters | {::nomarkdown}ORID<br/>ESCODE<br/>ORVER{:/}
 Lines | {::nomarkdown} S ORVER=$G(ORVER,$S($D(^XUSEC("ORELSE",DUZ)):"N",$D(^XUSEC("OREMAS",DUZ)):"C",1:U))<br/> I ORVER'=U D<br/> . N ORIFN,ORES,ORI<br/> . ; VERIFY any replaced orders:<br/> . S ORIFN=ORID,ORES(ORIFN)="" D REPLCD^ORCACT1<br/> . S ORI="" F  S ORI=$O(ORES(ORI)) Q:ORI=""  D EN^ORCSEND(ORI,"VR","",""),UNLK1^ORX2(+ORI):ORI'=ORID ;ORID locked prior<br/> D GETBYIFN^ORWORR(.REC,ORID){:/}
 Leading comment lines | {::nomarkdown}validate ESCode{:/}




 Generated on January 13th 2017, 7:15:27 am