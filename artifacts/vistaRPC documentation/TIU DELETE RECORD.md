---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; TIU DELETE RECORD 

 property | value 
--- | --- 
 label | TIU DELETE RECORD
 tag | DELETE
 routine | [TIUSRVP](http://code.osehra.org/dox/Routine_TIUSRVP_source.html)
 return value type | SINGLE VALUE
 description | Deletes TIU Document records...Evaluates authorization.


### Method description

 property | value 
--- | --- 
 Method comment | delete document

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| TIUDA | LITERAL |  | true | Record number of TIU Document to be deleted. | 
| TIURSN | LITERAL |  | true | This optional parameter specifies the reason for deletion (i.e., PrivacyAct, or Administrative Action). It only needs to be passed if the document has already been signed, and the user is still authorized to delete therecord. | 