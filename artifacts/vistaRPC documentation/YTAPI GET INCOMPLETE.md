---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; YTAPI GET INCOMPLETE 

 property | value 
--- | --- 
 label | YTAPI GET INCOMPLETE
 tag | GETINC
 routine | [YTAPI7](http://code.osehra.org/dox/Routine_YTAPI7_source.html)
 return value type | ARRAY
 description | API to retrive partially completed psychological tests. Input Required: DFN ;ien of file 2 Patient                YSCODE ; code for entry in file 601 Psycholgical TestingOutput:        YSDATA(1)=[DATA]        YSDATA(2)=INSTRUMENT^DATE ENTERED^DATE ADMINISTERED CLERICALLY^NEXT ITEM^VALID RESPONSE STRING^CLERK TEST^ORDERED BY^DATE BEGUN        YSDATA(3)=responses 1-200        YSDATA(4)=responses 201-400        YSDATA(5)=responses 401-600




 ###### Generated on January 11th 2017, 6:39:43 am