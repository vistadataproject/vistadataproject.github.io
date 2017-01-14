---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; OREVNTX1 CMEVTS 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}OREVNTX1 CMEVTS{:/}
 tag | {::nomarkdown}CMEVTS{:/}
 routine | [OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | CMEVTS^[OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 Method comment | Return common event list
 Input parameters | {::nomarkdown}CLOC{:/}
 Code | ```  N IDX,X0,X,LOC
 S:CLOC>0 LOC=CLOC
 S IDX=0,ORY=""
 D GETLST^OREV3(.ORY)
 F  S IDX=$O(ORY(IDX)) Q:'IDX  D
 . S X0=""
 . S:$L($G(^ORD(100.5,+ORY(IDX),0))) X0=$G(^(0))
 . I '$L($P(X0,U,2)) D
 .. S X=$P(X0,U,12) S:X $P(X0,U,2)=$P($G(^ORD(100.5,+X,0)),U,2)
 . S:$L(X0) ORY(IDX)=+ORY(IDX)_U_X0```




 Generated on January 14th 2017, 7:26:35 am