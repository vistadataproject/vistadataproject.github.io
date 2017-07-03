---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAG4 STATUS CALLBACK
# MAG4 STATUS CALLBACK

This RPC is called from the Imaging Delphi component whenan image/images have been imported via the Imaging Import APIbeing developed for use by Clinical Procedures.This call is used in the test version of Import API, it will be replaced in the released version.  In the released version the Imaging BackGround Processor will be calling the Status Callbackroutine of CP.

Property | Value
--- | ---
Label | STATUSCB
Routine | [MAGGSIUI](http://code.osehra.org/dox/Routine_MAGGSIUI_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
STATARR | LIST |  | true | This array has the following structure:STATARR(0)&#x3D;&quot;0^Error message&quot;  or &quot;1^Success&quot;STATARR(1)&#x3D;TrackingID      TrackingID was sent as a parameter by CP in the IMPORT() call.STATARR(2)&#x3D;Queue Number     The Queue Number was returned to CP from the IMPORT() callSTATARR(3..n) If status is &#x27;0^ERROR message&quot; these remaining nodeswill contain further error information.  Intended for User Interventionand debugging purposes.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}