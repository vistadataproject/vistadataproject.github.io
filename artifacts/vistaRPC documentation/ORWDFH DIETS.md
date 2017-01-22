---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDFH DIETS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDFH DIETS{:/}
 tag | {::nomarkdown}DIETS{:/}
 routine | [ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns active diets (including NPO) in the format:      IEN^NAME   or IEN^SYNONYM <NAME>^NAME{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | DIETS^[ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html)
 Method comment | Return a subset of active diets, including NPO
 Input parameters | {::nomarkdown}FROM, DIR{:/}
 First comment | {::nomarkdown}<pre> Y(n)=IEN^.01 Name^.01 Name  -or-  IEN^Synonym <.01 Name>^.01 Name</pre>{:/}
 Code | {::nomarkdown}  N I,IEN,CNT,X,CURTM<br> S I=0,CNT=44,CURTM=$$NOW^XLFDT<br> F  Q:I'<CNT  S FROM=$O(^ORD(101.43,"S.DIET",FROM),DIR) Q:FROM=""  D<br> . S IEN=0 F  S IEN=$O(^ORD(101.43,"S.DIET",FROM,IEN)) Q:'IEN  D<br> . . S X=^ORD(101.43,"S.DIET",FROM,IEN)<br> . . I +$P(X,U,3),$P(X,U,3)<CURTM Q<br> . . I $P($G(^ORD(101.43,IEN,"FH")),U)'="D",($P($G(^(0)),U)'="NPO") Q<br> . . S I=I+1<br> . . I 'X S Y(I)=IEN_U_$P(X,U,2)_U_$P(X,U,2)<br> . . E  S Y(I)=IEN_U_$P(X,U,2)_$C(9)_"<"_$P(X,U,4)_">"_U_$P(X,U,4){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODDiet.pas">Orders/rODDiet.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:23:02 am</p>{:/}