---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDLR32 LOAD 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDLR32 LOAD{:/}
 tag | {::nomarkdown}LOAD{:/}
 routine | [ORWDLR32](http://code.osehra.org/dox/Routine_ORWDLR32_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Return sample, specimen, & urgency info about a lab test.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | LOAD^[ORWDLR32](http://code.osehra.org/dox/Routine_ORWDLR32_source.html)
 Method comment | procedure
 Input parameters | {::nomarkdown}TESTID{:/}
 First comment | {::nomarkdown}<pre> Return sample, specimen, & urgency info about a lab test</pre>{:/}
 Code | {::nomarkdown}  N I,J,X,X1,X4,ORY,ORLABID,ILST,PARAM<br> S ILST=0,X=$P(^ORD(101.43,TESTID,0),"^"),ORLABID=$P(^(0),U,2)<br> S LST($$NXT)="~Test Name"<br> S LST($$NXT)="d"_X<br> S LST($$NXT)="~Item ID"<br> S LST($$NXT)="d"_+ORLABID<br> S X1=$S($P($P(^ORD(101.43,TESTID,0),U,2),";",2)="99VBC":$O(^LAB(60,"B",$P(^ORD(101.43,TESTID,0),"^")_" - LAB",0)),1:$P($P(^ORD(101.43,TESTID,0),U,2),";",1)) Q:'X1<br> S X4=$P($G(^LAB(60,X1,0)),U,4)<br> S LST(ILST)=LST(ILST)_U_X4<br> I $D(^ORD(101.43,TESTID,8))>1 S LST($$NXT)="~OIMessage"<br> S I=0 F  S I=$O(^ORD(101.43,TESTID,8,I)) Q:'I  S LST($$NXT)="t"_^(I,0)<br> S TESTID=+$P(^ORD(101.43,TESTID,0),U,2)<br> D TEST^LR7OR3(X1,.ORY)<br> S PARAM="" F  S PARAM=$O(ORY(PARAM)) Q:PARAM=""  D<br> . S LST($$NXT)="~"_PARAM<br> . I PARAM="ReqCom" D<br> . . S LST($$NXT)="d"_$G(ORY("ReqCom")) Q<br> . I PARAM="Default CollSamp" D<br> . . S LST($$NXT)="d"_$G(ORY("Default CollSamp")) Q<br> . I PARAM="Unique CollSamp" D<br> . . S LST($$NXT)="d"_$G(ORY("Unique CollSamp")) Q<br> . I PARAM="Default Urgency" D<br> . . S LST($$NXT)="d"_$G(ORY("Default Urgency")) Q<br> . I PARAM="Lab CollSamp" D<br> . . S LST($$NXT)="d"_$G(ORY("Lab CollSamp")) Q<br> . I $D(ORY(PARAM))>1 S I=0 F  S I=$O(ORY(PARAM,I)) Q:'I  D<br> . . I PARAM="Specimens" S LST($$NXT)="i"_ORY(PARAM,I) Q<br> . . I PARAM="Urgencies" S LST($$NXT)="i"_ORY(PARAM,I) Q<br> . . I PARAM="GenWardInstructions" S LST($$NXT)="t"_ORY(PARAM,I,0) Q<br> . . S LST($$NXT)="i"_I_U_ORY(PARAM,I)<br> . . I PARAM="CollSamp" D<br> . . . I $G(ORY("Lab CollSamp")) S $P(LST(ILST),U,8)=1<br> . . . S X=+$P(ORY(PARAM,I),U,3)<br> . . . I X S $P(LST(ILST),U,10)=$P($G(^LAB(61,X,0)),U,1)<br> . . I $D(ORY(PARAM,I,"WP")) S J=0 F  S J=$O(ORY(PARAM,I,"WP",J)) Q:'J  D<br> . . . S LST($$NXT)="t"_ORY(PARAM,I,"WP",J,0){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODLab.pas">Orders/rODLab.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 2:31:54 am</p>{:/}