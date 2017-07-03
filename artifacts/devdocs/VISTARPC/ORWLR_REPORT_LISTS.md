---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWLR REPORT LISTS
# ORWLR REPORT LISTS

This remote procedure call returns a list of lab cumulative sections,and date ranges that can be displayed at the workstation.There are no input parameters fo this rpc.

Property | Value
--- | ---
Label | LIST
Routine | [ORWLR](http://code.osehra.org/dox/Routine_ORWLR_source.html)
Return Type | GLOBAL ARRAY




### MUMPS Method Description

Property | Value
--- | ---
Method | [LIST^ORWLR](http://code.osehra.org/dox/Routine_ORWLR_source.html)
Method Comment | return lists for list boxes
First Comment | {::nomarkdown}<pre><code>  RPC: ORWLR REPORT LIST</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N EOF<br/> S EOF="$$END",OROOT=$NA(^TMP($J,"ORLABLIST"))<br/> K @OROOT<br/> D GETRPTS(.OROOT,.EOF) ; -- get list of reports<br/> D GETDT^ORWRP(.OROOT,.EOF) ; -- get list of date ranges</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}N/A{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}