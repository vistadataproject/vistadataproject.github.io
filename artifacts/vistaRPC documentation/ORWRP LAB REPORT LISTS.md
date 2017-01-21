---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWRP LAB REPORT LISTS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWRP LAB REPORT LISTS{:/}
 tag | {::nomarkdown}LABLIST{:/}
 routine | [ORWRP](http://code.osehra.org/dox/Routine_ORWRP_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This remote procedure call returns a list of lab reports,There are no input parameters fo this rpc.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | LABLIST^[ORWRP](http://code.osehra.org/dox/Routine_ORWRP_source.html)
 Method comment | report list for labs tab
 First comment | {::nomarkdown}<pre>  RPC: ORWRP LAB REPORT LIST</pre>{:/}
 Code | {::nomarkdown}  N I,J,X,X0,X2,CNT,EOF,IFN,ROOT,RPC,ORLIST,HEAD<br> S EOF="$$END",ROOT=$NA(LST),(CNT,I)=0<br> D SETITEM(ROOT,"[LAB REPORT LIST]")<br> D GETLST^XPAR(.ORLIST,"ALL","ORWRP REPORT LAB LIST")<br> F  S I=$O(ORLIST(I)) Q:'I  Q:'$D(^ORD(101.24,$P(ORLIST(I),"^",2),0))  S X0=^(0),X2=$G(^(2)) D<br> . Q:$P(X0,"^",12)="L"<br> . S RPC=$$GET1^DIQ(8994,+$P(X0,"^",13),.01),IFN=ORLIST(I),HEAD=$P(X0,"^")<br> . I $L($P(X2,"^",3)) S HEAD=$P(X2,"^",3)<br> . S X=$P(X0,"^",2)_"^"_HEAD_"^"_$P(X0,"^",3)_"^"_$P(X0,"^",12)_"^"_$P(X0,"^",7)_"^"_RPC_"^"_IFN<br> . D SETITEM(.ROOT,X)<br> D SETITEM(.ROOT,"$$END"){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReports.pas">rReports.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:25:13 am</p>{:/}