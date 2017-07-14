---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORRC EVENTS BY PATIENT<br/>
# ORRC EVENTS BY PATIENT

This call returns a list of the patient's alerted events.

## Properties

Property | Value
--- | ---
Label | LIST
Routine | [ORRCEVT](http://code.osehra.org/dox/Routine_ORRCEVT_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PATIENT | LITERAL |  | true | This is the pointer to the patient in the Patient file #2.
USER | LITERAL |  | true | This is the pointer to the user in the New Person file #200.
DETAILS | LITERAL |  | true | This flag indicates whether to return the details or note text with eachevent (true) or just the list of event ID&#x27;s (false).



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}