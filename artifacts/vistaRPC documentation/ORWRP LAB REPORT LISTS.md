---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWRP LAB REPORT LISTS 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWRP LAB REPORT LISTS{:/}
 tag | {::nomarkdown}LABLIST{:/}
 routine | [ORWRP](http://code.osehra.org/dox/Routine_ORWRP_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This remote procedure call returns a list of lab reports,There are no input parameters fo this rpc.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | LABLIST^[ORWRP](http://code.osehra.org/dox/Routine_ORWRP_source.html)
 Method comment | report list for labs tab
 First comment | {::nomarkdown}RPC: ORWRP LAB REPORT LIST{:/}
 Code | ```  N I,J,X,X0,X2,CNT,EOF,IFN,ROOT,RPC,ORLIST,HEAD
 S EOF="$$END",ROOT=$NA(LST),(CNT,I)=0
 D SETITEM(ROOT,"[LAB REPORT LIST]")
 D GETLST^XPAR(.ORLIST,"ALL","ORWRP REPORT LAB LIST")
 F  S I=$O(ORLIST(I)) Q:'I  Q:'$D(^ORD(101.24,$P(ORLIST(I),"^",2),0))  S X0=^(0),X2=$G(^(2)) D
 . Q:$P(X0,"^",12)="L"
 . S RPC=$$GET1^DIQ(8994,+$P(X0,"^",13),.01),IFN=ORLIST(I),HEAD=$P(X0,"^")
 . I $L($P(X2,"^",3)) S HEAD=$P(X2,"^",3)
 . S X=$P(X0,"^",2)_"^"_HEAD_"^"_$P(X0,"^",3)_"^"_$P(X0,"^",12)_"^"_$P(X0,"^",7)_"^"_RPC_"^"_IFN
 . D SETITEM(.ROOT,X)
 D SETITEM(.ROOT,"$$END")```




 Generated on January 14th 2017, 7:26:35 am