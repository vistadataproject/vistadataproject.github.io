---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXM PROMPTS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXM PROMPTS{:/}
 tag | {::nomarkdown}PROMPTS{:/}
 routine | [ORWDXM](http://code.osehra.org/dox/Routine_ORWDXM_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Return prompting information for a generic dialog in the format:    LST(n)=ID^REQ^HID^PROMPT^TYPE^DOMAIN^DEFAULT^IDFLT^HELP{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | PROMPTS^[ORWDXM](http://code.osehra.org/dox/Routine_ORWDXM_source.html)
 Method comment | Return prompting info for generic dialog
 Input parameters | {::nomarkdown}DLG{:/}
 First comment | {::nomarkdown}<pre> LST(n)=ID^REQ^HID^PROMPT^TYPE^DOMAIN^DEFAULT^IDFLT^HELP^XREF^SCR</pre>{:/}
 Code | {::nomarkdown}  N I,X,ILST,SEQ,REQ,HID,ITM,IDX,PRMT,HLP,DFLT,IDFLT,TYP,DOM,ID,WP,SCR<br> S ILST=0<br> S SEQ=0 F  S SEQ=$O(^ORD(101.41,DLG,10,"B",SEQ)) Q:'SEQ  D<br> . S I=0 F  S I=$O(^ORD(101.41,DLG,10,"B",SEQ,I)) Q:'I  D<br> . . S X=$G(^ORD(101.41,DLG,10,I,0))<br> . . S ITM=$P(X,U,2),REQ=+$P(X,U,6),IDX=$P(X,U,10),PRMT=$P(X,U,14)<br> . . I '$L(PRMT) S PRMT=$P(X,U,4)<br> . . S HLP=$P($G(^ORD(101.41,DLG,10,I,1)),U,1)<br> . . S HID=$E($G(^ORD(101.41,DLG,10,I,3)),1,3)="I 0"<br> . . S SCR="" I $L($G(^ORD(101.41,DLG,10,I,4))) S SCR=DLG_":"_I<br> . . S X=$G(^ORD(101.41,ITM,0)) I '$L(PRMT) S PRMT=$P(X,U,2)<br> . . S X=$G(^ORD(101.41,ITM,1)),TYP=$P(X,U),DOM=$P(X,U,2),ID=$P(X,U,3)<br> . . S X=$G(^ORD(101.41,DLG,10,I,7)) D XDFLT(X,TYP,DOM,.IDFLT,.DFLT)<br> . . I '$L(ID) S ID="ID"_ITM<br> . . S ILST=ILST+1<br> . . S LST(ILST)="~"_ID_U_REQ_U_HID_U_PRMT_U_TYP_U_DOM_U_DFLT_U_IDFLT_U_HLP_U_IDX_U_SCR<br> . . ; loop here to append any default word processing<br> . . S WP=0 F  S WP=$O(^ORD(101.41,DLG,10,I,8,WP)) Q:'WP  D<br> . . . S ILST=ILST+1,LST(ILST)="t"_$G(^ORD(101.41,DLG,10,I,8,WP,0)){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODBase.pas">Orders/rODBase.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:25:13 am</p>{:/}