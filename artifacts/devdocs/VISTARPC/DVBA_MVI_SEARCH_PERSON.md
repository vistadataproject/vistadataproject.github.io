---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DVBA MVI SEARCH PERSON<br/>
# DVBA MVI SEARCH PERSON

This remote procedure passes the delimited person traits to the MVI SEARCH PERSON web service and returns the results of the search.

## Properties

Property | Value
--- | ---
Label | FNDPAT
Routine | [DVBAMVI1](http://code.osehra.org/dox/Routine_DVBAMVI1_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PERSON TRAITS | LITERAL |  | true | Patient demographics used for search contained in a single &quot;^&quot;-delimited string.   Piece 1: FIRSTNAME             (required)  Piece 2: MIDDLENAME or INITIAL (optional)  Piece 3: LASTNAME              (required)   Piece 4: SSN (9 digits)        (required)    Piece 5: BIRTHDATE (FM format) (required)   Example:  CAPRI^TEST^PATIENT^999999999^2540101
INITIAL QUANTITY | LITERAL |  | true | This optional parameter populates the initialQuantity value attribute inthe 1305 HL7v3 message. The minimum value is 1 and the maximum value is10.  The parameter will default to 10 when the parameter is not defined.
NAME FORMAT | LITERAL |  | true | This optional parameter controls the format of the full name resultreturned. Setting the parameter to 1 causes the name to be formatted asLASTNAME,FIRSTNAME MIDDLENAME SUFFIX.  Any other value or no value causesthe name to be formatted as FIRSTNAME MIDDLENAME LASTNAME SUFFIX.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}