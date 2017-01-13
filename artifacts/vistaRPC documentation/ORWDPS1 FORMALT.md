---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDPS1 FORMALT 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS1 FORMALT{:/}
 tag | {::nomarkdown}FORMALT{:/}
 routine | [ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | return a list of formulary alternatives
 Input Parameters | {::nomarkdown}ORIEN<br/>PSTYPE{:/}
 Lines | ```{::nomarkdown} N PSID,I<br/> S ORIEN=+$P(^ORD(101.43,ORIEN,0),U,2)<br/> D EN1^PSSUTIL1(.ORIEN,PSTYPE)<br/> S PSID=0,I=0<br/> F  S PSID=$O(ORIEN(PSID)) Q:'PSID  D<br/> . S OI=+$O(^ORD(101.43,"ID",PSID_";99PSP",0))<br/> . I OI S I=I+1,ORLST(I)=OI,$P(ORLST(I),U,2)=$P(^ORD(101.43,OI,0),U)```{:/}




 Generated on January 13th 2017, 7:11:27 am