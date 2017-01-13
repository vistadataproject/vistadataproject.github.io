---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXM MENU 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXM MENU{:/}
 tag | {::nomarkdown}MENU{:/}
 routine | [ORWDXM](http://code.osehra.org/dox/Routine_ORWDXM_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns menu contents for an order dialog in the following format:    LST(0)=name^# cols^path switch^^^ Key Variables (pieces 6-20)    LST(n)=col^row^type^ien^formid^autoaccept^display text^mnemonic           ^displayonly{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Return menu contents for an order dialog
 Input Parameters | {::nomarkdown}DLG{:/}
 Lines | ```
 N ILST,I,COL,ROW,IEN,TYP,FID,AUT,MNE,DON,X,X0,X5,NUMCOL
 S X0=$G(^ORD(101.41,DLG,0)),X5=$G(^(5)),ILST=0,NUMCOL=1
 S LST(0)=$P(X0,U,2)_U_NUMCOL_U_$P(X5,U,3)
 S $P(LST(0),U,6)=$$KEYVAR^ORWDXM3(DLG) ; key vars start at 6th piece
 S I=0 F  S I=$O(^ORD(101.41,DLG,10,I)) Q:'I  D
 . S X=$G(^ORD(101.41,DLG,10,I,0))
 . S ROW=$P(X,U),COL=$P(ROW,".",2),ROW=$P(ROW,".",1)
 . I COL>NUMCOL S NUMCOL=COL
 . S IEN=+$P(X,U,2),MNE=$P(X,U,3),DON=$P(X,U,5),X=$P(X,U,4)
 . S X0=$G(^ORD(101.41,IEN,0)),X5=$G(^(5))
 . S TYP=$P(X0,U,4),FID=+$P(X5,U,5),AUT=$P(X5,U,8)
 . I '$L(X) S X=$P($G(^ORD(101.41,IEN,0)),U,2)
 . S ILST=ILST+1,LST(ILST)=COL_U_ROW_U_TYP_U_IEN_U_FID_U_AUT_U_X_U_MNE_U_DON
 S $P(LST(0),U,2)=NUMCOL```
 Leading comment lines | {::nomarkdown}LST(0)=name^# cols^path switch^^^ Key Variables (pieces 6-20)<br/>LST(n)=col^row^type^ien^formid^autoaccept^display text^mnemonic<br/>^displayonly{:/}




 Generated on January 13th 2017, 6:55:29 am