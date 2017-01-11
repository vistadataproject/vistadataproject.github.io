---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; TIU PERSONAL TITLE LIST 

 property | value 
--- | --- 
 label | TIU PERSONAL TITLE LIST
 tag | PERSLIST
 routine | [TIUSRVD](http://code.osehra.org/dox/Routine_TIUSRVD_source.html)
 return value type | ARRAY
 description | This Remote Procedure returns the user's list of preferred titles for agiven class of documents, along with the default title, if specified.


### Method description

 property | value 
--- | --- 
 Method comment | Get personal list for a user

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DUZ | LITERAL |  | true | This is the user's ID number (Pointer to file 200). | 
| CLASS | LITERAL |  |  | This is the Class of Documents (Pointer to file 8925.1) from which thetitle is to be selected. | 
| INDEX | LITERAL |  | true | This is the array subscript from which to begin incrementing (in the eventthat the preferred list is to be appended to an existing array). | 




Generated on January 11th 2017, 6:34:23 am