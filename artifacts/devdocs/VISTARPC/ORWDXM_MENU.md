---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWDXM MENU
# ORWDXM MENU

Returns menu contents for an order dialog in the following format:    LST(0)=name^# cols^path switch^^^ Key Variables (pieces 6-20)    LST(n)=col^row^type^ien^formid^autoaccept^display text^mnemonic           ^displayonly

Property | Value
--- | ---
Label | MENU
Routine | [ORWDXM](http://code.osehra.org/dox/Routine_ORWDXM_source.html)
Return Type | ARRAY




### MUMPS Method Description

Property | Value
--- | ---
Method | [MENU^ORWDXM](http://code.osehra.org/dox/Routine_ORWDXM_source.html)
Method Comment | Return menu contents for an order dialog
Input Parameters | DLG
First Comment | {::nomarkdown}<pre><code> LST(0)=name^# cols^path switch^^^ Key Variables (pieces 6-20)<br/> LST(n)=col^row^type^ien^formid^autoaccept^display text^mnemonic<br/>        ^displayonly</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N ILST,I,COL,ROW,IEN,TYP,FID,AUT,MNE,DON,X,X0,X5,NUMCOL<br/> S X0=$G(^ORD(101.41,DLG,0)),X5=$G(^(5)),ILST=0,NUMCOL=1<br/> S LST(0)=$P(X0,U,2)_U_NUMCOL_U_$P(X5,U,3)<br/> S $P(LST(0),U,6)=$$KEYVAR^ORWDXM3(DLG) ; key vars start at 6th piece<br/> S I=0 F  S I=$O(^ORD(101.41,DLG,10,I)) Q:'I  D<br/> . S X=$G(^ORD(101.41,DLG,10,I,0))<br/> . S ROW=$P(X,U),COL=$P(ROW,".",2),ROW=$P(ROW,".",1)<br/> . I COL>NUMCOL S NUMCOL=COL<br/> . S IEN=+$P(X,U,2),MNE=$P(X,U,3),DON=$P(X,U,5),X=$P(X,U,4)<br/> . S X0=$G(^ORD(101.41,IEN,0)),X5=$G(^(5))<br/> . S TYP=$P(X0,U,4),FID=+$P(X5,U,5),AUT=$P(X5,U,8)<br/> . I '$L(X) S X=$P($G(^ORD(101.41,IEN,0)),U,2)<br/> . S ILST=ILST+1,LST(ILST)=COL_U_ROW_U_TYP_U_IEN_U_FID_U_AUT_U_X_U_MNE_U_DON<br/> S $P(LST(0),U,2)=NUMCOL</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}