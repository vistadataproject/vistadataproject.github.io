---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDPS1 FORMALT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS1 FORMALT{:/}
 tag | {::nomarkdown}FORMALT{:/}
 routine | [ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | FORMALT^[ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html)
 Method comment | return a list of formulary alternatives
 Input parameters | {::nomarkdown}ORIEN<br>PSTYPE{:/}
 Code | {::nomarkdown}  N PSID,I<br> S ORIEN=+$P(^ORD(101.43,ORIEN,0),U,2)<br> D EN1^PSSUTIL1(.ORIEN,PSTYPE)<br> S PSID=0,I=0<br> F  S PSID=$O(ORIEN(PSID)) Q:'PSID  D<br> . S OI=+$O(^ORD(101.43,"ID",PSID_";99PSP",0))<br> . I OI S I=I+1,ORLST(I)=OI,$P(ORLST(I),U,2)=$P(^ORD(101.43,OI,0),U){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:04:53 am</p>{:/}