---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPCE PROC 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE PROC{:/}
 tag | {::nomarkdown}PROC{:/}
 routine | [ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of procedures for a clinic location.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | get list of procedures for clinic P12 for CPTMods
 Input Parameters | {::nomarkdown}CLINIC<br/>ORDATE{:/}
 Lines | ```
 S:'+$G(ORDATE) ORDATE=DT
 D GETLST^IBDF18A(CLINIC,"DG SELECT CPT PROCEDURE CODES","LST",,,1,ORDATE)
 N IDX,MOD,CODES,FIRST S IDX=0
 F  S IDX=$O(LST(IDX)) Q:'+IDX  D
 . I LST(IDX)="" K LST(IDX) Q
 . S MOD=0,CODES="",FIRST=1
 . F  S MOD=$O(LST(IDX,"MODIFIER",MOD)) Q:(MOD="")  D
 . . I FIRST S FIRST=0
 . . E  S CODES=CODES_";"
 . . S CODES=CODES_LST(IDX,"MODIFIER",MOD)
 . K LST(IDX,"MODIFIER")
 . I 'FIRST S $P(LST(IDX),U,12)=CODES```




 Generated on January 13th 2017, 6:55:29 am