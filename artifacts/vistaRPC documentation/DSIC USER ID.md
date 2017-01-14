---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; DSIC USER ID 


 ## VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIC USER ID{:/}
 tag | {::nomarkdown}ID{:/}
 routine | [DSICDUZ](http://code.osehra.org/dox/Routine_DSICDUZ_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}For a given user DUZ value, return all IDs for that individual.  These IDs include SSN, NPI, and the local alternate identifiers if they exist.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}VDUZ{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}15{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the user's internal entry number (DUZ) number from file 200{:/} | 
| {::nomarkdown}FLAGS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}15{:/} | {::nomarkdown}true{:/} | {::nomarkdown}A string of characters indicating which identifiers you want returned.    Default to AaDNSTVv  Acceptable values Flag  File 200 field#  Return mnemonic  Description ----  ---------------  ---------------  ---------------------------------  A      21600(mult)        OAI          Alternate ID  a      21600              OAI          Return default alternate ID only.         If one is marked as default then return that value. If none are         marked as default and there is only entry in the Alt ID multiple,         then return that one.  If none are marked as default and more         than one non-expired Alt ID is found, then return error         message. Flags A and a are mutually exclusive.  If both receive         then use A.  D      53.2               DEA          DEA#  N      41.99              NPI          NPI#  S      9                  SSN          SSN  T      53.92              TAX          Provider's Tax ID  V      9000               VPID         VPID  v      53.3               VA           VA#{:/} | {::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:36:25 am</p>{:/}