---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; OOPS ZIP CODE MISMATCH CHECK
# OOPS ZIP CODE MISMATCH CHECK

This broker call will take the Zip Code and State Name and validate that theZip Code exists and is valid for the State.

Property | Value
--- | ---
Label | ZIPCHK
Routine | [OOPSGUI8](http://code.osehra.org/dox/Routine_OOPSGUI8_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DATA | LITERAL | 50 | true | This parameter will contain the Zip Code and the State name to validate in theformat ZIPCODE^STATENAME. The zip code will be validated to ensure that itexists and then will obtain the State from the zip code file and check itagainst the cooresponding State entered by the user.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}