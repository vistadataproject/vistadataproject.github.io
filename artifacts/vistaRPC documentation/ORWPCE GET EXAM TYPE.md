---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPCE GET EXAM TYPE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE GET EXAM TYPE{:/}
 tag | {::nomarkdown}EXAMTYPE{:/}
 routine | [ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns the list of active exam types.{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | EXAMTYPE^[ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 Method comment | get the list of active exams
 Code | {::nomarkdown}  N IEN,CNT,BINDEX S (IEN,CNT,BINDEX)=0<br> F  S BINDEX=$O(^AUTTEXAM("B",BINDEX)) Q:BINDEX']""  F  S IEN=$O(^(BINDEX,IEN)) Q:'+IEN  I $D(^AUTTEXAM(IEN,0))#2,+$P(^(0),"^",4)=0 S CNT=CNT+1,ORWLST(CNT)=IEN_"^"_$P(^(0),"^"){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 8:55:11 am</p>{:/}