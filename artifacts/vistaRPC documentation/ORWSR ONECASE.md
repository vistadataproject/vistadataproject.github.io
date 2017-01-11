---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWSR ONECASE 

 property | value 
--- | --- 
 label | ORWSR ONECASE
 tag | ONECASE
 routine | [ORWSR](http://code.osehra.org/dox/Routine_ORWSR_source.html)
 return value type | ARRAY
 description | Given a TIU document IEN, return the surgical case record and all otherdocuments related to the case, for display in the GUI treeview.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| TIUDA | LITERAL | 16 | true | Document IEN in file 8925. | 