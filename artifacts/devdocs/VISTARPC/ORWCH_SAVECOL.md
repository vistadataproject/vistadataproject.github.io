---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWCH SAVECOL
# ORWCH SAVECOL

This RPC saves the column width sizes for reports in CPRS for the user.

Property | Value
--- | ---
Label | SAVECOL
Routine | [ORWCH](http://code.osehra.org/dox/Routine_ORWCH_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
COL | LITERAL | 245 | true | Format: ifn^C1,C2,C3,C4,C5,C6 ... Where ifn is the internal number of the report in file 101.24, and the2nd &#x27;^&#x27; piece is the columns separated by commas.



### MUMPS Method Description

Property | Value
--- | ---
Method | [SAVECOL^ORWCH](http://code.osehra.org/dox/Routine_ORWCH_source.html)
Method Comment | save report column sizing information
Input Parameters | COL
Code | {::nomarkdown}<pre><code> N NAM,VAL,ORERR<br/> S OK="",NAM=$P(COL,"^"),VAL=$P(COL,"^",2)<br/> D EN^XPAR(DUZ_";VA(200,","ORWCH COLUMNS REPORTS",NAM,VAL,.ORERR)<br/> I ORERR S OK=COL_":"_ORERR</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReports.pas">rReports.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}