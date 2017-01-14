---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWD OI 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWD OI{:/}
 tag | {::nomarkdown}OI{:/}
 routine | [ORWD](http://code.osehra.org/dox/Routine_ORWD_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a group of orderable items to be used in the OnNeedData event fora long list box.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | OI^[ORWD](http://code.osehra.org/dox/Routine_ORWD_source.html)
 Method comment | Return a bolus of orderable items
 First comment | {::nomarkdown}.Return Array, Cross Reference (S.xxx), Direction, Starting Text{:/}
 Input parameters | {::nomarkdown}XREF<br/>DIR<br/>FROM{:/}
 Code | ```  N I,IEN,CNT S CNT=44
 I DIR=0 D  ; Forward direction
 . F I=1:1:CNT S FROM=$O(^ORD(101.43,XREF,FROM)) Q:FROM=""  D
 . . S Y(I)=$O(^ORD(101.43,XREF,FROM,0))_"^"_FROM
 . I $G(Y(CNT))="" S Y(I)=""
 I DIR=1 D  ; Reverse direction
 . F I=1:1:CNT S FROM=$O(^ORD(101.43,XREF,FROM),-1) Q:FROM=""  D
 . . S Y(I)=$O(^ORD(101.43,XREF,FROM,0))_"^"_FROM```




 Generated on January 14th 2017, 7:26:35 am