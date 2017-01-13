---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDLR32 LOAD 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDLR32 LOAD{:/}
 tag | {::nomarkdown}LOAD{:/}
 routine | [ORWDLR32](http://code.osehra.org/dox/Routine_ORWDLR32_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Return sample, specimen, & urgency info about a lab test.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | procedure
 Input Parameters | {::nomarkdown}TESTID{:/}
 Lines | ```
 N I,J,X,X1,X4,ORY,ORLABID,ILST,PARAM
 S ILST=0,X=$P(^ORD(101.43,TESTID,0),"^"),ORLABID=$P(^(0),U,2)
 S LST($$NXT)="~Test Name"
 S LST($$NXT)="d"_X
 S LST($$NXT)="~Item ID"
 S LST($$NXT)="d"_+ORLABID
 S X1=$S($P($P(^ORD(101.43,TESTID,0),U,2),";",2)="99VBC":$O(^LAB(60,"B",$P(^ORD(101.43,TESTID,0),"^")_" - LAB",0)),1:$P($P(^ORD(101.43,TESTID,0),U,2),";",1)) Q:'X1
 S X4=$P($G(^LAB(60,X1,0)),U,4)
 S LST(ILST)=LST(ILST)_U_X4
 I $D(^ORD(101.43,TESTID,8))>1 S LST($$NXT)="~OIMessage"
 S I=0 F  S I=$O(^ORD(101.43,TESTID,8,I)) Q:'I  S LST($$NXT)="t"_^(I,0)
 S TESTID=+$P(^ORD(101.43,TESTID,0),U,2)
 D TEST^LR7OR3(X1,.ORY)
 S PARAM="" F  S PARAM=$O(ORY(PARAM)) Q:PARAM=""  D
 . S LST($$NXT)="~"_PARAM
 . I PARAM="ReqCom" D
 . . S LST($$NXT)="d"_$G(ORY("ReqCom")) Q
 . I PARAM="Default CollSamp" D
 . . S LST($$NXT)="d"_$G(ORY("Default CollSamp")) Q
 . I PARAM="Unique CollSamp" D
 . . S LST($$NXT)="d"_$G(ORY("Unique CollSamp")) Q
 . I PARAM="Default Urgency" D
 . . S LST($$NXT)="d"_$G(ORY("Default Urgency")) Q
 . I PARAM="Lab CollSamp" D
 . . S LST($$NXT)="d"_$G(ORY("Lab CollSamp")) Q
 . I $D(ORY(PARAM))>1 S I=0 F  S I=$O(ORY(PARAM,I)) Q:'I  D
 . . I PARAM="Specimens" S LST($$NXT)="i"_ORY(PARAM,I) Q
 . . I PARAM="Urgencies" S LST($$NXT)="i"_ORY(PARAM,I) Q
 . . I PARAM="GenWardInstructions" S LST($$NXT)="t"_ORY(PARAM,I,0) Q
 . . S LST($$NXT)="i"_I_U_ORY(PARAM,I)
 . . I PARAM="CollSamp" D
 . . . I $G(ORY("Lab CollSamp")) S $P(LST(ILST),U,8)=1
 . . . S X=+$P(ORY(PARAM,I),U,3)
 . . . I X S $P(LST(ILST),U,10)=$P($G(^LAB(61,X,0)),U,1)
 . . I $D(ORY(PARAM,I,"WP")) S J=0 F  S J=$O(ORY(PARAM,I,"WP",J)) Q:'J  D
 . . . S LST($$NXT)="t"_ORY(PARAM,I,"WP",J,0)```
 Leading comment lines | {::nomarkdown}Return sample, specimen, & urgency info about a lab test{:/}




 Generated on January 13th 2017, 6:55:29 am