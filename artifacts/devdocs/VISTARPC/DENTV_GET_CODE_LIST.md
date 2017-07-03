---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DENTV GET CODE LIST
# DENTV GET CODE LIST

This call will return all ADA CPT codes which match the inputted string.You can pass the cpt code name or a string, like 'surf'.

Property | Value
--- | ---
Label | LIST
Routine | [DENTVRP1](http://code.osehra.org/dox/Routine_DENTVRP1_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
VAL | LITERAL | 30 | true | This is the string of characters that will be used in a Fileman lookup onthe ADA code file (#228).  You may send either the ada code name or astring of characters, like &#x27;surface&#x27;
DATE | LITERAL | 7 | true | This is the visit date for which you wish to retreive a list of ICD diagnosis codes.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}