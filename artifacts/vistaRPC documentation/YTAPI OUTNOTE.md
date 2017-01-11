---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; YTAPI OUTNOTE 

 property | value 
--- | --- 
 label | YTAPI OUTNOTE
 tag | OUTNOTE
 routine | [YTAPI5](http://code.osehra.org/dox/Routine_YTAPI5_source.html)
 return value type | ARRAY
 description | This API returns text to be entered in a progress note based on the outcome of a test administration. Input is the output of  SCOREIT or PREVIEW API. Output adds this text to the output YSDATA Input: Array(2)= Patient Name^Test Code^Test Title^Internal Admin date^External Admin Date ^Ordered byArray(3)=R1^Responses 1-200 undelimitedArray(4)=R2^ Responses 201-400 undelimited (even if less than 200)Array(5)=R3^ Responses 401-600 undelimitedArray(6)=S1^Scale Name^Raw Score^Transformed ScoreArray(7)=S2^ Scale Name^Raw Score^Transformed Score   And onward as needed  Output:Array(2)= Patient Name^Test Code^Test Title^Internal Admin date^External Admin Date ^Ordered byArray(3)=R1^Responses 1-200 undelimitedArray(4)=R2^ Responses 201-400 undelimited (even if less than 200)Array(5)=R3^ Responses 401-600 undelimitedArray(6)=S1^Scale Name^Raw Score^Transformed ScoreArray(7)=S2^ Scale Name^Raw Score^Transformed Score   And onward as neededArray(\ON\)= output text




 ###### Generated on January 11th 2017, 6:39:42 am