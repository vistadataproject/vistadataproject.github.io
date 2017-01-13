---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDPS32 DOSES 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS32 DOSES{:/}
 tag | {::nomarkdown}DOSES{:/}
 routine | [ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Return doses for an orderable item.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | return doses for an orderable item  -  TEST ONLY
 Input Parameters | {::nomarkdown}OI{:/}
 Lines | ```
 N ORTMP,ORI,ORJ,ILST,LTSA,NDF,ORWDRG,VAPN,X,PSTYPE S PSTYPE="O"
 D ENDD^PSJORUTL("^^^"_+$P($G(^ORD(101.43,OI,0)),"^",2),PSTYPE,.ORTMP)
 S ORI=0 F  S ORI=$O(ORTMP(ORI)) Q:'ORI  S ORWDRG=+ORTMP(ORI) D
 . K ^TMP($J,"ORWDPS32 DRUG")
 . D NDF^PSS50(+ORWDRG,,,,,"ORWDPS32 DRUG")
 . S VAPN=$P($G(^TMP($J,"ORWDPS32 DRUG",+ORWDRG,22)),U),NDF=$P($G(^TMP($J,"ORWDPS32 DRUG",+ORWDRG,20)),U)
 . S X=$$DFSU^PSNAPIS(NDF,VAPN)
 . S LSTA($P(X,U,4),$P(X,U,6))=""
 . I +$P(X,U,4)=$P(X,U,4) S LSTA($P(X,U,4)*2,$P(X,U,6))=""
 K ^TMP($J,"ORWDPS32 DRUG")
 S ORI="",ILST=0 F  S ORI=$O(LSTA(ORI)) Q:ORI=""  D
 . S ORJ="" F  S ORJ=$O(LSTA(ORI,ORJ)) Q:ORJ=""  D
 . . S ILST=ILST+1,LST(ILST)=ORI_" "_ORJ```




 Generated on January 13th 2017, 6:55:29 am