---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; TIU GET SITE PARAMETERS
# TIU GET SITE PARAMETERS

This RPC returns the TIU Parameters for the Division the user is logged in to.

Property | Value
--- | ---
Label | SITEPARM
Routine | [TIUSRVP1](http://code.osehra.org/dox/Routine_TIUSRVP1_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [SITEPARM^TIUSRVP1](http://code.osehra.org/dox/Routine_TIUSRVP1_source.html)
Method Comment | Get site parameters for GUI
Code | {::nomarkdown}<pre><code> N TIUPRM0,TIUPRM1<br/> D SETPARM^TIULE<br/> S TIUY=TIUPRM0</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas">rTIU.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}