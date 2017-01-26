---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXC DELAY 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXC DELAY{:/}
 tag | {::nomarkdown}DELAY{:/}
 routine | [ORWDXC](http://code.osehra.org/dox/Routine_ORWDXC_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Return list or order checks on accept delayed orders.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | DELAY^[ORWDXC](http://code.osehra.org/dox/Routine_ORWDXC_source.html)
 Method comment | Return list of Order Checks on Accept Delayed
 Input parameters | {::nomarkdown}DFN, FID, STRT, ORL, OIL{:/}
 Code | {::nomarkdown}  K ^TMP($J,"OROCOUTO;"),^TMP($J,"OROCOUTI;"),^TMP($J,"DD"),^TMP($J,"ORDSGCHK_CACHE")<br> N X,Y,ORCHECK,ORI,ORX,ORY,%DT<br> S ORL=ORL_";SC(",X=STRT,STRT=""<br> D:X="AM" AM^ORCSAVE2 D:X="NEXT" NEXT^ORCSAVE2<br> I $L(X) S %DT="FTX" D ^%DT S:Y'>0 Y="" S STRT=Y<br> S (ORI,ORX)=0 F  S ORI=$O(OIL(ORI)) Q:'ORI  D<br> . S ORX=ORX+1<br> . S ORX(ORX)=+OIL(ORI)_"|"_FID_"|"_$$USID(OIL(ORI))_"|"_STRT<br> . I $P(OIL(ORI),U,2)="LR" S $P(ORX(ORX),"|",6)=$P(OIL(ORI),U,3)<br> D EN^ORKCHK(.ORY,DFN,.ORX,"ALL",.OIL)<br> I $D(ORY) D RETURN^ORCHECK   ; expects ORY, ORCHECK<br> D CHK2LST<br> K ^TMP($J,"OROCOUTO;"),^TMP($J,"OROCOUTI;"),^TMP($J,"DD"),^TMP($J,"ORDSGCHK_CACHE"){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 8:30:44 pm</p>{:/}