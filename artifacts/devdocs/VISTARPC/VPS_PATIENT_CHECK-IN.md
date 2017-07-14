---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; VPS PATIENT CHECK-IN<br/>
# VPS PATIENT CHECK-IN

Called by Vetlink Kiosk system.  The RPC will accept a single value asinput representing the string of pending appointments that the patient isto be checked-in.; and the output produced will be an array that returnsthe results of each attempted check-in.

## Properties

Property | Value
--- | ---
Label | CHK
Routine | [VPSRPC4](http://code.osehra.org/dox/Routine_VPSRPC4_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
VPSAPPTS | LITERAL | 225 | true | Input: string that represents the appt(s) to be checked in.  Since more than one appt can be checked-in, each appt consists of the DFN, CLINIC ien, and appt date/timestamp.  Each appt is delimited by &quot;;&quot; and the 3 pieces of data are separated by &quot;-&quot;.   All 3 data elements in the appt representation are required input.Syntax:           input&#x3D;DFN_&quot;-&quot;_clinic IEN_&quot;-&quot;_date/timestamp of scheduled appt_&quot;;&quot; example of data string (represents 2 appts):          &quot;308165-1218-3120420.1215;308165-4569-3120420.1030&quot;



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}