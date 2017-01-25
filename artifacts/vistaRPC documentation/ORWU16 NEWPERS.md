---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWU16 NEWPERS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWU16 NEWPERS{:/}
 tag | {::nomarkdown}NEWPERS{:/}
 routine | [ORWU16](http://code.osehra.org/dox/Routine_ORWU16_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | NEWPERS^[ORWU16](http://code.osehra.org/dox/Routine_ORWU16_source.html)
 Method comment | Return a bolus from the NEW PERSON file
 Input parameters | {::nomarkdown}DIR, FROM, KEY{:/}
 First comment | {::nomarkdown}<pre> .Return Array, Direction, Starting Text</pre>{:/}
 Code | {::nomarkdown}  N I,IEN,CNT S CNT=44,KEY=$G(KEY)<br> I DIR=0 D  ; Forward direction<br> . F I=1:1:CNT S FROM=$O(^VA(200,"B",FROM)) Q:FROM=""  D<br> . . S IEN=$O(^VA(200,"B",FROM,0)) I $L(KEY),'$D(^XUSEC(KEY,IEN)) Q<br> . . S Y(I)=IEN_"^"_FROM<br> . I $G(Y(CNT))="" S Y(I)=""<br> I DIR=1 D  ; Reverse direction<br> . F I=1:1:CNT S FROM=$O(^VA(200,"B",FROM),-1) Q:FROM=""  D<br> . . S IEN=$O(^VA(200,"B",FROM,0)) I $L(KEY),'$D(^XUSEC(KEY,IEN)) Q<br> . . S Y(I)=IEN_"^"_FROM{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="">NOT OSEHRA CPRS</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 12:25:50 am</p>{:/}