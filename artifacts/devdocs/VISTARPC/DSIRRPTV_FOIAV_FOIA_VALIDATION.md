---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIRRPTV FOIAV FOIA VALIDATION<br/>
# DSIRRPTV FOIAV FOIA VALIDATION

This RPC will return a global array of all records thkat were looked atfor the year end FOIA report.  It will contain the internal requestnumber and patient name/FOIA indicator, and a one for any block on thereport that the given request was included on.  It also contains allrecord that, during the report period, were entered in error or of thetype of request/requestor type of an excluded state reporting agency.

## Properties

Property | Value
--- | ---
Label | FOIAV
Routine | [DSIRRPTV](http://code.osehra.org/dox/Routine_DSIRRPTV_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FRDT | LITERAL | 7 | true | Start date for report data.
TODT | LITERAL | 7 | true | Last date for reporting.
DIV | LITERAL | 99 | true | List of one or more divisions for which data will be reported.  I omitted, the clerk&#x27;s DUZ(2) will be used.
SCHED | LITERAL | 1 | true | Schedule - Boolean for scheduled or immediate run           1 &#x3D; Schedule / 0 or Null &#x3D; Run Immediately
ESTART | LITERAL | 15 | true | Earliet time to start the scheaduled task.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}