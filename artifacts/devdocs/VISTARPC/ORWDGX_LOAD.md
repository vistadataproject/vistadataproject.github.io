---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWDGX LOAD
# ORWDGX LOAD

Loads a list of activities for an activity order.

Property | Value
--- | ---
Label | LOAD
Routine | [ORWDGX](http://code.osehra.org/dox/Routine_ORWDGX_source.html)
Return Type | ARRAY




### MUMPS Method Description

Property | Value
--- | ---
Method | [LOAD^ORWDGX](http://code.osehra.org/dox/Routine_ORWDGX_source.html)
Method Comment | Load a list of activity orders
Input Parameters | PAR
Code | {::nomarkdown}<pre><code> N I,ILST,DLG,NAM,TLST<br/> D GETLST^XPAR(.TLST,"ALL",PAR)<br/> S I=0,ILST=0 F  S I=$O(TLST(I)) Q:'I  D<br/> . S DLG=$P(TLST(I),U,2),NAM=$P(^ORD(101.41,+DLG,0),U,2)<br/> . S ILST=ILST+1,LST(ILST)=DLG_U_NAM<br/> N DLGTYP,OIDLG,FTDLG,OITYP,I,IFN<br/> S DLGTYP=$P(^ORD(101.41,DLG,0),U,4)<br/> S OIDLG=$O(^ORD(101.41,"B","OR GTX ORDERABLE ITEM",0))<br/> S FTDLG=$O(^ORD(101.41,"B","OR GTX FREE TEXT OI",0))<br/> I DLGTYP="D" D<br/> . S I=0,IFN=0 F  S I=$O(^ORD(101.41,DLG,10,I)) S X=^(I,0) D  Q:IFN<br/> . . I $P(X,U,2)=OIDLG S IFN=I,OITYP="O"<br/> . . I $P(X,U,2)=FTDLG S IFN=I,OITYP="F"<br/> . S Y="" I $L($G(^ORD(101.41,DLG,10,IFN,7))) X ^(7)<br/> . I OITYP="O" S Y=$P(^ORD(101.43,+Y,0),U,1)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}N/A{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}