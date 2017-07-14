---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIV PRODUCTIVITY REPORT<br/>
# DSIV PRODUCTIVITY REPORT

Returns productivity report data which in a combination of the ICB Entered By User and Exception reports.

## Properties

Property | Value
--- | ---
Label | RPT
Routine | [DSIVICR3](http://code.osehra.org/dox/Routine_DSIVICR3_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DSIVSDT | LITERAL | 20 | true | Start Date of the report
DSIVEDT | LITERAL | 20 | true | End date of the report.
DSIVRPT | LITERAL | 2 | true | Report type: C&#x3D;Clinic, U&#x3D;User, CU&#x3D;Clinic and User, UC&#x3D;User and Clinic
DSIVHNDL | LITERAL | 30 | true | Handle for the background job and XTMP global that contains the report status and data.
DSIVLOCS | LIST | 30 | true | Contains an optional list of locations to include or exclude from the report.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}