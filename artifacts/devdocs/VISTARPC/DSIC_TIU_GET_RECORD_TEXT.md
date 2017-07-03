---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIC TIU GET RECORD TEXT
# DSIC TIU GET RECORD TEXT

This was mainly written to allow one M routine to get the text of any signed progress note.  This function is exposed to the GUI.  However, GUI applications should use the TIU get document RPC in lieu of this RPC in most cases.

Property | Value
--- | ---
Label | TEXT
Routine | [DSICTIU1](http://code.osehra.org/dox/Routine_DSICTIU1_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DSIEN | LITERAL | 15 | true | Internal record number for file 8925 [IEN or IFN].
ACTION | LITERAL | 10 | true | This parameter is not well documented within TIU.  So for this RPC, do not pass a value at this time.  The default value is &quot;VIEW&quot;.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}