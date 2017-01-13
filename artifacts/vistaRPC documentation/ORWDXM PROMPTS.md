---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXM PROMPTS 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXM PROMPTS{:/}
 tag | {::nomarkdown}PROMPTS{:/}
 routine | [ORWDXM](http://code.osehra.org/dox/Routine_ORWDXM_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Return prompting information for a generic dialog in the format:    LST(n)=ID^REQ^HID^PROMPT^TYPE^DOMAIN^DEFAULT^IDFLT^HELP{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Return prompting info for generic dialog
 Input Parameters | {::nomarkdown}DLG{:/}
 Lines | ```
 N I,X,ILST,SEQ,REQ,HID,ITM,IDX,PRMT,HLP,DFLT,IDFLT,TYP,DOM,ID,WP,SCR
 S ILST=0
 S SEQ=0 F  S SEQ=$O(^ORD(101.41,DLG,10,"B",SEQ)) Q:'SEQ  D
 . S I=0 F  S I=$O(^ORD(101.41,DLG,10,"B",SEQ,I)) Q:'I  D
 . . S X=$G(^ORD(101.41,DLG,10,I,0))
 . . S ITM=$P(X,U,2),REQ=+$P(X,U,6),IDX=$P(X,U,10),PRMT=$P(X,U,14)
 . . I '$L(PRMT) S PRMT=$P(X,U,4)
 . . S HLP=$P($G(^ORD(101.41,DLG,10,I,1)),U,1)
 . . S HID=$E($G(^ORD(101.41,DLG,10,I,3)),1,3)="I 0"
 . . S SCR="" I $L($G(^ORD(101.41,DLG,10,I,4))) S SCR=DLG_":"_I
 . . S X=$G(^ORD(101.41,ITM,0)) I '$L(PRMT) S PRMT=$P(X,U,2)
 . . S X=$G(^ORD(101.41,ITM,1)),TYP=$P(X,U),DOM=$P(X,U,2),ID=$P(X,U,3)
 . . S X=$G(^ORD(101.41,DLG,10,I,7)) D XDFLT(X,TYP,DOM,.IDFLT,.DFLT)
 . . I '$L(ID) S ID="ID"_ITM
 . . S ILST=ILST+1
 . . S LST(ILST)="~"_ID_U_REQ_U_HID_U_PRMT_U_TYP_U_DOM_U_DFLT_U_IDFLT_U_HLP_U_IDX_U_SCR
 . . ; loop here to append any default word processing
 . . S WP=0 F  S WP=$O(^ORD(101.41,DLG,10,I,8,WP)) Q:'WP  D
 . . . S ILST=ILST+1,LST(ILST)="t"_$G(^ORD(101.41,DLG,10,I,8,WP,0))```
 Leading comment lines | {::nomarkdown}LST(n)=ID^REQ^HID^PROMPT^TYPE^DOMAIN^DEFAULT^IDFLT^HELP^XREF^SCR{:/}




 Generated on January 13th 2017, 6:55:29 am