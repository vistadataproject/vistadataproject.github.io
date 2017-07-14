---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; OOPS GET OSHA DATA<br/>
# OOPS GET OSHA DATA

This broker call returns the data needed to produce the Log of Federal Occupational Injuries and Illnesses Report.

## Properties

Property | Value
--- | ---
Label | OSHA
Routine | [OOPSGUIF](http://code.osehra.org/dox/Routine_OOPSGUIF_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
INPUT | LITERAL | 256 | true | This parameter contains the Start Date and End date of the Report, the StationIEN or an &#x27;A&#x27; to include all stations at that facilitiy and whether to includenames on the report.  The format is STARTDT^ENDDT^STATION^Y (or N if no).
CALL | LITERAL | 10 | true | This paramter contains the menu that has called the report.  This is mainlybeing used to exclude names from displaying on the Union menu.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}