---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIV DDR GETS ENTRY DATA
# DSIV DDR GETS ENTRY DATA

This calls GETS^DIQ to get a list of field values for a record

Property | Value
--- | ---
Label | GET
Routine | [DSIVDDR0](http://code.osehra.org/dox/Routine_DSIVDDR0_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FILE | LITERAL | 20 | true | This is the number of the file in which you wish to search.
IENS | LITERAL | 20 | true | This is the IENS for the search. See the instructions on constructing an IENS in the FileMan Programmer&#x27;s Manual
FIELD | LITERAL | 250 | true | This is an ^ (or &quot;;&quot;) delimited list of field numbers to return from the entry identified in IENS
FLAGS | LITERAL | 20 | true |  This is a string containing up to 3 characters that will modify how FileMan presents the results of this operation:         E: Return data in external format        I: Return data in internal format         N: Do NOT return null values - not to be used by DSS GUI        R: Resolves field numbers to field names        W: Input field is a word processing field  If the W flag is passed, then this call expects that the Field parameter will have a single field number only.  The W flag must be sent by itself.  It cannot be combined with other flags.  W introduced 12/9/2003.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}