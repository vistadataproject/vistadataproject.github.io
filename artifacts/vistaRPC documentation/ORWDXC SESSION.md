---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXC SESSION 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXC SESSION{:/}
 tag | {::nomarkdown}SESSION{:/}
 routine | [ORWDXC](http://code.osehra.org/dox/Routine_ORWDXC_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Return list of order checks on release of order.{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | SESSION^[ORWDXC](http://code.osehra.org/dox/Routine_ORWDXC_source.html)
 Method comment | Return list of Order Checks on Release Order
 Input parameters | {::nomarkdown}ORVP<br>ORLST{:/}
 Code | {::nomarkdown}  K ^TMP($J,"OROCOUTO;"),^TMP($J,"OROCOUTI;"),^TMP($J,"DD")<br> N ORES,ORCHECK<br> S ORVP=+ORVP_";DPT("<br> S I=0 F  S I=$O(ORLST(I)) Q:'I  D<br> . I +$P(ORLST(I),";",2)'=1 Q  ; order not new<br> . I $P(ORLST(I),U,3)="0" Q    ; order not being released<br> . S ORES($P(ORLST(I),U))=""<br> D SESSION^ORCHECK<br> D OPOS(+ORVP)<br> D CHK2LST<br> D CHECKIT(.LST)<br> K ^TMP($J,"OROCOUTO;"),^TMP($J,"OROCOUTI;"),^TMP($J,"DD"){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:50 am</p>{:/}