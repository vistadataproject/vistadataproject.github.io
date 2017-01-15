---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWUL FVSUB 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWUL FVSUB{:/}
 tag | {::nomarkdown}FVSUB{:/}
 routine | [ORWUL](http://code.osehra.org/dox/Routine_ORWUL_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | FVSUB^[ORWUL](http://code.osehra.org/dox/Routine_ORWUL_source.html)
 Method comment | return subset of orders in view
 Input parameters | {::nomarkdown}IEN<br>FIRST<br>LAST{:/}
 Code | {::nomarkdown}  N I<br> F I=FIRST:1:LAST D<br> .;AGP change returned valued to returned data or @ if record does not<br> .;exist. The @ sign is used by the delphi code to identified a<br> .;non-existence record<br> .S LST(I)=$S($D(^ORD(101.44,IEN,20,$G(I)))>0:^ORD(101.44,IEN,20,I,0),1:"@"){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:50 am</p>{:/}