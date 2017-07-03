---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAG DICOM VISTA AE TITLE
# MAG DICOM VISTA AE TITLE

This Remote Procedure returns a string that can be usedas a DICOM Application Entity title for the purposeestablished by the parameters to this procedure.

Property | Value
--- | ---
Label | VATITLE
Routine | [MAGVRS52](http://code.osehra.org/dox/Routine_MAGVRS52_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
SERVICE | LITERAL | 20 | true | The value of this parameter is a string. This stringidentifies a DICOM DIMSE Service.The procedure will validate that the specified ApplicationEntity is permitted to perform the service specified inthis parameter.
ROLE | LITERAL | 3 | true | The value of this parameter is a string. This string shouldbe equal to either &quot;SCU&quot; (Service Class User) or&quot;SCP&quot; (Service Class Provider).The procedure will validate that the specified ApplicationEntity is permitted to operate in the specified role.
LOCATION | LITERAL | 6 | true | The value of this parameter is a string.  This string is compared tothe appropriate value in the INSTITUTION File (#4).This is needed to return the appropriate AETitle that represents aspecific division.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}