---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIC XIP
# DSIC XIP

This returns address demographics for a 5 or 9 digit zip codeThe return value is for the primary location associated with the ZIP code. if an error:  -1 ^ ERROR MESSAGE if OK:   Input ZIP code ^ city ^ state ^ county ^ FIPS county code the return is for the primary location associated with the ZIP code.

Property | Value
--- | ---
Label | ZIPCODE
Routine | [DSICXIP](http://code.osehra.org/dox/Routine_DSICXIP_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ZIPCODE | LITERAL | 9 | true | 5 OR 9 DIGIT ZIP CODE
ACTDATE | LITERAL | 7 | true | Active date in internal Fileman format.  If this parameter is passed, then only return zip code demographics for ones which were active as of the inputted date. If it is not passed, then return zip code info regardless of active status.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}