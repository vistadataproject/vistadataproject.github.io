---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MHV LOG CONFIG
# MHV LOG CONFIG

Configure MHV application logging parameters.

Property | Value
--- | ---
Label | LOGSET
Routine | [MHVUL1](http://code.osehra.org/dox/Routine_MHVUL1_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
UPDATE | LIST | 32000 | true | Configuration parameters to update     UPDATE(&quot;STATE&quot;) - Flag 0/1                      On or Off    UPDATE(&quot;PURGE&quot;) - Purge Date/Time                      Fileman date/time                      Default 30 days from Today    UPDATE(&quot;LEVEL&quot;) - Logging level                      Error, Trace, Debug, Name                      Default - Trace    UPDATE(&quot;NAMES&quot;) - Caret delimited list of log entry namesUPDATE(&quot;AUTOPURGE&quot;) - Flag 0/1                      Default - 0 Off     UPDATE(&quot;DAYS&quot;) - Number of Days to keep



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}