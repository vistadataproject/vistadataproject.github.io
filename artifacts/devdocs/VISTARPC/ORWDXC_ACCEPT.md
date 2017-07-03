---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWDXC ACCEPT
# ORWDXC ACCEPT

Return list of Order Checks on Accept Order.

Property | Value
--- | ---
Label | ACCEPT
Routine | [ORWDXC](http://code.osehra.org/dox/Routine_ORWDXC_source.html)
Return Type | ARRAY




### MUMPS Method Description

Property | Value
--- | ---
Method | [ACCEPT^ORWDXC](http://code.osehra.org/dox/Routine_ORWDXC_source.html)
Method Comment | Return list of Order Checks on Accept Order
Input Parameters | DFN, FID, STRT, ORL, OIL, ORIFN, ORREN
Code | {::nomarkdown}<pre><code> K ^TMP($J,"OROCOUTO;"),^TMP($J,"OROCOUTI;"),^TMP($J,"ORDSGCHK_CACHE")<br/> K ^TMP($J,"ORENHCHK")<br/> N X,Y,USID,ORCHECK,ORI,ORX,ORY,%DT,ORDODSG<br/> S ORL=ORL_";SC(",X=STRT,STRT="",ORDODSG=0<br/> D:X="AM" AM^ORCSAVE2 D:X="NEXT" NEXT^ORCSAVE2<br/> I $L(X) S %DT="FTX" D ^%DT S:Y'>0 Y="" S STRT=Y<br/> S (ORI,ORX)=0 F  S ORI=$O(OIL(ORI)) Q:'ORI  D<br/> . Q:'OIL(ORI)<br/> . S USID=$$USID(OIL(ORI))<br/> . S OIL(ORI,"USID")=USID<br/> . S ORX=ORX+1,ORX(ORX)=+OIL(ORI)_"/"_FID_"/"_USID<br/> . S:$P(OIL(ORI),U,2)="PSIV" $P(ORX(ORX),"/",7)=$P($P(OIL(ORI),U,3),";")<br/> D EN^ORKCHK(.ORY,DFN,.ORX,"SELECT",.OIL,.ORDODSG)<br/> I $D(ORY) D RETURN^ORCHECK ; expects ORY, ORCHECK<br/> K ORX,ORY<br/> S (ORI,ORX)=0 F  S ORI=$O(OIL(ORI)) Q:'ORI  D<br/> . Q:'OIL(ORI)<br/> . S ORX=ORX+1<br/> . S ORX(ORX)=+OIL(ORI)_"/"_FID_"/"_OIL(ORI,"USID")_"/"_STRT<br/> . S:$P(OIL(ORI),U,2)="LR" $P(ORX(ORX),"/",6)=$P(OIL(ORI),U,3)<br/> D EN^ORKCHK(.ORY,DFN,.ORX,"ACCEPT",.OIL,.ORDODSG)<br/> I $D(ORY) D RETURN^ORCHECK   ; expects ORY, ORCHECK<br/> D FDBDOWN^ORCHECK(0)<br/> D OPOS(DFN)<br/> D CHK2LST<br/> K ^TMP($J,"OROCOUTO;"),^TMP($J,"OROCOUTI;"),^TMP($J,"DD"),^TMP($J,"ORDSGCHK_CACHE")</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}