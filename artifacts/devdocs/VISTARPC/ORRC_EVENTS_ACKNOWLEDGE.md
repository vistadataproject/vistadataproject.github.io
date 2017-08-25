---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORRC EVENTS ACKNOWLEDGE<br/>
# ORRC EVENTS ACKNOWLEDGE

This call will clear the event alerts for this user, and return a trueor false value for each ID if successful.

## Properties

Property | Value
--- | ---
Label | CLEAR
MUMPS Implementation | [ORRCEVT](http://code.osehra.org/dox/Routine_ORRCEVT_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
USER | LITERAL |  | true | This is the pointer to the user in the New Person file #200.
ALERTS | LIST |  | true | This is the list of alert IDs to be cleared, in the form &quot;VST:&quot;_ID whereID is the alert identifier as defined by Kernel (&quot;OR,&lt;patient&gt;,&lt;Notification ien&gt;;&lt;creator&gt;;&lt;date created&gt;&quot;).



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}