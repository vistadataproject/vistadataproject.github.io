---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORRC EVENTS ACKNOWLEDGE
# ORRC EVENTS ACKNOWLEDGE

This call will clear the event alerts for this user, and return a trueor false value for each ID if successful.

Property | Value
--- | ---
Label | CLEAR
Routine | [ORRCEVT](http://code.osehra.org/dox/Routine_ORRCEVT_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
USER | LITERAL |  | true | This is the pointer to the user in the New Person file #200.
ALERTS | LIST |  | true | This is the list of alert IDs to be cleared, in the form &quot;VST:&quot;_ID whereID is the alert identifier as defined by Kernel (&quot;OR,&lt;patient&gt;,&lt;Notification ien&gt;;&lt;creator&gt;;&lt;date created&gt;&quot;).



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}