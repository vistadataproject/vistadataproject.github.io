---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORCDLR2 CHECK ALL LC TO WC 

 property | value 
--- | --- 
 label | {::nomarkdown}ORCDLR2 CHECK ALL LC TO WC{:/}
 tag | {::nomarkdown}GUI{:/}
 routine | [ORCDLR2](http://code.osehra.org/dox/Routine_ORCDLR2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | ck list of ORDERS for labs w/invalid coll times
 Input Parameters | {::nomarkdown}ORL<br/>ORDERS{:/}
 Lines | ```
 N ORI,ORIFN,ORCNT,RES,I,N,DAD,X
 K ^TMP($J,"ORLRGUI") S ORCNT=0
 S ORI="" F  S ORI=$O(ORDERS(ORI)) Q:ORI=""  D
 . Q:+$P(ORDERS(ORI),";",2)>1          ;only ck NW order actions
 . S ORIFN=+ORDERS(ORI) Q:'$$LC(ORIFN)  ;only ck Lab, LC/I orders
 . K RES D KIDS(.RES,$G(ORL),ORIFN)
 . S I=0 F  S I=$O(RES(I)) Q:I<1  I $P(RES(I),U,2) K RES(I)
 . Q:'$O(RES(0))  ;no invalid times found
 . S ORCNT=ORCNT+1,^TMP($J,"ORLRGUI",ORCNT)=ORIFN
 . S I=0 F  S I=$O(RES(I)) Q:I<1  S ^TMP($J,"ORLRGUI",ORCNT,I)=RES(I)
 S ORY(1)="~COUNT",ORY(2)="d"_ORCNT,N=2
 F DAD=1:1:ORCNT S ORIFN=$G(^TMP($J,"ORLRGUI",DAD)) D
 . S N=N+1,ORY(N)="~ORDER_"_DAD
 . S N=N+1,ORY(N)="t#"_ORIFN_"  "_$G(^OR(100,ORIFN,8,1,.1,1,0)) ;1st line order text
 . S ORI=0 F  S ORI=$O(^TMP($J,"ORLRGUI",DAD,ORI)) Q:ORI<1  S X=^(ORI) D
 .. S N=N+1,ORY(N)="i"_X```




 Generated on January 13th 2017, 6:55:29 am