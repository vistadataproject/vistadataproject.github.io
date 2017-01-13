---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXVB GETALL 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXVB GETALL{:/}
 tag | {::nomarkdown}GETALL{:/}
 routine | [ORWDXVB](http://code.osehra.org/dox/Routine_ORWDXVB_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Return patient's Blood Bank information.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Get all data in one call and let the GUI divide it up
 Input Parameters | {::nomarkdown}DFN<br/>LOC{:/}
 Lines | ```
 N ORX,INFO,CNT,I,J,K,OREAS,OREASON
 S OROOT=$NA(^TMP("ORVBECINFO",$J)),CNT=1
 D GETPAT(.ORX,DFN,LOC)
 I $L($G(ORX("SPECIMEN"))) S:$P(ORX("SPECIMEN"),"^") $P(ORX("SPECIMEN"),"^")=$$HL7TFM^XLFDT($P(ORX("SPECIMEN"),"^")) S CNT=CNT+1,^TMP("ORVBECINFO",$J,CNT)="~SPECIMEN",CNT=CNT+1,^TMP("ORVBECINFO",$J,CNT)="i"_ORX("SPECIMEN")
 I $L($G(ORX("ABORH"))) S CNT=CNT+1,^TMP("ORVBECINFO",$J,CNT)="~ABORH",CNT=CNT+1,^TMP("ORVBECINFO",$J,CNT)="i"_ORX("ABORH")
 S CNT=CNT+1,^TMP("ORVBECINFO",$J,CNT)="~TYPE AND SCREEN",CNT=CNT+1,^TMP("ORVBECINFO",$J,CNT)="i"_$O(^ORD(101.43,"ID","1;99VBC",0))
 S CNT=CNT+1,^TMP("ORVBECINFO",$J,CNT)="~OTHER",CNT=CNT+1,^TMP("ORVBECINFO",$J,CNT)="i"_$O(^ORD(101.43,"ID","6;99VBC",0))
 S CNT=CNT+1,^TMP("ORVBECINFO",$J,CNT)="~SPECIMENS",I=0
 F  S I=$O(ORX(I)) Q:'I  S J="" F  S J=$O(ORX(I,J)) Q:J=""  I J="SPECIMEN" S CNT=CNT+1,^TMP("ORVBECINFO",$J,CNT)="i"_I_"^"_ORX(I,J)
 S CNT=CNT+1,^TMP("ORVBECINFO",$J,CNT)="~TESTS",I=0
 F  S I=$O(ORX(I)) Q:'I  S J="" F  S J=$O(ORX(I,J)) Q:J=""  I J="TEST" S K=0 F  S K=$O(ORX(I,J,K)) Q:'K  S CNT=CNT+1,^TMP("ORVBECINFO",$J,CNT)="i"_I_"^"_K_"^"_ORX(I,J,K)
 S CNT=CNT+1,^TMP("ORVBECINFO",$J,CNT)="~MSBOS",I=0
 F  S I=$O(ORX(I)) Q:'I  S J="" F  S J=$O(ORX(I,J)) Q:J=""  I J="MSBOS" S K=0 F  S K=$O(ORX(I,J,K)) Q:'K  S CNT=CNT+1,^TMP("ORVBECINFO",$J,CNT)="i"_I_"^"_K_"^"_ORX(I,J,K),$P(^(CNT),"^",4)=+$P(ORX(I,J,K),"^",2)
 S CNT=CNT+1,^TMP("ORVBECINFO",$J,CNT)="~SURGERIES",I=0
 F  S I=$O(ORX("SURGERY",I)) Q:'I  S CNT=CNT+1,^TMP("ORVBECINFO",$J,CNT)="i"_I_"^"_ORX("SURGERY",I)
 S CNT=CNT+1,^TMP("ORVBECINFO",$J,CNT)="~URGENCIES",I=""
 F  S I=$O(^ORD(101.42,"S.VBEC",I)) Q:I=""  S J=0 F  S J=$O(^ORD(101.42,"S.VBEC",I,J)) Q:'J  S CNT=CNT+1,^TMP("ORVBECINFO",$J,CNT)="i"_J_"^"_I
 S CNT=CNT+1,^TMP("ORVBECINFO",$J,CNT)="~MODIFIERS",I=""
 N ORMODS D GETLST^XPAR(.ORMODS,"ALL","OR VBECS MODIFIERS","I")
 F  S I=$O(ORMODS(I)) Q:'I  S CNT=CNT+1,^TMP("ORVBECINFO",$J,CNT)="i"_ORMODS(I)
 S CNT=CNT+1,^TMP("ORVBECINFO",$J,CNT)="~REASONS",I=""
 N ORMODS D GETLST^XPAR(.ORMODS,"ALL","OR VBECS REASON FOR REQUEST","I")
 S OREASON=$$GET^XPAR("DIV^SYS^PKG","OR VBECS REASON SORT ALPHA",1,"Q")
 I OREASON D
 . F  S I=$O(ORMODS(I)) Q:'I  S OREAS(" "_$$UP^XLFSTR(ORMODS(I)))=ORMODS(I)
 . S I="" F  S I=$O(OREAS(I)) Q:I=""  S CNT=CNT+1,^TMP("ORVBECINFO",$J,CNT)="i"_OREAS(I)
 I 'OREASON D
 . F  S I=$O(ORMODS(I)) Q:'I  S CNT=CNT+1,^TMP("ORVBECINFO",$J,CNT)="i"_ORMODS(I)
 S CNT=CNT+1,^TMP("ORVBECINFO",$J,CNT)="~INFO"
 D PTINFO(.INFO,.ORX)
 S I=0 F  S I=$O(^TMP("ORVBEC",$J,I)) Q:'I  S CNT=CNT+1,^TMP("ORVBECINFO",$J,CNT)="i"_^TMP("ORVBEC",$J,I,0)
 S CNT=CNT+1,^TMP("ORVBECINFO",$J,CNT)="~TNS ORDERS"
 N ORMODS D PULL^ORWDXVB2(.ORMODS,DFN)
 S I=0 F  S I=$O(ORMODS(I)) Q:'I  S CNT=CNT+1,^TMP("ORVBECINFO",$J,CNT)="i"_ORMODS(I)
 K ^TMP("ORVBEC",$J)```




 Generated on January 13th 2017, 6:55:29 am