---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; VEJD DDR FINDER<br/>
# VEJD DDR FINDER



## Properties

Property | Value
--- | ---
Label | FIND
Routine | [VEJDDDR0](http://code.osehra.org/dox/Routine_VEJDDDR0_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
VEJDFILE | LITERAL |  | true | This is the number of the file in which you wish to search.
VEJDIENS | LITERAL |  | true | This is the IENS through which you wish to search for the value VEJDVAL.If you are searching the top level of a file, this should be null.  Seethe FileMan Programmers manual for instructions on constructing IENSstrings.
VEJDFELD | LITERAL |  | true | This is an ^ (or &quot;;&quot;) delimited list of fields that you wish returned fromeach entry that matches the lookup conditions that you have specified.
VEJDNUM | LITERAL |  | true | This is the maximum number of entries to be returned.  Defaults to allentries matching the lookup value (VEJDVAL).



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}