---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDAL32 DEF<br/>
# ORWDAL32 DEF

Returns default values and list sets for Allergy ordering dialog.

## Properties

Property | Value
--- | ---
Label | DEF
MUMPS Implementation | [ORWDAL32](http://code.osehra.org/dox/Routine_ORWDAL32_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [DEF^ORWDAL32](http://code.osehra.org/dox/Routine_ORWDAL32_source.html)
Method Comment | Get dialog data for allergies
Code | {::nomarkdown}<pre><code> N ILST,I,X S ILST=0<br/> S LST($$NXT)="~Allergy Types" D ALLGYTYP<br/> S LST($$NXT)="~Reactions" D ALLGYTYP<br/> S LST($$NXT)="~Nature of Reaction" D NATREACT<br/> S LST($$NXT)="~Top Ten" D TOPTEN<br/> S LST($$NXT)="~Observ/Hist" D OBSHIST<br/> S LST($$NXT)="~Severity" D SEVERITY</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODAllergy.pas">Orders/rODAllergy.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}