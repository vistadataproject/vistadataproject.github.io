---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAGV INACTIVATE SERIES
# MAGV INACTIVATE SERIES

This RPC inactivates a series entry in the IMAGE SERIES file (#2005.63).

Property | Value
--- | ---
Label | INSERIES
Routine | [MAGVRS14](http://code.osehra.org/dox/Routine_MAGVRS14_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
SERIEN | LITERAL |  |  | If set to 1 this flag prevents the checking of the parent procedurereference prior to inactivation.
STUDYIEN | LITERAL |  |  | The IEN of the related study entry.
OVERRIDE | LITERAL |  |  | If set to 1 this flag prevents the checking of the parent procedurereference prior to inactivation.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}