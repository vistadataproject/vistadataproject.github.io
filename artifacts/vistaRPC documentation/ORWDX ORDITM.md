---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDX ORDITM 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDX ORDITM{:/}
 tag | {::nomarkdown}ORDITM{:/}
 routine | [ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns an array of orderable items in the format:   Y(n)=IEN^.01 Name^.01 Name  -or-  IEN^Synonym <.01 Name>^.01 Name{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Subset of orderable items
 Input Parameters | {::nomarkdown}FROM<br/>DIR<br/>XREF<br/>QOCALL{:/}
 Lines | ```
 N I,IEN,CNT,X,DTXT,CURTM,DEFROUTE
 S DEFROUTE=""
 S QOCALL=+$G(QOCALL)
 S I=0,CNT=44,CURTM=$$NOW^XLFDT
 F  Q:I'<CNT  S FROM=$O(^ORD(101.43,XREF,FROM),DIR) Q:FROM=""  D
 . S IEN="" F  S IEN=$O(^ORD(101.43,XREF,FROM,IEN),DIR) Q:'IEN  D
 . . S X=^ORD(101.43,XREF,FROM,IEN)
 . . I +$P(X,U,3),$P(X,U,3)<CURTM Q
 . . I 'QOCALL,$P(X,U,5) Q
 . . S I=I+1
 . . I 'X S Y(I)=IEN_U_$P(X,U,2)_U_$P(X,U,2)
 . . E  S Y(I)=IEN_U_$P(X,U,2)_$C(9)_"<"_$P(X,U,4)_">"_U_$P(X,U,4)```
 Leading comment lines | {::nomarkdown}Y(n)=IEN^.01 Name^.01 Name  -or-  IEN^Synonym <.01 Name>^.01 Name{:/}




 Generated on January 13th 2017, 6:55:29 am