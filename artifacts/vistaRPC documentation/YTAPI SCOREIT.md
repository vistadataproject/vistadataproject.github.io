---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; YTAPI SCOREIT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}YTAPI SCOREIT{:/}
 tag | {::nomarkdown}SCOREIT{:/}
 routine | [YTAPI2](http://code.osehra.org/dox/Routine_YTAPI2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This API returns all scoring information for a specified patient given a specified administration date for a specified test or instrument.  User must have adequate privileges to receive this information (i.e. often the YSP KEY) Input:                 DFN : patient internal identifier                CODE: Test code from file 601 or \ASI\ e.g. \CAGE\, \BDI\ADATE: inclusive administration date in %DT acceptable format (11/11/2011) Output:Array(2)= Patient Name^Test Code^Test Title^Internal Admin date^External Admin Date ^Ordered byArray(3)=R1^Responses 1-200 undelimitedArray(4)=R2^ Responses 201-400 undelimited (even if less than 200)Array(5)=R3^ Responses 401-600 undelimitedArray(6)=S1^Scale Name^Raw Score^Transformed ScoreArray(7)=S2^ Scale Name^Raw Score^Transformed Score   And onward as needed{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:50 am</p>{:/}