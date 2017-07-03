---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWDLR32 DEF
# ORWDLR32 DEF

Get lab order dialog definition.

Property | Value
--- | ---
Label | DEF
Routine | [ORWDLR32](http://code.osehra.org/dox/Routine_ORWDLR32_source.html)
Return Type | ARRAY




### MUMPS Method Description

Property | Value
--- | ---
Method | [DEF^ORWDLR32](http://code.osehra.org/dox/Routine_ORWDLR32_source.html)
Method Comment | procedure
Input Parameters | ALOC, ADIV
First Comment | {::nomarkdown}<pre><code> For Event Delay Order<br/>  ALOC: Delay Event's default location<br/>  ADIV: Delay Event's default division<br/> get dialog definition specific to lab</code></pre>{:/}
Code | {::nomarkdown}<pre><code> S ILST=0<br/> S LST($$NXT)="~ShortList" D SHORT<br/> S LST($$NXT)="~Lab Collection Times" D LCOLLTM<br/> S LST($$NXT)="~Ward Collection Times" D WCOLLTM<br/> S LST($$NXT)="~Send Patient Times" D SENDTM<br/> S LST($$NXT)="~Collection Types" D COLLTYP<br/> S LST($$NXT)="~Default Urgency" D URGENCY<br/> S LST($$NXT)="~Schedules" D SCHED<br/> S LST($$NXT)="~Common" D COMMON</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODLab.pas">Orders/rODLab.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}