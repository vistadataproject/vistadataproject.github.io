---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWDPS32 FORMALT 


 ## VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS32 FORMALT{:/}
 tag | {::nomarkdown}FORMALT{:/}
 routine | [ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Return a list of formulary alternatives.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | FORMALT^[ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html)
 Method comment | return a list of formulary alternatives
 Input parameters | {::nomarkdown}IEN<br/>PSTYPE{:/}
 Code | ```  D ENRFA^PSJORUTL(IEN,PSTYPE,.ORLST)<br/> S I=0 F  S I=$O(ORLST(I)) Q:'I  D<br/> . S OI=+$O(^ORD(101.43,"ID",+$P(ORLST(I),U,4)_";99PSP",0))<br/> . S $P(ORLST(I),U,4)=OI I OI S $P(ORLST(I),U,5)=$P(^ORD(101.43,OI,0),U)```{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:36:24 am</p>{:/}