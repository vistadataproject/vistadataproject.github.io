---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDLR LOAD 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDLR LOAD{:/}
 tag | {::nomarkdown}LOAD{:/}
 routine | [ORWDLR](http://code.osehra.org/dox/Routine_ORWDLR_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Loads sample, specimen, and urgency information for a given lab test.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | procedure
 Input Parameters | {::nomarkdown}TESTID{:/}
 Lines | ```
 N X,Y,ILST,PARAM S ILST=0
 S LST($$NXT)="~Test Name="_$P(^ORD(101.43,TESTID,0),U,1)
 I $D(^ORD(101.43,TESTID,8))>1 S LST($$NXT)="~OIMessage"
 S I=0 F  S I=$O(^ORD(101.43,TESTID,8,I)) Q:'I  S LST($$NXT)="t"_^(I,0)
 S TESTID=+$P(^ORD(101.43,TESTID,0),U,2)
 D TEST^LR7OR3(TESTID,.Y)
 S PARAM="" F  S PARAM=$O(Y(PARAM)) Q:PARAM=""  D
 . S LST($$NXT)="~"_PARAM_$S($D(Y(PARAM))>1:"",1:"="_$G(Y(PARAM)))
 . I $D(Y(PARAM))>1 S I=0 F  S I=$O(Y(PARAM,I)) Q:'I  D
 . . I PARAM="Specimens" S LST($$NXT)="i"_Y(PARAM,I) Q
 . . I PARAM="Urgencies" S LST($$NXT)="i"_Y(PARAM,I) Q
 . . S LST($$NXT)="i"_I_U_Y(PARAM,I)
 . . I PARAM="CollSamp" D
 . . . I $G(Y("Lab CollSamp")) S $P(LST(ILST),U,8)=1
 . . . S X=+$P(Y(PARAM,I),U,3)
 . . . I X S $P(LST(ILST),U,10)=$P($G(^LAB(61,X,0)),U,1)
 . . I $D(Y(PARAM,I,"WP")) S J=0 F  S J=$O(Y(PARAM,I,"WP",J)) Q:'J  D
 . . . S LST($$NXT)="t"_Y(PARAM,I,"WP",J,0)```
 Leading comment lines | {::nomarkdown}Return sample, specimen, & urgency info about a lab test{:/}




 Generated on January 13th 2017, 6:55:28 am