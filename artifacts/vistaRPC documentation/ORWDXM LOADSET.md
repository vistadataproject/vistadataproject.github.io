---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWDXM LOADSET 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXM LOADSET{:/}
 tag | {::nomarkdown}LOADSET{:/}
 routine | [ORWDXM](http://code.osehra.org/dox/Routine_ORWDXM_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Return the contents of an order set in the following format:   LST(0): SetDisplayText^Key Variables   LST(n): DlgIEN^DlgType^DisplayText{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | LOADSET^[ORWDXM](http://code.osehra.org/dox/Routine_ORWDXM_source.html)
 Method comment | Return the contents of an order set
 First comment | {::nomarkdown}LST(0): SetDisplayText^Key Variables<br/>LST(n): DlgIEN^DlgType^DisplayText^OrderableItemIENs(OIIEN;OIIEN;..){:/}
 Input parameters | {::nomarkdown}DLG{:/}
 Code | ```  N SEQ,DA,ITM,TYP,ILST,X,OIENS,PKGINFO
 S LST(0)=$P(^ORD(101.41,DLG,0),U,2)_U_$$KEYVAR^ORWDXM3(DLG),ILST=0
 S SEQ="" F  S SEQ=$O(^ORD(101.41,DLG,10,"B",SEQ)) Q:SEQ=""  D
 . S DA=0 F  S DA=$O(^ORD(101.41,DLG,10,"B",SEQ,DA)) Q:'DA  D
 . . S X=$G(^ORD(101.41,DLG,10,DA,0)),ITM=$P(X,U,2),X=$P(X,U,4)
 . . Q:'ITM  Q:'$D(^ORD(101.41,+ITM,0))
 . . S (OIENS,PKGINFO)=""
 . . S TYP=$P(^ORD(101.41,ITM,0),U,4)
 . . S OIENS=$$OIIFN(+ITM)
 . . S PKGINFO=$$PKGINF(+ITM)
 . . I '$L(X) S X=$P($G(^ORD(101.41,ITM,5)),U,4)
 . . I '$L(X) S X=$P($G(^ORD(101.41,ITM,0)),U,2)
 . . I '$L(X) S X="Display Name Missing"
 . . S ILST=ILST+1,LST(ILST)=ITM_U_TYP_U_X_U_OIENS_U_PKGINFO```




 Generated on January 14th 2017, 7:26:35 am