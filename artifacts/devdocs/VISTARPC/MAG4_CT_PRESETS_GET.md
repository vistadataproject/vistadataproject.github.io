---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAG4 CT PRESETS GET<br/>
# MAG4 CT PRESETS GET

Returns the site specific CT Presets

## Properties

Property | Value
--- | ---
Label | GETCTP
Routine | [MAGGTU6](http://code.osehra.org/dox/Routine_MAGGTU6_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DATA | LITERAL | 100 | true |  DATA is a set of Flags to determine which set of Site CT Presets to return. Client Versions before Patch 72 use Presets from the CT PRESETS Field Client Versions Patch 72 and later use Presets from the CT PRESETS 2 Field in the Imaging Site Parameters File.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}