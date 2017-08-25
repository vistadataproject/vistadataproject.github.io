---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGV ATTACH SOP<br/>
# MAGV ATTACH SOP

This RPC allows a SOP to be attached to a series.

## Properties

Property | Value
--- | ---
Label | ATSOP
MUMPS Implementation | [MAGVRS11](http://code.osehra.org/dox/Routine_MAGVRS11_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
SOPATT | LIST |  |  | 
MAGV ATT |  |  |  | Input parameters are name-value pairs sent as successive integersubscripts in an array that should be passed in by reference as the secondargument to entry point ATSOP^MAGVRS11.  The first argument willcontain the returned value in an array that should also be passed byreference.  The values passed in should be in the format &lt;fname&gt;&#x60;&lt;value&gt;, where&lt;fname&gt; is a field name in the IMAGE SOP INSTANCE File (#2005.64) and &lt;value&gt;is the value to which that field should be set.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}