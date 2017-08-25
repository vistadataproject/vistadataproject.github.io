---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORRC EVENTS BY ID<br/>
# ORRC EVENTS BY ID

This call returns the text of the documents associated with the eventsin the ID list passed in.

## Properties

Property | Value
--- | ---
Label | TEXT
MUMPS Implementation | [ORRCEVT](http://code.osehra.org/dox/Routine_ORRCEVT_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
EVENTS | LIST |  | true | This is the list of alert IDs in the format &quot;VST:&quot;_ID where ID is thealert identifier as defined by Kernel (&quot;OR,&lt;patient&gt;,&lt;Notification ien&gt;;&lt;creator&gt;;&lt;date created&gt;&quot;) or the appointment time/location (&quot;&lt;date.time&gt;;&lt;location&gt;&quot;).



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}