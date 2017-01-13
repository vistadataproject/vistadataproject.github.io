---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDPS1 DOSEALT 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS1 DOSEALT{:/}
 tag | {::nomarkdown}DOSEALT{:/}
 routine | [ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | return a list of formulary alternatives for dose
 Input Parameters | {::nomarkdown}DDRUG<br/>CUROI<br/>PSTYPE{:/}
 Lines | ```{::nomarkdown} N I,OI,ORWLST,ILST S ILST=0<br/> D ENRFA^PSJORUTL(DDRUG,PSTYPE,.ORWLST)<br/> S I=0 F  S I=$O(ORWLST(I)) Q:'I  D<br/> . S OI=+$O(^ORD(101.43,"ID",+$P(ORWLST(I),U,4)_";99PSP",0))<br/> . I OI,OI'=CUROI S ILST=ILST+1,LST(ILST)=OI_U_$P(^ORD(101.43,OI,0),U)```{:/}




 Generated on January 13th 2017, 7:11:27 am