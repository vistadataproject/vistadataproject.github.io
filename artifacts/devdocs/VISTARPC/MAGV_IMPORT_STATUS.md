---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAGV IMPORT STATUS
# MAGV IMPORT STATUS

 +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+ Given a set of UIDS, this RPC returns the import status of a matching item.

Property | Value
--- | ---
Label | IMSTATUS
Routine | [MAGVIM01](http://code.osehra.org/dox/Routine_MAGVIM01_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
UIDS | LIST |  |  | This is a list of Study, Series, and SOP UIDs delimited by &quot;&#x60;&quot;.  TheUIDs will be used to check if an instance has been filed.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}