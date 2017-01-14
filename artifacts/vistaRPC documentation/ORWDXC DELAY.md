---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWDXC DELAY 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXC DELAY{:/}
 tag | {::nomarkdown}DELAY{:/}
 routine | [ORWDXC](http://code.osehra.org/dox/Routine_ORWDXC_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Return list or order checks on accept delayed orders.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | DELAY^[ORWDXC](http://code.osehra.org/dox/Routine_ORWDXC_source.html)
 Method comment | Return list of Order Checks on Accept Delayed
 Input parameters | {::nomarkdown}DFN<br/>FID<br/>STRT<br/>ORL<br/>OIL{:/}
 Code | ```  K ^TMP($J,"OROCOUTO;"),^TMP($J,"OROCOUTI;"),^TMP($J,"DD"),^TMP($J,"ORDSGCHK_CACHE")
 N X,Y,ORCHECK,ORI,ORX,ORY,%DT
 S ORL=ORL_";SC(",X=STRT,STRT=""
 D:X="AM" AM^ORCSAVE2 D:X="NEXT" NEXT^ORCSAVE2
 I $L(X) S %DT="FTX" D ^%DT S:Y'>0 Y="" S STRT=Y
 S (ORI,ORX)=0 F  S ORI=$O(OIL(ORI)) Q:'ORI  D
 . S ORX=ORX+1
 . S ORX(ORX)=+OIL(ORI)_"|"_FID_"|"_$$USID(OIL(ORI))_"|"_STRT
 . I $P(OIL(ORI),U,2)="LR" S $P(ORX(ORX),"|",6)=$P(OIL(ORI),U,3)
 D EN^ORKCHK(.ORY,DFN,.ORX,"ALL",.OIL)
 I $D(ORY) D RETURN^ORCHECK   ; expects ORY, ORCHECK
 D CHK2LST
 K ^TMP($J,"OROCOUTO;"),^TMP($J,"OROCOUTI;"),^TMP($J,"DD"),^TMP($J,"ORDSGCHK_CACHE")```




 Generated on January 14th 2017, 7:26:35 am