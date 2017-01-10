---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWDXM1 BLDQRSP 

 property | value 
--- | --- 
 label | ORWDXM1 BLDQRSP
 tag | BLDQRSP
 routine | [ORWDXM1](http://code.osehra.org/dox/Routine_ORWDXM1_source.html)
 return value type | ARRAY
 description | Build responses for an order Input:      1   2    3    4   5   6    7    8        11-20FLDS=DFN^LOC^ORNP^INPT^SEX^AGE^EVENT^SC%^^^Key Variables...ORIT=+ORIT: ptr to 101.41, $E(ORIT)=C: copy $E(ORIT)=X: change Output:LST=QuickLevel^ResponseID(ORIT;$H)^Dialog^Type^FormID^DGrpLST(n)=verify text or rejection text

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | ISIMO | LITERAL |  | true | This determine if the order is an IMO order. | 
| vs:Input_Parameter-8994_02 | ENCLOC | LITERAL |  | true | This passes the encounter location to the API. This is used for Admin Times. | 