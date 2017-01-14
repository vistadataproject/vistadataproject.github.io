---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWDFH DIETS 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWDFH DIETS{:/}
 tag | {::nomarkdown}DIETS{:/}
 routine | [ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns active diets (including NPO) in the format:      IEN^NAME   or IEN^SYNONYM <NAME>^NAME{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | DIETS^[ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html)
 Method comment | Return a subset of active diets, including NPO
 First comment | {::nomarkdown}Y(n)=IEN^.01 Name^.01 Name  -or-  IEN^Synonym <.01 Name>^.01 Name{:/}
 Input parameters | {::nomarkdown}FROM<br/>DIR{:/}
 Code | ```  N I,IEN,CNT,X,CURTM
 S I=0,CNT=44,CURTM=$$NOW^XLFDT
 F  Q:I'<CNT  S FROM=$O(^ORD(101.43,"S.DIET",FROM),DIR) Q:FROM=""  D
 . S IEN=0 F  S IEN=$O(^ORD(101.43,"S.DIET",FROM,IEN)) Q:'IEN  D
 . . S X=^ORD(101.43,"S.DIET",FROM,IEN)
 . . I +$P(X,U,3),$P(X,U,3)<CURTM Q
 . . I $P($G(^ORD(101.43,IEN,"FH")),U)'="D",($P($G(^(0)),U)'="NPO") Q
 . . S I=I+1
 . . I 'X S Y(I)=IEN_U_$P(X,U,2)_U_$P(X,U,2)
 . . E  S Y(I)=IEN_U_$P(X,U,2)_$C(9)_"<"_$P(X,U,4)_">"_U_$P(X,U,4)```




 Generated on January 14th 2017, 7:26:35 am