---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; KMPD TMG REPORTS<br/>
# KMPD TMG REPORTS

Get Timing Reports data.

## Properties

Property | Value
--- | ---
Label | TMGRPT
MUMPS Implementation | [KMPDU7](http://code.osehra.org/dox/Routine_KMPDU7_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DATES | LIST | 245 | true | Array containing report dates in format:        array(0)&#x3D;FMStartDate^FMEndDate^ExtStartDate^ExtEndDate        array(1)&#x3D;NumberOfSessions ex:     KMPDATE(0)&#x3D;&quot;3070925^3071001^Sep 25, 2007^Oct 01, 2007&quot;        KMPDATE(1)&#x3D;7
TIME FRAME | LITERAL | 30 | true | Time Frame: Prime Time            Non-Prime Time
REPORT NAME | LITERAL | 120 | true | Name of report (free text).
TTL SEARCH | LITERAL | 30 | true | Time-To-Load Search criteria:        1: User Name        2: Client Name        3: IP Address        4: All Items
SECONDS | LITERAL | 10 | true | Threshold seconds.
HOUR | LITERAL | 30 | true | Hour



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}