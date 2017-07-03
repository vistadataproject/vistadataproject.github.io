---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWRP REPORT LISTS
# ORWRP REPORT LISTS

This remote procedure call returns a list of reports,Health Summary types and date ranges that can be displayedat the workstation.There are no input parameters fo this rpc.

Property | Value
--- | ---
Label | LIST
Routine | [ORWRP](http://code.osehra.org/dox/Routine_ORWRP_source.html)
Return Type | ARRAY




### MUMPS Method Description

Property | Value
--- | ---
Method | [LIST^ORWRP](http://code.osehra.org/dox/Routine_ORWRP_source.html)
Method Comment | report lists for reports tab
First Comment | {::nomarkdown}<pre><code>  RPC: ORWRP REPORT LIST</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N EOF,ROOT<br/> S EOF="$$END",ROOT=$NA(LST)<br/> K @ROOT<br/> D GETRPTS(.ROOT,.EOF) ; -report list<br/> D GETHS(.ROOT,.EOF) ; -health summary types<br/> D GETDT(.ROOT,.EOF) ; -date ranges</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReports.pas">rReports.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}