---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; TIU TEMPLATE SET DEFAULTS
# TIU TEMPLATE SET DEFAULTS

Saves Template Default Settings

Property | Value
--- | ---
Label | SETDFLT
Routine | [TIUSRVT2](http://code.osehra.org/dox/Routine_TIUSRVT2_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
SETTINGS | LITERAL |  |  | 



### MUMPS Method Description

Property | Value
--- | ---
Method | [SETDFLT^TIUSRVT2](http://code.osehra.org/dox/Routine_TIUSRVT2_source.html)
Method Comment | Saves Default Templates for the user
Input Parameters | SETTINGS
Code | {::nomarkdown}<pre><code> N TIUERR<br/> D EN^XPAR(DUZ_";VA(200,","TIU DEFAULT TEMPLATES",1,SETTINGS,.TIUERR) ;2263<br/> S TIUY=1</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Templates/rTemplates.pas">Templates/rTemplates.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}