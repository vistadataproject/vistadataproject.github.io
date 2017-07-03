---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; VAFC NEW NC TREATING FACILITY
# VAFC NEW NC TREATING FACILITY

This Remote Procedure Call will be used by the North Chicago Common Registration User Interface (UI).  Given a patient DFN and DOD EDIPI, the RPC adds an active Department of Defense correlation to the VistA TREATING FACILITY LIST (#391.91) file if it does not exist.  It returns a list of Treating Facilities, including Source Identifier, Identifier Type, Assigning Authority, Assigning Facility, Identifier Status, and an indicator if the entry was entered into File 391.91.

Property | Value
--- | ---
Label | NEWTF
Routine | [VAFCTFU2](http://code.osehra.org/dox/Routine_VAFCTFU2_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
Vista Patient Identifier | LITERAL | 255 | true | Vista Patient Identifier will be the PATIENT (#2) file IEN (aka DFN). Example: DFN&#x3D;&quot;7168937&quot;
DOD Identifier | LITERAL | 255 | true | The DOD Identifier will be EDIPI data with the following format:  Id^IdType^AssigningAuthority^AssigningFacility  Example: EDIPI&#x3D;&quot;852043888^NI^USDOD^200DOD&quot;



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}