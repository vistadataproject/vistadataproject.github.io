---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; OREVNTX1 CMEVTS 

 property | value 
--- | --- 
 label | {::nomarkdown}OREVNTX1 CMEVTS{:/}
 tag | {::nomarkdown}CMEVTS{:/}
 routine | [OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Return common event list
 Input Parameters | {::nomarkdown}CLOC{:/}
 Lines | ```{::nomarkdown} N IDX,X0,X,LOC<br/> S:CLOC>0 LOC=CLOC<br/> S IDX=0,ORY=""<br/> D GETLST^OREV3(.ORY)<br/> F  S IDX=$O(ORY(IDX)) Q:'IDX  D<br/> . S X0=""<br/> . S:$L($G(^ORD(100.5,+ORY(IDX),0))) X0=$G(^(0))<br/> . I '$L($P(X0,U,2)) D<br/> .. S X=$P(X0,U,12) S:X $P(X0,U,2)=$P($G(^ORD(100.5,+X,0)),U,2)<br/> . S:$L(X0) ORY(IDX)=+ORY(IDX)_U_X0```{:/}




 Generated on January 13th 2017, 7:11:27 am