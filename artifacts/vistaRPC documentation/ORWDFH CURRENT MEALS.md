---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDFH CURRENT MEALS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDFH CURRENT MEALS{:/}
 tag | {::nomarkdown}CURMEALS{:/}
 routine | [ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | CURMEALS^[ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html)
 Method comment | Return current list of recurring meals for AO and TF orders
 Input parameters | {::nomarkdown}ORDFN, ORMEAL{:/}
 Code | {::nomarkdown}  N I,Y,X S I=0<br> S ORMEAL=$G(ORMEAL,"")<br> D EN2^FHWOR8(ORDFN,ORMEAL,.ORY)<br> F  S I=$O(ORY(I)) Q:'I  D<br> . S X=$P(ORY(I),U,2)<br> . S Y=$P(ORY(I),U,1) D DD^%DT S $P(ORY(I),U,2)=Y<br> . S $P(ORY(I),U,3)=$S(X="B":"Breakfast",X="N":"Noon",X="E":"Evening",1:""){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODDiet.pas">Orders/rODDiet.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 10:14:32 pm</p>{:/}