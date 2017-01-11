---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; TIU SET ADMINISTRATIVE CLOSURE 

 property | value 
--- | --- 
 label | TIU SET ADMINISTRATIVE CLOSURE
 tag | ADMNCLOS
 routine | [TIUSRVPT](http://code.osehra.org/dox/Routine_TIUSRVPT_source.html)
 return value type | SINGLE VALUE
 description | This remote procedure sets the file attributes necessary to close adocument by administrative action (either manually or by scanning a paperdocument that doesn't require the signature of an author as a typical TIUDocument would).

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| TIUDA | LITERAL |  | true | This is the IEN of the document in the TIU DOCUMENT FILE (#8925). | 
| MODE | LITERAL |  | true | This is the alphabetic code for the manner in which the document wasclosed (i.e., \S\ for Scanned Document, or \M\ for Manual Closure). Optional: Defaults to \S\. | 
| PERSON | LITERAL |  | true | This is the IEN in the NEW PERSON file (#200) of the person who closed thedocument. Optional: Defaults to DUZ (i.e., the current user). | 