---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWRP3 EXPAND COLUMNS<br/>
# ORWRP3 EXPAND COLUMNS

This RPC loads and expands nested reports defined in the OE/RR Reportsfile (#101.24) for use on the Reports Tab in CPRS.

## Properties

Property | Value
--- | ---
Label | LIST
Routine | [ORWRP3](http://code.osehra.org/dox/Routine_ORWRP3_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [LIST^ORWRP3](http://code.osehra.org/dox/Routine_ORWRP3_source.html)
Method Comment | Get list for Reports &amp; Labs Tab Treeview
Input Parameters | TAB
Code | {::nomarkdown}<pre><code> N ROOT<br/> S ROOT=$NA(LST)<br/> K @ROOT<br/> D TRY1(.ROOT,$G(TAB))</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReports.pas">rReports.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}