---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; TIU REQUIRES COSIGNATURE 

 property | value 
--- | --- 
 label | TIU REQUIRES COSIGNATURE
 tag | REQCOS
 routine | [TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html)
 return value type | SINGLE VALUE
 description | This Boolean RPC simply evaluates whether the current user requirescosignature for TIU DOCUMENTS, and returns a 1 if true, or a 0 if false.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | TIUTYP | LITERAL |  | true | Pointer to the TIU DOCUMENT DEFINITION FILE (#8925.1). | 
| vs:Input_Parameter-8994_02 | TIUDA | LITERAL |  | true | Pointer to the TIU DOCUMENT FILE (#8925).  References the document to beedited/signed. | 
| vs:Input_Parameter-8994_02 | USER | LITERAL |  | true | Optional parameter.  Pointer to the NEW PERSON FILE (#200).  Pass this in if author is NOT the current user (e.g., User is a transcriptionist. | 