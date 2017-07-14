---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDXM PROMPTS<br/>
# ORWDXM PROMPTS

Return prompting information for a generic dialog in the format:    LST(n)=ID^REQ^HID^PROMPT^TYPE^DOMAIN^DEFAULT^IDFLT^HELP

## Properties

Property | Value
--- | ---
Label | PROMPTS
Routine | [ORWDXM](http://code.osehra.org/dox/Routine_ORWDXM_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [PROMPTS^ORWDXM](http://code.osehra.org/dox/Routine_ORWDXM_source.html)
Method Comment | Return prompting info for generic dialog
Input Parameters | DLG
First Comment | {::nomarkdown}<pre><code> LST(n)=ID^REQ^HID^PROMPT^TYPE^DOMAIN^DEFAULT^IDFLT^HELP^XREF^SCR</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N I,X,ILST,SEQ,REQ,HID,ITM,IDX,PRMT,HLP,DFLT,IDFLT,TYP,DOM,ID,WP,SCR<br/> S ILST=0<br/> S SEQ=0 F  S SEQ=$O(^ORD(101.41,DLG,10,"B",SEQ)) Q:'SEQ  D<br/> . S I=0 F  S I=$O(^ORD(101.41,DLG,10,"B",SEQ,I)) Q:'I  D<br/> . . S X=$G(^ORD(101.41,DLG,10,I,0))<br/> . . S ITM=$P(X,U,2),REQ=+$P(X,U,6),IDX=$P(X,U,10),PRMT=$P(X,U,14)<br/> . . I '$L(PRMT) S PRMT=$P(X,U,4)<br/> . . S HLP=$P($G(^ORD(101.41,DLG,10,I,1)),U,1)<br/> . . S HID=$E($G(^ORD(101.41,DLG,10,I,3)),1,3)="I 0"<br/> . . S SCR="" I $L($G(^ORD(101.41,DLG,10,I,4))) S SCR=DLG_":"_I<br/> . . S X=$G(^ORD(101.41,ITM,0)) I '$L(PRMT) S PRMT=$P(X,U,2)<br/> . . S X=$G(^ORD(101.41,ITM,1)),TYP=$P(X,U),DOM=$P(X,U,2),ID=$P(X,U,3)<br/> . . S X=$G(^ORD(101.41,DLG,10,I,7)) D XDFLT(X,TYP,DOM,.IDFLT,.DFLT)<br/> . . I '$L(ID) S ID="ID"_ITM<br/> . . S ILST=ILST+1<br/> . . S LST(ILST)="~"_ID_U_REQ_U_HID_U_PRMT_U_TYP_U_DOM_U_DFLT_U_IDFLT_U_HLP_U_IDX_U_SCR<br/> . . ; loop here to append any default word processing<br/> . . S WP=0 F  S WP=$O(^ORD(101.41,DLG,10,I,8,WP)) Q:'WP  D<br/> . . . S ILST=ILST+1,LST(ILST)="t"_$G(^ORD(101.41,DLG,10,I,8,WP,0))</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODBase.pas">Orders/rODBase.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}