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

 Property | Value 
 --- | --- 
 Method | SESSION^[ORWDXC](http://code.osehra.org/dox/Routine_ORWDXC_source.html)
 Method comment | Return list of Order Checks on Release Order
 Input parameters | {::nomarkdown}ORVP, ORLST{:/}
 Code | {::nomarkdown}  K ^TMP($J,"OROCOUTO;"),^TMP($J,"OROCOUTI;"),^TMP($J,"DD")<br> N ORES,ORCHECK<br> S ORVP=+ORVP_";DPT("<br> S I=0 F  S I=$O(ORLST(I)) Q:'I  D<br> . I +$P(ORLST(I),";",2)'=1 Q  ; order not new<br> . I $P(ORLST(I),U,3)="0" Q    ; order not being released<br> . S ORES($P(ORLST(I),U))=""<br> D SESSION^ORCHECK<br> D OPOS(+ORVP)<br> D CHK2LST<br> D CHECKIT(.LST)<br> K ^TMP($J,"OROCOUTO;"),^TMP($J,"OROCOUTI;"),^TMP($J,"DD"){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:20:09 am</p>{:/}