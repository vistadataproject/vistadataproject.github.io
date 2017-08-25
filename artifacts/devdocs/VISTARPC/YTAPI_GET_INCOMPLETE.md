---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; YTAPI GET INCOMPLETE<br/>
# YTAPI GET INCOMPLETE

API to retrive partially completed psychological tests. Input Required: DFN ;ien of file 2 Patient                YSCODE ; code for entry in file 601 Psycholgical TestingOutput:        YSDATA(1)=[DATA]        YSDATA(2)=INSTRUMENT^DATE ENTERED^DATE ADMINISTERED CLERICALLY^NEXT ITEM^VALID RESPONSE STRING^CLERK TEST^ORDERED BY^DATE BEGUN        YSDATA(3)=responses 1-200        YSDATA(4)=responses 201-400        YSDATA(5)=responses 401-600

## Properties

Property | Value
--- | ---
Label | GETINC
MUMPS Implementation | [YTAPI7](http://code.osehra.org/dox/Routine_YTAPI7_source.html)
Return Type | ARRAY




{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}