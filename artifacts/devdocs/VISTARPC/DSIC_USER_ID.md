---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIC USER ID<br/>
# DSIC USER ID

For a given user DUZ value, return all IDs for that individual.  These IDs include SSN, NPI, and the local alternate identifiers if they exist.

## Properties

Property | Value
--- | ---
Label | ID
MUMPS Implementation | [DSICDUZ](http://code.osehra.org/dox/Routine_DSICDUZ_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
VDUZ | LITERAL | 15 | true | This is the user&#x27;s internal entry number (DUZ) number from file 200
FLAGS | LITERAL | 15 | true | A string of characters indicating which identifiers you want returned.    Default to AaDNSTVv  Acceptable values Flag  File 200 field#  Return mnemonic  Description ----  ---------------  ---------------  ---------------------------------  A      21600(mult)        OAI          Alternate ID  a      21600              OAI          Return default alternate ID only.         If one is marked as default then return that value. If none are         marked as default and there is only entry in the Alt ID multiple,         then return that one.  If none are marked as default and more         than one non-expired Alt ID is found, then return error         message. Flags A and a are mutually exclusive.  If both receive         then use A.  D      53.2               DEA          DEA#  N      41.99              NPI          NPI#  S      9                  SSN          SSN  T      53.92              TAX          Provider&#x27;s Tax ID  V      9000               VPID         VPID  v      53.3               VA           VA#



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}