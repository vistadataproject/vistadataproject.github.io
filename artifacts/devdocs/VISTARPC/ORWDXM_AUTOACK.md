---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDXM AUTOACK<br/>
# ORWDXM AUTOACK

Place a quick order in CPRS GUI without the verify step.

## Properties

Property | Value
--- | ---
Label | AUTOACK
Routine | [ORWDXM](http://code.osehra.org/dox/Routine_ORWDXM_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [AUTOACK^ORWDXM](http://code.osehra.org/dox/Routine_ORWDXM_source.html)
Method Comment | Place a quick order without verify step
Input Parameters | ORVP, ORNP, ORL, ORIT
Code | {::nomarkdown}<pre><code> N ORDG,ORDUZ,ORSTS,OREVENT,ORCAT,ORDA,ORTS,ORNEW,ORCHECK,ORLOG<br/> N ORDIALOG,ORIFN,ORLEAD,ORTRAIL<br/> S ORVP=ORVP_";DPT(",ORL(2)=ORL_";SC(",ORL=ORL(2)<br/> S DGRP=$P($G(^ORD(101.41,ORIT,0)),U,5) Q:'DGRP<br/> S ORDIALOG=$$DEFDLG^ORWDXQ(DGRP)<br/> I ORDIALOG=$O(^ORD(101.41,"B","PSO OERR",0)) S ORCAT="O"      ; temp<br/> I ORDIALOG=$O(^ORD(101.41,"B","PSJ OR PAT OE",0)) S ORCAT="I" ; temp<br/> D GETDLG1^ORCD(ORDIALOG)<br/> D GETORDER^ORCD("^ORD(101.41,"_ORIT_",6)")<br/> D EN^ORCSAVE<br/> S REC="" I ORIFN D GETBYIFN^ORWORR(.REC,ORIFN)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODBase.pas">Orders/rODBase.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}