---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; YTAPI GET INCOMPLETE
# YTAPI GET INCOMPLETE

API to retrive partially completed psychological tests. Input Required: DFN ;ien of file 2 Patient                YSCODE ; code for entry in file 601 Psycholgical TestingOutput:        YSDATA(1)=[DATA]        YSDATA(2)=INSTRUMENT^DATE ENTERED^DATE ADMINISTERED CLERICALLY^NEXT ITEM^VALID RESPONSE STRING^CLERK TEST^ORDERED BY^DATE BEGUN        YSDATA(3)=responses 1-200        YSDATA(4)=responses 201-400        YSDATA(5)=responses 401-600

Property | Value
--- | ---
Label | GETINC
Routine | [YTAPI7](http://code.osehra.org/dox/Routine_YTAPI7_source.html)
Return Type | ARRAY




{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}