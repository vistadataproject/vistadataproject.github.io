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
 Lines | ```
 N PSID,I
 S ORIEN=+$P(^ORD(101.43,ORIEN,0),U,2)
 D EN1^PSSUTIL1(.ORIEN,PSTYPE)
 S PSID=0,I=0
 F  S PSID=$O(ORIEN(PSID)) Q:'PSID  D
 . S OI=+$O(^ORD(101.43,"ID",PSID_";99PSP",0))
 . I OI S I=I+1,ORLST(I)=OI,$P(ORLST(I),U,2)=$P(^ORD(101.43,OI,0),U)```




 Generated on January 13th 2017, 6:55:29 am