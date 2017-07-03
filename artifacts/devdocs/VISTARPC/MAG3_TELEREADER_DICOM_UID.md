---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAG3 TELEREADER DICOM UID
# MAG3 TELEREADER DICOM UID

Returns a new TELEREADER DICOM Study, Series or SOP Instance UID

Property | Value
--- | ---
Label | GETUID
Routine | [MAGNGMR](http://code.osehra.org/dox/Routine_MAGNGMR_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
MAGPARAM | LIST |  | true | MAGPARAM - array with input values           MAGPARAM(&quot;TYPE&quot;)&#x3D; Type UID - &quot;STUDY&quot;, &quot;SERIES&quot;, &quot;SOP&quot;           MAGPARAM(&quot;ACNUM&quot;)&#x3D; Accession number - Patient consult ID           MAGPARAM(&quot;DFN&quot;)&#x3D; Patient DFN



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}