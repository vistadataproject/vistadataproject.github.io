---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDLR DEF<br/>
# ORWDLR DEF

Loads dialog data (lists & defaults) for a lab order.

## Properties

Property | Value
--- | ---
Label | DEF
MUMPS Implementation | [ORWDLR](http://code.osehra.org/dox/Routine_ORWDLR_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [DEF^ORWDLR](http://code.osehra.org/dox/Routine_ORWDLR_source.html)
Method Comment | procedure
Input Parameters | ALOC
First Comment | {::nomarkdown}<pre><code> get dialog definition specific to lab</code></pre>{:/}
Code | {::nomarkdown}<pre><code> S ILST=0<br/> S LST($$NXT)="~Collection Times" D COLLTM<br/> S LST($$NXT)="~Send Patient Times" D SENDTM<br/> S LST($$NXT)="~Default Urgency="_$$DEFURG^LR7OR3<br/> S LST($$NXT)="~Schedules" D SCHED<br/> S LST($$NXT)="~Common" D COMMON</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}