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


### Method description

 property | value 
--- | --- 
 Method comment | Evaluate cosignature requirement
 Leading comment lines | Initialize return value

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| TIUTYP | LITERAL |  | true | Pointer to the TIU DOCUMENT DEFINITION FILE (#8925.1). | 
| TIUDA | LITERAL |  | true | Pointer to the TIU DOCUMENT FILE (#8925).  References the document to beedited/signed. | 
| USER | LITERAL |  | true | Optional parameter.  Pointer to the NEW PERSON FILE (#200).  Pass this in if author is NOT the current user (e.g., User is a transcriptionist. | 




Generated on January 11th 2017, 6:34:23 am