---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; YTAPI SAVEIT 

 property | value 
--- | --- 
 label | YTAPI SAVEIT
 tag | SAVEIT
 routine | [YTAPI1](http://code.osehra.org/dox/Routine_YTAPI1_source.html)
 return value type | ARRAY
 description | This API allows saving of patient responses to a test or interview in the M database. The patient ien, the test code, and administration date is required along with the responses. All responses are checked for validity. No scoring is returned but successful addition to the M database is indicated. Input:                 DFN : patient internal identifier                CODE: Test code from file 601 or \ASI\ e.g. \CAGE\, \BDI\ADATE: inclusive administration date in %DT acceptable format (11/11/2011)                Staff: DUZ of professional ordering the testR1: string of patient responses 1-200                R2: string of patient responses 201-400 [as needed]                R3: string of patient responses 401-600 [as needed] Output:Array(1)=[DATA] indicates successful  call




Generated on January 11th 2017, 6:34:23 am