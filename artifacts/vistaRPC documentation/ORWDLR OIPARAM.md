---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDLR OIPARAM 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDLR OIPARAM{:/}
 tag | {::nomarkdown}LOAD{:/}
 routine | [ORWDLR](http://code.osehra.org/dox/Routine_ORWDLR_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}No longer used.{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | LOAD^[ORWDLR](http://code.osehra.org/dox/Routine_ORWDLR_source.html)
 Method comment | procedure
 First comment | {::nomarkdown} Return sample, specimen, & urgency info about a lab test{:/}
 Input parameters | {::nomarkdown}TESTID{:/}
 Code | {::nomarkdown}  N X,Y,ILST,PARAM S ILST=0<br> S LST($$NXT)="~Test Name="_$P(^ORD(101.43,TESTID,0),U,1)<br> I $D(^ORD(101.43,TESTID,8))>1 S LST($$NXT)="~OIMessage"<br> S I=0 F  S I=$O(^ORD(101.43,TESTID,8,I)) Q:'I  S LST($$NXT)="t"_^(I,0)<br> S TESTID=+$P(^ORD(101.43,TESTID,0),U,2)<br> D TEST^LR7OR3(TESTID,.Y)<br> S PARAM="" F  S PARAM=$O(Y(PARAM)) Q:PARAM=""  D<br> . S LST($$NXT)="~"_PARAM_$S($D(Y(PARAM))>1:"",1:"="_$G(Y(PARAM)))<br> . I $D(Y(PARAM))>1 S I=0 F  S I=$O(Y(PARAM,I)) Q:'I  D<br> . . I PARAM="Specimens" S LST($$NXT)="i"_Y(PARAM,I) Q<br> . . I PARAM="Urgencies" S LST($$NXT)="i"_Y(PARAM,I) Q<br> . . S LST($$NXT)="i"_I_U_Y(PARAM,I)<br> . . I PARAM="CollSamp" D<br> . . . I $G(Y("Lab CollSamp")) S $P(LST(ILST),U,8)=1<br> . . . S X=+$P(Y(PARAM,I),U,3)<br> . . . I X S $P(LST(ILST),U,10)=$P($G(^LAB(61,X,0)),U,1)<br> . . I $D(Y(PARAM,I,"WP")) S J=0 F  S J=$O(Y(PARAM,I,"WP",J)) Q:'J  D<br> . . . S LST($$NXT)="t"_Y(PARAM,I,"WP",J,0){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 8:55:11 am</p>{:/}