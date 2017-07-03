---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; YTRP INSTRUMENT REPORT
# YTRP INSTRUMENT REPORT

This remote procedure allows staff to print out psychological tests andinterview reports.

Property | Value
--- | ---
Label | INTRMNT
Routine | [YTRPWRP](http://code.osehra.org/dox/Routine_YTRPWRP_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
YSDFN | LITERAL | 30 | true | YSDFN is a pointer to the Patient file #2.
YSXT | LITERAL | 60 | true | This varible contains &quot;Test Completion Date,Name of the test&quot;, for example3000721,223.The Name of the test and Completion Date are field 0.1 and field 1 of thePsych Instrument Patient file #601.2.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}