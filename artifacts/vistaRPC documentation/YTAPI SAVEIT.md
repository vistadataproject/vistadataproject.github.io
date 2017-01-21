---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; YTAPI SAVEIT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}YTAPI SAVEIT{:/}
 tag | {::nomarkdown}SAVEIT{:/}
 routine | [YTAPI1](http://code.osehra.org/dox/Routine_YTAPI1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This API allows saving of patient responses to a test or interview in the M database. The patient ien, the test code, and administration date is required along with the responses. All responses are checked for validity. No scoring is returned but successful addition to the M database is indicated. Input:                 DFN : patient internal identifier                CODE: Test code from file 601 or \ASI\ e.g. \CAGE\, \BDI\ADATE: inclusive administration date in %DT acceptable format (11/11/2011)                Staff: DUZ of professional ordering the testR1: string of patient responses 1-200                R2: string of patient responses 201-400 [as needed]                R3: string of patient responses 401-600 [as needed] Output:Array(1)=[DATA] indicates successful  call{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:25:13 am</p>{:/}