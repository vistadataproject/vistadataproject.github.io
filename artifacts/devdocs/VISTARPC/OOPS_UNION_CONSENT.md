---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; OOPS UNION CONSENT<br/>
# OOPS UNION CONSENT

This broker call will send the Bulletin to the union representative selected.Note: a ASISTS legacy routine is called from this broker call to send thebulletin.

## Properties

Property | Value
--- | ---
Label | CONSENT
Routine | [OOPSGUI7](http://code.osehra.org/dox/Routine_OOPSGUI7_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IEN | LITERAL |  | true | This required input field must be a valid IEN in the 2260 file. Note, there isno validation check done on the IEN.
UNIREP | LITERAL |  | true | This required input parameter must be a valid DUZ of the Union Representativeselected to receive the Bulletin. Note, like the IEN input parm, no validation is done on the DUZ being passed. 



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}