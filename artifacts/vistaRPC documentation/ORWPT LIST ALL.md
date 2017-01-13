---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPT LIST ALL 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWPT LIST ALL{:/}
 tag | {::nomarkdown}LISTALL{:/}
 routine | [ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a set of patient names for use with a long list box.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Return a bolus of patient names.  From is either Name or IEN^Name.
 Input Parameters | {::nomarkdown}FROM<br/>DIR{:/}
 Lines | ```
 N I,IEN,CNT,FROMIEN,ORIDNAME S CNT=44,I=0,FROMIEN=0
 I $P(FROM,U,2)'="" S FROMIEN=$P(FROM,U,1),FROM=$O(^DPT("B",$P(FROM,U,2)),-DIR)
 F  S FROM=$O(^DPT("B",FROM),DIR) Q:FROM=""  D  Q:I=CNT
 . S IEN=FROMIEN,FROMIEN=0 F  S IEN=$O(^DPT("B",FROM,IEN)) Q:'IEN  D  Q:I=CNT
 . . S ORIDNAME=""
 . . S ORIDNAME=$G(^DPT(IEN,0)) ; Get zero node name.
 . . ; S X1=$G(^DPT(IEN,.1))_" "_$G(^DPT(IEN,.101))
 . . S I=I+1 S Y(I)=IEN_U_FROM_U_U_U_U_$P(ORIDNAME,U) ;_"^"_X ; _"^"_X1  ;"   ("_X_")"```




 Generated on January 13th 2017, 6:55:28 am