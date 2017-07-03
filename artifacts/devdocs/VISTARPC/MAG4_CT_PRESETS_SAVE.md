---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAG4 CT PRESETS SAVE
# MAG4 CT PRESETS SAVE

 Saves the CT Presets from the Radiology Viewer in Clinical Display  as site Specific Presets.

Property | Value
--- | ---
Label | SAVECTP
Routine | [MAGGTU6](http://code.osehra.org/dox/Routine_MAGGTU6_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
VALUE | LITERAL | 245 | true | This is the string of CT Presets. 
DATA | LITERAL | 245 | true |  DATA is a set of Flags that determine where the CT Presets will be saved. Either as CT PRESETS  or CT PRESETS 2 for Client versions 72 and later



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}