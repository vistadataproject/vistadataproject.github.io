---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGV CREATE DICOM FAILED IMAGE<br/>
# MAGV CREATE DICOM FAILED IMAGE

This RPC creates an entry in the DICOM FAILED IMAGES File (#2006.575).

## Properties

Property | Value
--- | ---
Label | DCRCTSET
MUMPS Implementation | [MAGVRS51](http://code.osehra.org/dox/Routine_MAGVRS51_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ATTS | LIST |  |  | Input parameters are name-value pairs sent as successive integersubscripts in an array that should be passed in by reference as the secondargument to entry point DCRCTSET^MAGVRS51.  The first argument willcontain the returned value in an array that should also be passed byreference. The values passed in should be in the format &lt;fname&gt;&#x60;&lt;value&gt;, where&lt;fname&gt; is a field name in the DICOM FAILED IMAGES File (#2006.575) and &lt;value&gt; is the value to which that field should be set.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}