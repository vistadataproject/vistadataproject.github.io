---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDFH TFPROD 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDFH TFPROD{:/}
 tag | {::nomarkdown}TFPROD{:/}
 routine | [ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of active tubefeeding products.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | TFPROD^[ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html)
 Method comment | Return a list of active tubefeeding products
 Code | {::nomarkdown}  N I,IEN,NAM,X,CURTM<br> S I=0,NAM="",CURTM=$$NOW^XLFDT<br> F  S NAM=$O(^ORD(101.43,"S.TF",NAM)) Q:NAM=""  D<br> . S IEN=0 F  S IEN=$O(^ORD(101.43,"S.TF",NAM,IEN)) Q:'IEN  D<br> . . S X=^ORD(101.43,"S.TF",NAM,IEN)<br> . . I +$P(X,U,3),$P(X,U,3)<CURTM Q<br> . . S I=I+1<br> . . I 'X S Y(I)=IEN_U_$P(X,U,2)_U_$P(X,U,2)<br> . . E  S Y(I)=IEN_U_$P(X,U,2)_$C(9)_"<"_$P(X,U,4)_">"_U_$P(X,U,4){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODDiet.pas">Orders/rODDiet.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 8:30:44 pm</p>{:/}