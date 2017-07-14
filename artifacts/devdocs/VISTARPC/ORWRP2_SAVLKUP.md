---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWRP2 SAVLKUP<br/>
# ORWRP2 SAVLKUP

This saves the last Adhoc Health Summary lookup used by a user in CPRS.

## Properties

Property | Value
--- | ---
Label | SAVLKUP
Routine | [ORWRP2](http://code.osehra.org/dox/Routine_ORWRP2_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
VAL | LITERAL | 10 | true | This is the value passed to the parameter ORWRP ADHOC LOOKUP  0: Name  1: Abbreviation  2: Display Header



## MUMPS Method Description

Property | Value
--- | ---
Method | [SAVLKUP^ORWRP2](http://code.osehra.org/dox/Routine_ORWRP2_source.html)
Method Comment | save Adhoc lookup selection
Input Parameters | VAL
Code | {::nomarkdown}<pre><code> N ORERR<br/> S OK=""<br/> D EN^XPAR(DUZ_";VA(200,","ORWRP ADHOC LOOKUP",1,VAL,.ORERR)<br/> I ORERR S OK=VAL_":"_ORERR</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReports.pas">rReports.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}