---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWCV1 COVERSHEET LIST 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWCV1 COVERSHEET LIST{:/}
 tag | {::nomarkdown}COVERLST{:/}
 routine | [ORWCV1](http://code.osehra.org/dox/Routine_ORWCV1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This remote procedure call returns a list of Cover Sheet reports,There are no input parameters fo this rpc.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | COVERLST^[ORWCV1](http://code.osehra.org/dox/Routine_ORWCV1_source.html)
 Method comment | return data for coversheet
 First comment | {::nomarkdown}<pre>RPC: ORWCV1 COVERSHEET LIST</pre>{:/}
 Code | {::nomarkdown}  N I,J,X,X0,X2,CNT,EOF,ROOT,RPC,LIST,DETAIL,HEAD<br> S EOF="$$END",ROOT=$NA(LST),(CNT,I)=0<br> D GETLST^XPAR(.LIST,"ALL","ORWCV1 COVERSHEET LIST")<br> F  S I=$O(LIST(I)) Q:'I  Q:'$D(^ORD(101.24,$P(LIST(I),"^",2),0))  S X0=^(0),X2=$G(^(2)) D<br> . Q:$P(X0,"^",12)="L"<br> . S RPC=$P($G(^XWB(8994,+$P(X0,"^",13),0)),"^"),DETAIL=""<br> . I $P(X0,"^",18) S DETAIL=$P($G(^ORD(101.24,+$P(X0,"^",18),0)),"^",13),DETAIL=$P($G(^XWB(8994,+DETAIL,0)),"^")<br> . S HEAD=$P(X0,"^") I $L($P(X2,"^",3)) S HEAD=$P(X2,"^",3)<br> . S X=$P(X0,"^",2)_"^"_HEAD_"^"_$P(X0,"^",3)_"^"_$P(X0,"^",12)_"^"_$P(X0,"^",7)_"^"_RPC_"^"_$P(X0,"^",9)<br> . S X=X_"^"_$P(X0,"^",10)_"^"_$P(X0,"^",11)_"^"_$P(X0,"^",14)_"^"_$P(X0,"^",15)_"^"_$P(X2,"^")_"^"_$P(X0,"^",4)_"^"_$P(X0,"^",16)_"^"_$P(X0,"^",17)_"^"_DETAIL_"^"_LIST(I)<br> . D SETITEM(.ROOT,X){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCover.pas">rCover.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 7:57:52 am</p>{:/}