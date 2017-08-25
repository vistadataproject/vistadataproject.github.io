---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWD SAVE<br/>
# ORWD SAVE

Saves an order.  The order is passed in ORDIALOG format.

## Properties

Property | Value
--- | ---
Label | SAVE
MUMPS Implementation | [ORWD](http://code.osehra.org/dox/Routine_ORWD_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [SAVE^ORWD](http://code.osehra.org/dox/Routine_ORWD_source.html)
Method Comment | procedure
Input Parameters | DFN, ORNP, LOC, DLG, ORWDACT, RSP
First Comment | {::nomarkdown}<pre><code> Save order</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N ORDIALOG,ORL,ORVP,ORIFN,ORDUZ,ORSTS,ORDG,OREVENT,ORCAT,ORDA<br/> I $P(^ORD(101.41,+DLG,0),U)="PSO OERR" S ORCAT="O"<br/> I $P(^ORD(101.41,+DLG,0),U)="PSJ OR PAT OE" S ORCAT="I"<br/> S ORVP=DFN_";DPT(",ORL(2)=LOC_";SC(",ORL=ORL(2)<br/> D GETDLG^ORCD(DLG)<br/> M ORDIALOG=RSP S ORDIALOG=DLG<br/> I ORWDACT="N" D<br/> . D EN^ORCSAVE<br/> . S Y="" I ORIFN D GETBYIFN^ORWORR(.Y,ORIFN)<br/> I $P(ORWDACT,U,1)="E" D<br/> . S ORIFN=+$P(ORWDACT,U,2) D XX^ORCSAVE<br/> . S Y="" S ORIFN=+$P(ORWDACT,U,2)_";"_ORDA D GETBYIFN^ORWORR(.Y,ORIFN)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}