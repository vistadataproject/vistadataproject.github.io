---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWDFH OPDIETS 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWDFH OPDIETS{:/}
 tag | {::nomarkdown}OPDIETS{:/}
 routine | [ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | OPDIETS^[ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html)
 Method comment | Return a list of up to 5 outpatient diets from file 119.9
 Input parameters | {::nomarkdown}FROM<br/>DIR{:/}
 Code | ```  N X,I,J,IEN,CURTM,SYNCNT,SYNTOT,FHDIET
 D DIETLST^FHOMAPI
 S CURTM=$$NOW^XLFDT,I=0,SYNTOT=1
 F  S I=$O(FHDIET(I)) Q:'I  D
 . S IEN=$O(^ORD(101.43,"ID",$P(FHDIET(I),U,1)_";99FHD",0)) Q:+IEN=0
 . S X=^ORD(101.43,"S.DIET",$P(FHDIET(I),U,2),IEN)
 . I +$P(X,U,3),$P(X,U,3)<CURTM Q
 . I $P($G(^ORD(101.43,IEN,"FH")),U)'="D",($P($G(^(0)),U)'="NPO") Q
 . S X=$P(^ORD(101.43,IEN,0),U,1)
 . S SYNCNT=$P($G(^ORD(101.43,IEN,2,0)),U,4),J=0
 . S ORY(X)=IEN_U_X_U_X
 . I +SYNCNT  D  Q
 . . S SYNTOT=SYNTOT+SYNCNT
 . . F  S J=$O(^ORD(101.43,IEN,2,J)) Q:'J  D
 . . . S ORY(^ORD(101.43,IEN,2,J,0))=IEN_U_^ORD(101.43,IEN,2,J,0)_$C(9)_"<"_X_">"_U_X```




 Generated on January 14th 2017, 7:26:36 am