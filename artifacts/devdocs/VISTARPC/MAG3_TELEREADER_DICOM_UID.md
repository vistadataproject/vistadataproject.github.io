---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAG3 TELEREADER DICOM UID<br/>
# MAG3 TELEREADER DICOM UID

Returns a new TELEREADER DICOM Study, Series or SOP Instance UID

## Properties

Property | Value
--- | ---
Label | GETUID
MUMPS Implementation | [MAGNGMR](http://code.osehra.org/dox/Routine_MAGNGMR_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
MAGPARAM | LIST |  | true | MAGPARAM - array with input values           MAGPARAM(&quot;TYPE&quot;)&#x3D; Type UID - &quot;STUDY&quot;, &quot;SERIES&quot;, &quot;SOP&quot;           MAGPARAM(&quot;ACNUM&quot;)&#x3D; Accession number - Patient consult ID           MAGPARAM(&quot;DFN&quot;)&#x3D; Patient DFN



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}