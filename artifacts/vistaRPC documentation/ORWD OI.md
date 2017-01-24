---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWD OI 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWD OI{:/}
 tag | {::nomarkdown}OI{:/}
 routine | [ORWD](http://code.osehra.org/dox/Routine_ORWD_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a group of orderable items to be used in the OnNeedData event fora long list box.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | OI^[ORWD](http://code.osehra.org/dox/Routine_ORWD_source.html)
 Method comment | Return a bolus of orderable items
 Input parameters | {::nomarkdown}XREF, DIR, FROM{:/}
 First comment | {::nomarkdown}<pre> .Return Array, Cross Reference (S.xxx), Direction, Starting Text</pre>{:/}
 Code | {::nomarkdown}  N I,IEN,CNT S CNT=44<br> I DIR=0 D  ; Forward direction<br> . F I=1:1:CNT S FROM=$O(^ORD(101.43,XREF,FROM)) Q:FROM=""  D<br> . . S Y(I)=$O(^ORD(101.43,XREF,FROM,0))_"^"_FROM<br> . I $G(Y(CNT))="" S Y(I)=""<br> I DIR=1 D  ; Reverse direction<br> . F I=1:1:CNT S FROM=$O(^ORD(101.43,XREF,FROM),-1) Q:FROM=""  D<br> . . S Y(I)=$O(^ORD(101.43,XREF,FROM,0))_"^"_FROM{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="">NOT OSEHRA CPRS</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:30:11 am</p>{:/}