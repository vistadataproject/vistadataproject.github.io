---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXC SESSION 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXC SESSION{:/}
 tag | {::nomarkdown}SESSION{:/}
 routine | [ORWDXC](http://code.osehra.org/dox/Routine_ORWDXC_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Return list of order checks on release of order.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Return list of Order Checks on Release Order
 Input Parameters | {::nomarkdown}ORVP<br/>ORLST{:/}
 Lines | ```{::nomarkdown} K ^TMP($J,"OROCOUTO;"),^TMP($J,"OROCOUTI;"),^TMP($J,"DD")<br/> N ORES,ORCHECK<br/> S ORVP=+ORVP_";DPT("<br/> S I=0 F  S I=$O(ORLST(I)) Q:'I  D<br/> . I +$P(ORLST(I),";",2)'=1 Q  ; order not new<br/> . I $P(ORLST(I),U,3)="0" Q    ; order not being released<br/> . S ORES($P(ORLST(I),U))=""<br/> D SESSION^ORCHECK<br/> D OPOS(+ORVP)<br/> D CHK2LST<br/> D CHECKIT(.LST)<br/> K ^TMP($J,"OROCOUTO;"),^TMP($J,"OROCOUTI;"),^TMP($J,"DD")```{:/}




 Generated on January 13th 2017, 7:11:27 am