---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; GMRCSTU COMPLETION STATISTICS<br/>
# GMRCSTU COMPLETION STATISTICS

This returns a report of completion time statistics for a consultservice/grouper for a given set of statuses and date range.

## Properties

Property | Value
--- | ---
Label | ENOR
Routine | [GMRCSTU](http://code.osehra.org/dox/Routine_GMRCSTU_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
SERVICE | REFERENCE |  | true | The service or grouper to create the list for.  The default if none ispassed is &quot;1&quot; for ALL SERVICES.
START DATE | LITERAL | 7 | true | This is the start date range for the report or &quot;ALL&quot; for all dates.  Thedefault if none is passed is &quot;ALL&quot; and the END DATE will not be used.
END DATE | LITERAL | 7 | true | This is the ending date range for the report.  Not used if the START DATEis &quot;ALL&quot; for all dates.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}