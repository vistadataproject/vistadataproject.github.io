---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORCDLR2 CHECK ALL LC TO WC 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORCDLR2 CHECK ALL LC TO WC{:/}
 tag | {::nomarkdown}GUI{:/}
 routine | [ORCDLR2](http://code.osehra.org/dox/Routine_ORCDLR2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | GUI^[ORCDLR2](http://code.osehra.org/dox/Routine_ORCDLR2_source.html)
 Method comment | ck list of ORDERS for labs w/invalid coll times
 Input parameters | {::nomarkdown}ORL, ORDERS{:/}
 Code | {::nomarkdown}  N ORI,ORIFN,ORCNT,RES,I,N,DAD,X<br> K ^TMP($J,"ORLRGUI") S ORCNT=0<br> S ORI="" F  S ORI=$O(ORDERS(ORI)) Q:ORI=""  D<br> . Q:+$P(ORDERS(ORI),";",2)>1          ;only ck NW order actions<br> . S ORIFN=+ORDERS(ORI) Q:'$$LC(ORIFN)  ;only ck Lab, LC/I orders<br> . K RES D KIDS(.RES,$G(ORL),ORIFN)<br> . S I=0 F  S I=$O(RES(I)) Q:I<1  I $P(RES(I),U,2) K RES(I)<br> . Q:'$O(RES(0))  ;no invalid times found<br> . S ORCNT=ORCNT+1,^TMP($J,"ORLRGUI",ORCNT)=ORIFN<br> . S I=0 F  S I=$O(RES(I)) Q:I<1  S ^TMP($J,"ORLRGUI",ORCNT,I)=RES(I)<br> S ORY(1)="~COUNT",ORY(2)="d"_ORCNT,N=2<br> F DAD=1:1:ORCNT S ORIFN=$G(^TMP($J,"ORLRGUI",DAD)) D<br> . S N=N+1,ORY(N)="~ORDER_"_DAD<br> . S N=N+1,ORY(N)="t#"_ORIFN_"  "_$G(^OR(100,ORIFN,8,1,.1,1,0)) ;1st line order text<br> . S ORI=0 F  S ORI=$O(^TMP($J,"ORLRGUI",DAD,ORI)) Q:ORI<1  S X=^(ORI) D<br> .. S N=N+1,ORY(N)="i"_X{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODLab.pas">Orders/rODLab.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:20:10 am</p>{:/}