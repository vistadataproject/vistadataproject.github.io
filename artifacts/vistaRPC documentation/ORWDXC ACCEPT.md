---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXC ACCEPT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXC ACCEPT{:/}
 tag | {::nomarkdown}ACCEPT{:/}
 routine | [ORWDXC](http://code.osehra.org/dox/Routine_ORWDXC_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Return list of Order Checks on Accept Order.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | ACCEPT^[ORWDXC](http://code.osehra.org/dox/Routine_ORWDXC_source.html)
 Method comment | Return list of Order Checks on Accept Order
 Input parameters | {::nomarkdown}DFN, FID, STRT, ORL, OIL, ORIFN, ORREN{:/}
 Code | {::nomarkdown}  K ^TMP($J,"OROCOUTO;"),^TMP($J,"OROCOUTI;"),^TMP($J,"ORDSGCHK_CACHE")<br> K ^TMP($J,"ORENHCHK")<br> N X,Y,USID,ORCHECK,ORI,ORX,ORY,%DT,ORDODSG<br> S ORL=ORL_";SC(",X=STRT,STRT="",ORDODSG=0<br> D:X="AM" AM^ORCSAVE2 D:X="NEXT" NEXT^ORCSAVE2<br> I $L(X) S %DT="FTX" D ^%DT S:Y'>0 Y="" S STRT=Y<br> S (ORI,ORX)=0 F  S ORI=$O(OIL(ORI)) Q:'ORI  D<br> . Q:'OIL(ORI)<br> . S USID=$$USID(OIL(ORI))<br> . S OIL(ORI,"USID")=USID<br> . S ORX=ORX+1,ORX(ORX)=+OIL(ORI)_"/"_FID_"/"_USID<br> . S:$P(OIL(ORI),U,2)="PSIV" $P(ORX(ORX),"/",7)=$P($P(OIL(ORI),U,3),";")<br> D EN^ORKCHK(.ORY,DFN,.ORX,"SELECT",.OIL,.ORDODSG)<br> I $D(ORY) D RETURN^ORCHECK ; expects ORY, ORCHECK<br> K ORX,ORY<br> S (ORI,ORX)=0 F  S ORI=$O(OIL(ORI)) Q:'ORI  D<br> . Q:'OIL(ORI)<br> . S ORX=ORX+1<br> . S ORX(ORX)=+OIL(ORI)_"/"_FID_"/"_OIL(ORI,"USID")_"/"_STRT<br> . S:$P(OIL(ORI),U,2)="LR" $P(ORX(ORX),"/",6)=$P(OIL(ORI),U,3)<br> D EN^ORKCHK(.ORY,DFN,.ORX,"ACCEPT",.OIL,.ORDODSG)<br> I $D(ORY) D RETURN^ORCHECK   ; expects ORY, ORCHECK<br> D FDBDOWN^ORCHECK(0)<br> D OPOS(DFN)<br> D CHK2LST<br> K ^TMP($J,"OROCOUTO;"),^TMP($J,"OROCOUTI;"),^TMP($J,"DD"),^TMP($J,"ORDSGCHK_CACHE"){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 3rd 2017, 7:02:04 am</p>{:/}