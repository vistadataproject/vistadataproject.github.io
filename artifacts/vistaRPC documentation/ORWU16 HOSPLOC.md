---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWU16 HOSPLOC 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWU16 HOSPLOC{:/}
 tag | {::nomarkdown}HOSPLOC{:/}
 routine | [ORWU16](http://code.osehra.org/dox/Routine_ORWU16_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | HOSPLOC^[ORWU16](http://code.osehra.org/dox/Routine_ORWU16_source.html)
 Method comment | Return a bolus from the HOSPITAL LOCATION file
 Input parameters | {::nomarkdown}DIR, FROM{:/}
 First comment | {::nomarkdown}<pre> .Return Array, Direction, Starting Text</pre>{:/}
 Code | {::nomarkdown}  N I,IEN,CNT S CNT=44<br> I DIR=0 D  ; Forward direction<br> . F I=1:1:CNT S FROM=$O(^SC("B",FROM)) Q:FROM=""  D<br> . . S IEN=$O(^SC("B",FROM,0))<br> . . I $$ACTLOC(IEN) S Y(I)=IEN_"^"_FROM<br> . I $G(Y(CNT))="" S Y(I)=""<br> I DIR=1 D  ; Reverse direction<br> . F I=1:1:CNT S FROM=$O(^SC("B",FROM),-1) Q:FROM=""  D<br> . . S IEN=$O(^SC("B",FROM,0))<br> . . I $$ACTLOC(IEN) S Y(I)=IEN_"^"_FROM{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="">NOT OSEHRA CPRS</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 2:31:54 am</p>{:/}