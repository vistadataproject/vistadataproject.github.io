---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; YTAPI PREVIEW 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}YTAPI PREVIEW{:/}
 tag | {::nomarkdown}PREVIEW{:/}
 routine | [YTAPI4](http://code.osehra.org/dox/Routine_YTAPI4_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This API allows scoring of patient responses to a test or interview without making changes in the  M database. The patient ien, the test code, and administration date is required along with the responses. All responses are checked for validity. Scoring is returned in the output documented  in the SCOREIT API. Input:                 DFN : patient internal identifier                CODE: Test code from file 601 or \ASI\ e.g. \CAGE\, \BDI\ADATE: inclusive administration date in %DT acceptable format (11/11/2011)                Staff: DUZ of professional ordering the testR1: string of patient responses 1-200                R2: string of patient responses 201-400 [as needed]                R3: string of patient responses 401-600 [as needed] Output:Array(2)= Patient Name^Test Code^Test Title^Internal Admin date^External Admin Date ^Ordered byArray(3)=R1^Responses 1-200 undelimitedArray(4)=R2^ Responses 201-400 undelimited (even if less than 200)Array(5)=R3^ Responses 401-600 undelimitedArray(6)=S1^Scale Name^Raw Score^Transformed ScoreArray(7)=S2^ Scale Name^Raw Score^Transformed Score   And onward as needed{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:25:13 am</p>{:/}