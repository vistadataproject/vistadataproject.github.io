---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; YTAPI GET INCOMPLETE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}YTAPI GET INCOMPLETE{:/}
 tag | {::nomarkdown}GETINC{:/}
 routine | [YTAPI7](http://code.osehra.org/dox/Routine_YTAPI7_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}API to retrive partially completed psychological tests. Input Required: DFN ;ien of file 2 Patient                YSCODE ; code for entry in file 601 Psycholgical TestingOutput:        YSDATA(1)=[DATA]        YSDATA(2)=INSTRUMENT^DATE ENTERED^DATE ADMINISTERED CLERICALLY^NEXT ITEM^VALID RESPONSE STRING^CLERK TEST^ORDERED BY^DATE BEGUN        YSDATA(3)=responses 1-200        YSDATA(4)=responses 201-400        YSDATA(5)=responses 401-600{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 10:14:32 pm</p>{:/}