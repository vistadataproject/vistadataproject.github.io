---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXM LOADSET 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXM LOADSET{:/}
 tag | {::nomarkdown}LOADSET{:/}
 routine | [ORWDXM](http://code.osehra.org/dox/Routine_ORWDXM_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Return the contents of an order set in the following format:   LST(0): SetDisplayText^Key Variables   LST(n): DlgIEN^DlgType^DisplayText{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Return the contents of an order set
 Input Parameters | {::nomarkdown}DLG{:/}
 Lines | {::nomarkdown} N SEQ,DA,ITM,TYP,ILST,X,OIENS,PKGINFO<br/> S LST(0)=$P(^ORD(101.41,DLG,0),U,2)_U_$$KEYVAR^ORWDXM3(DLG),ILST=0<br/> S SEQ="" F  S SEQ=$O(^ORD(101.41,DLG,10,"B",SEQ)) Q:SEQ=""  D<br/> . S DA=0 F  S DA=$O(^ORD(101.41,DLG,10,"B",SEQ,DA)) Q:'DA  D<br/> . . S X=$G(^ORD(101.41,DLG,10,DA,0)),ITM=$P(X,U,2),X=$P(X,U,4)<br/> . . Q:'ITM  Q:'$D(^ORD(101.41,+ITM,0))<br/> . . S (OIENS,PKGINFO)=""<br/> . . S TYP=$P(^ORD(101.41,ITM,0),U,4)<br/> . . S OIENS=$$OIIFN(+ITM)<br/> . . S PKGINFO=$$PKGINF(+ITM)<br/> . . I '$L(X) S X=$P($G(^ORD(101.41,ITM,5)),U,4)<br/> . . I '$L(X) S X=$P($G(^ORD(101.41,ITM,0)),U,2)<br/> . . I '$L(X) S X="Display Name Missing"<br/> . . S ILST=ILST+1,LST(ILST)=ITM_U_TYP_U_X_U_OIENS_U_PKGINFO{:/}
 Leading comment lines | {::nomarkdown}LST(0): SetDisplayText^Key Variables<br/>LST(n): DlgIEN^DlgType^DisplayText^OrderableItemIENs(OIIEN;OIIEN;..){:/}




 Generated on January 13th 2017, 7:15:27 am