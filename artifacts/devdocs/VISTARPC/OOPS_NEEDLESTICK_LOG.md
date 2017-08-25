---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; OOPS NEEDLESTICK LOG<br/>
# OOPS NEEDLESTICK LOG

This broker call retrieves the data necessary to produce the Log ofNeedlestick report.

## Properties

Property | Value
--- | ---
Label | NSTICK
MUMPS Implementation | [OOPSGUIF](http://code.osehra.org/dox/Routine_OOPSGUIF_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
INPUT | LITERAL | 256 | true | This parameter consists of 4 parts, the Start Date and End Date for the report, the Station(s) to be included on the report, and whether or not to include names on the report.  The parameter format is STARTDATE^ENDDATE^STATION^Y (or &#x27;N&#x27;o). 
CALL | LITERAL | 30 | true | This parameter will indicate which menu the report was called from.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}