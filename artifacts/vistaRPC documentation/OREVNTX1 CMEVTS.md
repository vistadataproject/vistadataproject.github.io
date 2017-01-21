---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; OREVNTX1 CMEVTS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}OREVNTX1 CMEVTS{:/}
 tag | {::nomarkdown}CMEVTS{:/}
 routine | [OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | CMEVTS^[OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 Method comment | Return common event list
 Input parameters | {::nomarkdown}CLOC{:/}
 Code | {::nomarkdown}  N IDX,X0,X,LOC<br> S:CLOC>0 LOC=CLOC<br> S IDX=0,ORY=""<br> D GETLST^OREV3(.ORY)<br> F  S IDX=$O(ORY(IDX)) Q:'IDX  D<br> . S X0=""<br> . S:$L($G(^ORD(100.5,+ORY(IDX),0))) X0=$G(^(0))<br> . I '$L($P(X0,U,2)) D<br> .. S X=$P(X0,U,12) S:X $P(X0,U,2)=$P($G(^ORD(100.5,+X,0)),U,2)<br> . S:$L(X0) ORY(IDX)=+ORY(IDX)_U_X0{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:20:10 am</p>{:/}