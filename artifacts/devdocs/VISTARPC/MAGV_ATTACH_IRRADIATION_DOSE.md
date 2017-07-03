---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAGV ATTACH IRRADIATION DOSE
# MAGV ATTACH IRRADIATION DOSE

  +---------------------------------------------------------------+  | Property of the US Government.                                |  | No permission to copy or redistribute this software is given. |  | Use of unreleased versions of this software requires the user |  | to execute a written test agreement with the VistA Imaging    |  | Development Office of the Department of Veterans Affairs,     |  | telephone (301) 734-0100.                                     |  |                                                               |  | The Food and Drug Administration classifies this software as  |  | a medical device.  As such, it may not be changed in any way. |  | Modifications to this software may result in an adulterated   |  | medical device under 21CFR820, the use of which is considered |  | to be a violation of US Federal Statutes.                     |  +---------------------------------------------------------------+ This RPC allows irradiation dosage entries to be attached to a series.

Property | Value
--- | ---
Label | ATTACH
Routine | [MAGVRD01](http://code.osehra.org/dox/Routine_MAGVRD01_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PATIENT | LITERAL |  |  | This is the patient identifier.
PROCEDURE | LITERAL |  |  | This is the accession number of the procedure related to the irradiation dosage instance.
STUDY UID | LITERAL |  |  | This is the study UID related to the irradiation dosage instance.
IRRADIATION INSTANCE UID | LITERAL |  |  | This is the irradiation instance UID of a CT irradiation dosage instance.
ATTRIBUTES | LIST |  |  |   Input parameters are name-value pairs sent as successive integer subscripts in an array that should be passed in by reference.    The values passed in should be in the format &lt;fname&gt;&#x60;&lt;value&gt;, where &lt;fname&gt; is a field name and &lt;value&gt; is the value to which that field should be set.
TYPE | LITERAL |  |  | This is the type of irradiation instance - &quot;CT&quot; or &quot;FLUORO&quot;.
SERUID | LITERAL |  |  | This is the series UID related to the irradiation dosage instance.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}