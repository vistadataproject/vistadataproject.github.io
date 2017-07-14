---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGV ATTACH SERIES<br/>
# MAGV ATTACH SERIES

This RPC allows a series to be attached to a study.

## Properties

Property | Value
--- | ---
Label | ATSERIES
Routine | [MAGVRS01](http://code.osehra.org/dox/Routine_MAGVRS01_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
SERIESATT | LIST |  |  | Input parameters are name-value pairs sent as successive integersubscripts in an array that should be passed in by reference as the secondargument to entry point ATSERIES^MAGVRS01.  The first argument willcontain the returned value in an array that should also be passed byreference.  The values passed in should be in the format &lt;fname&gt;&#x60;&lt;value&gt;, where&lt;fname&gt; is a field name in the IMAGE SERIES File (#2005.63) and &lt;value&gt;is the value to which that field should be set.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}