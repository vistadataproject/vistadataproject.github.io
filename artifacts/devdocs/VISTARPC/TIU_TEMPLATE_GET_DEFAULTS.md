---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; TIU TEMPLATE GET DEFAULTS
# TIU TEMPLATE GET DEFAULTS

Returns Default Template Settings

Property | Value
--- | ---
Label | GETDFLT
Routine | [TIUSRVT2](http://code.osehra.org/dox/Routine_TIUSRVT2_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [GETDFLT^TIUSRVT2](http://code.osehra.org/dox/Routine_TIUSRVT2_source.html)
Method Comment | Returns Default Templates for the current user
Code | {::nomarkdown}<pre><code> N TIUTMP,TIUERR<br/> D GETLST^XPAR(.TIUTMP,"USR","TIU DEFAULT TEMPLATES","Q",.TIUERR) ;2263<br/> S TIUY=$P($G(TIUTMP(1)),U,2)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Templates/rTemplates.pas">Templates/rTemplates.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}