---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXM1 BLDQRSP 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXM1 BLDQRSP{:/}
 tag | {::nomarkdown}BLDQRSP{:/}
 routine | [ORWDXM1](http://code.osehra.org/dox/Routine_ORWDXM1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Build responses for an order Input:      1   2    3    4   5   6    7    8        11-20FLDS=DFN^LOC^ORNP^INPT^SEX^AGE^EVENT^SC%^^^Key Variables...ORIT=+ORIT: ptr to 101.41, $E(ORIT)=C: copy $E(ORIT)=X: change Output:LST=QuickLevel^ResponseID(ORIT;$H)^Dialog^Type^FormID^DGrpLST(n)=verify text or rejection text{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Build responses for an order
 Leading comment lines | {::nomarkdown}LST=QuickLevel^ResponseID(ORIT;$H)^Dialog^Type^FormID^DGrp<br/>LST(n)=verify or reject text<br/>ORIT= ptr to 101.41 for quick order, 100 for copy<br/>1 2 3 4 5 6 7 8 11-20<br/>FLDS=DFN^LOC^ORNP^INPT^SEX^AGE^EVENT^SC%^^^Key Variables...<br/>ORIT=+ORIT: ptr to 101.41, $E(ORIT)=C: copy $E(ORIT)=X: change<br/>!! SHOULD CHECK for PRE-CPRS ORDERS (treat as text?){:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ISIMO{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This determine if the order is an IMO order.{:/} | 
| {::nomarkdown}ENCLOC{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This passes the encounter location to the API. This is used for Admin Times.{:/} | 




 Generated on January 13th 2017, 6:44:47 am