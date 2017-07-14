---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; GMRCSTLM SERVICE AND STATUS<br/>
# GMRCSTLM SERVICE AND STATUS

This returns a report of consults for a service/grouper for agiven set of statuses and date range.

## Properties

Property | Value
--- | ---
Label | ENOR
Routine | [GMRCSTLM](http://code.osehra.org/dox/Routine_GMRCSTLM_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
SERVICE | REFERENCE |  | true | The service or grouper to create the list for.  The default if none ispassed is &quot;1&quot; for ALL SERVICES.
START DATE | LITERAL | 7 | true | This is the start date range for the report or &quot;ALL&quot; for all dates.  Thedefault if none is passed is &quot;ALL&quot; and the END DATE will not be used.
END DATE | LITERAL | 7 | true | This is the ending date range for the report.  Not used if the START DATEis &quot;ALL&quot; for all dates.
STATUSES | LITERAL |  | true | This is a comma separated list of the statuses to include in the report.If none is passed the default list is &quot;3,4,5,6,8,9,11,99&quot; which is all thestatus that are pending resolution.
LIST CONTROL | LITERAL | 1 | true |    0, null or not define then just the display list is displayed   1 then the list will be two pieces with the first being the ien of the        consult for selection in the gui and the second piece being the        display text.  10 then the consults will have a line number on them for selection  20 then the consults will have the consult number displayed 100 then use abbreviations for the statuses 1, (10 or 20) and 100 can be added together to add there features



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}