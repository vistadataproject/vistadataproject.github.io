---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWD GET4EDIT<br/>
# ORWD GET4EDIT

Returns the responses for an already existing order.

## Properties

Property | Value
--- | ---
Label | GET4EDIT
MUMPS Implementation | [ORWD](http://code.osehra.org/dox/Routine_ORWD_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [GET4EDIT^ORWD](http://code.osehra.org/dox/Routine_ORWD_source.html)
Method Comment | procedure
Input Parameters | ORIFN
First Comment | {::nomarkdown}<pre><code> return responses in format that can be used by dialog</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N ILST,PRMT,INST,DLG,ORDIALOG S ILST=0<br/> I '$D(ORIFN) S LST=0 Q<br/> S ORIFN=+ORIFN,DLG=+$P(^OR(100,ORIFN,0),U,5)<br/> D GETDLG1^ORCD(DLG),GETORDER^ORCD("^OR(100,"_ORIFN_",4.5)")<br/> S PRMT=0 F  S PRMT=$O(ORDIALOG(PRMT)) Q:'PRMT  D<br/> . S INST=0 F  S INST=$O(ORDIALOG(PRMT,INST)) Q:'INST  D<br/> . . S ILST=ILST+1,LST(ILST)="~"_PRMT_U_INST_U_$P(ORDIALOG(PRMT),U,3)<br/> . . S ILST=ILST+1,LST(ILST)="d"_ORDIALOG(PRMT,INST)<br/> . . I $E(ORDIALOG(PRMT,INST))=U D                 ; load word processing<br/> . . . N I,REF S I=0,REF=ORDIALOG(PRMT,INST)<br/> . . . F  S I=$O(@REF@(I)) Q:'I  S ILST=ILST+1,LST(ILST)="t"_^(I,0)<br/> . . E  S $P(LST(ILST),U,2)=$$EXT^ORCD(PRMT,INST)  ; load external value<br/> . . I "R"[$E(ORDIALOG(PRMT,0)) D<br/> . . . S $P(LST(ILST),U,2)=$$UP^XLFSTR($$FMTE^XLFDT(ORDIALOG(PRMT,INST)))</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}