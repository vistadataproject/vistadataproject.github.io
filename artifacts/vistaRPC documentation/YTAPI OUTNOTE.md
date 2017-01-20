---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; YTAPI OUTNOTE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}YTAPI OUTNOTE{:/}
 tag | {::nomarkdown}OUTNOTE{:/}
 routine | [YTAPI5](http://code.osehra.org/dox/Routine_YTAPI5_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This API returns text to be entered in a progress note based on the outcome of a test administration. Input is the output of  SCOREIT or PREVIEW API. Output adds this text to the output YSDATA Input: Array(2)= Patient Name^Test Code^Test Title^Internal Admin date^External Admin Date ^Ordered byArray(3)=R1^Responses 1-200 undelimitedArray(4)=R2^ Responses 201-400 undelimited (even if less than 200)Array(5)=R3^ Responses 401-600 undelimitedArray(6)=S1^Scale Name^Raw Score^Transformed ScoreArray(7)=S2^ Scale Name^Raw Score^Transformed Score   And onward as needed  Output:Array(2)= Patient Name^Test Code^Test Title^Internal Admin date^External Admin Date ^Ordered byArray(3)=R1^Responses 1-200 undelimitedArray(4)=R2^ Responses 201-400 undelimited (even if less than 200)Array(5)=R3^ Responses 401-600 undelimitedArray(6)=S1^Scale Name^Raw Score^Transformed ScoreArray(7)=S2^ Scale Name^Raw Score^Transformed Score   And onward as neededArray(\ON\)= output text{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 4:54:06 am</p>{:/}