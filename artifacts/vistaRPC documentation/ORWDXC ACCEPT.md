---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXC ACCEPT 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXC ACCEPT{:/}
 tag | {::nomarkdown}ACCEPT{:/}
 routine | [ORWDXC](http://code.osehra.org/dox/Routine_ORWDXC_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Return list of Order Checks on Accept Order.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Return list of Order Checks on Accept Order
 Input Parameters | {::nomarkdown}DFN<br/>FID<br/>STRT<br/>ORL<br/>OIL<br/>ORIFN<br/>ORREN{:/}
 Lines | ```
 K ^TMP($J,"OROCOUTO;"),^TMP($J,"OROCOUTI;"),^TMP($J,"ORDSGCHK_CACHE")
 K ^TMP($J,"ORENHCHK")
 N X,Y,USID,ORCHECK,ORI,ORX,ORY,%DT,ORDODSG
 S ORL=ORL_";SC(",X=STRT,STRT="",ORDODSG=0
 D:X="AM" AM^ORCSAVE2 D:X="NEXT" NEXT^ORCSAVE2
 I $L(X) S %DT="FTX" D ^%DT S:Y'>0 Y="" S STRT=Y
 S (ORI,ORX)=0 F  S ORI=$O(OIL(ORI)) Q:'ORI  D
 . Q:'OIL(ORI)
 . S USID=$$USID(OIL(ORI))
 . S OIL(ORI,"USID")=USID
 . S ORX=ORX+1,ORX(ORX)=+OIL(ORI)_"|"_FID_"|"_USID
 . S:$P(OIL(ORI),U,2)="PSIV" $P(ORX(ORX),"|",7)=$P($P(OIL(ORI),U,3),";")
 D EN^ORKCHK(.ORY,DFN,.ORX,"SELECT",.OIL,.ORDODSG)
 I $D(ORY) D RETURN^ORCHECK ; expects ORY, ORCHECK
 K ORX,ORY
 S (ORI,ORX)=0 F  S ORI=$O(OIL(ORI)) Q:'ORI  D
 . Q:'OIL(ORI)
 . S ORX=ORX+1
 . S ORX(ORX)=+OIL(ORI)_"|"_FID_"|"_OIL(ORI,"USID")_"|"_STRT
 . S:$P(OIL(ORI),U,2)="LR" $P(ORX(ORX),"|",6)=$P(OIL(ORI),U,3)
 D EN^ORKCHK(.ORY,DFN,.ORX,"ACCEPT",.OIL,.ORDODSG)
 I $D(ORY) D RETURN^ORCHECK   ; expects ORY, ORCHECK
 D FDBDOWN^ORCHECK(0)
 D OPOS(DFN)
 D CHK2LST
 K ^TMP($J,"OROCOUTO;"),^TMP($J,"OROCOUTI;"),^TMP($J,"DD"),^TMP($J,"ORDSGCHK_CACHE")```




 Generated on January 13th 2017, 6:55:29 am