---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWDXC SESSION 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXC SESSION{:/}
 tag | {::nomarkdown}SESSION{:/}
 routine | [ORWDXC](http://code.osehra.org/dox/Routine_ORWDXC_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Return list of order checks on release of order.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | SESSION^[ORWDXC](http://code.osehra.org/dox/Routine_ORWDXC_source.html)
 Method comment | Return list of Order Checks on Release Order
 Input parameters | {::nomarkdown}ORVP<br/>ORLST{:/}
 Code | ```  K ^TMP($J,"OROCOUTO;"),^TMP($J,"OROCOUTI;"),^TMP($J,"DD")
 N ORES,ORCHECK
 S ORVP=+ORVP_";DPT("
 S I=0 F  S I=$O(ORLST(I)) Q:'I  D
 . I +$P(ORLST(I),";",2)'=1 Q  ; order not new
 . I $P(ORLST(I),U,3)="0" Q    ; order not being released
 . S ORES($P(ORLST(I),U))=""
 D SESSION^ORCHECK
 D OPOS(+ORVP)
 D CHK2LST
 D CHECKIT(.LST)
 K ^TMP($J,"OROCOUTO;"),^TMP($J,"OROCOUTI;"),^TMP($J,"DD")```




 Generated on January 14th 2017, 7:26:35 am