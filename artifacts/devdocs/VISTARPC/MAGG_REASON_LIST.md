---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAGG REASON LIST
# MAGG REASON LIST

This remote procedure returns the list of reasons for actions performed onimages. This data is loaded from the MAG REASON file (#2005.88).

Property | Value
--- | ---
Label | LSTRSNS
Routine | [MAGGA01](http://code.osehra.org/dox/Routine_MAGGA01_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
TYPE | LITERAL |  | true | This parameter defines the type(s) of reasons that are returned by the remote procedure. Its value should consist of one or more of the followingcharacters:   C  Reasons for copying images   D  Reasons for deleting images   P  Reasons for printing images   S  Reasons for changing image status For example, if the &quot;CD&quot; value is assigned to the parameter, the RPCreturns the reasons for copying and deleting images.
FLAGS | LITERAL |  |  | Flags that control execution (can be combined):   F  Include full details (description text, etc.)   I  Include inactivated reasons If this parameter is not defined or empty, only the summary data forcurrently active reasons is returned.
PART | LITERAL |  |  | The partial match restriction (case sensitive). For example, a PART valueof &quot;ZZ&quot; would restrict the list to those entries starting with the letters&quot;ZZ&quot;. If this parameter is not defined or empty, no text restrictions are applied.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}