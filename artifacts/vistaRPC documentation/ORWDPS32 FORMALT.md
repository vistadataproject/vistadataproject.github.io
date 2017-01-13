---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDPS32 FORMALT 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS32 FORMALT{:/}
 tag | {::nomarkdown}FORMALT{:/}
 routine | [ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Return a list of formulary alternatives.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | return a list of formulary alternatives
 Input Parameters | {::nomarkdown}IEN<br/>PSTYPE{:/}
 Lines | ```
 D ENRFA^PSJORUTL(IEN,PSTYPE,.ORLST)
 S I=0 F  S I=$O(ORLST(I)) Q:'I  D
 . S OI=+$O(^ORD(101.43,"ID",+$P(ORLST(I),U,4)_";99PSP",0))
 . S $P(ORLST(I),U,4)=OI I OI S $P(ORLST(I),U,5)=$P(^ORD(101.43,OI,0),U)```




 Generated on January 13th 2017, 6:55:29 am