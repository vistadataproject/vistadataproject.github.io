---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; TIU DOCUMENTS BY CONTEXT 

 property | value 
--- | --- 
 label | TIU DOCUMENTS BY CONTEXT
 tag | CONTEXT
 routine | [TIUSRVLO](http://code.osehra.org/dox/Routine_TIUSRVLO_source.html)
 return value type | GLOBAL ARRAY
 description | Returns lists of TIU Documents that satisfy the following search criteria: 1 - signed documents (all)   2 - unsigned documents  3 - uncosigned documents4 - signed documents/author5 - signed documents/date range

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | CLASS | LITERAL |  | true | This is a pointer to the Class of TIU DOCUMENTS which the user isinterested in (e.g., 3 for PROGRESS NOTES, 244 for DISCHARGE SUMMARIES,etc.). | 
| vs:Input_Parameter-8994_02 | CONTEXT | LITERAL |  | true | This is an integer number which maps the context in which the user wishesthe notes to be returned.  The mapping is as follows: 1 - signed documents (all)2 - unsigned documents  3 - uncosigned documents4 - signed documents/author5 - signed documents/date range | 
| vs:Input_Parameter-8994_02 | DFN | LITERAL |  | true | Pointer to Patient File (#2). | 
| vs:Input_Parameter-8994_02 | EARLY | LITERAL |  | true | EARLY DATE/TIME in regular FileMan format for the inclusive lower bound onthe search. | 
| vs:Input_Parameter-8994_02 | LATE | LITERAL |  | true | LATE DATE/TIME in regular FileMan format for the inclusive upper bound onthe search. | 
| vs:Input_Parameter-8994_02 | PERSON | LITERAL |  | true | This is a pointer to the NEW PERSON FILE (#200) for the author of thedocuments to be retrieved. | 
| vs:Input_Parameter-8994_02 | OCCLIM | LITERAL |  | true | This is the maximum number of documents to be retrieved in the currentquery. | 
| vs:Input_Parameter-8994_02 | SEQUENCE | LITERAL |  | true | This is the sequence by reference date/time (A=ascending (OLDEST FIRST),D=descending (NEWEST FIRST)) in which the user would like the listreturned. | 
| vs:Input_Parameter-8994_02 | SHOWADD | LITERAL |  | true | This BOOLEAN parameter determines whether addenda will be included in thereturn array, when their parent documents are identified by the searchcriteria, and vice versa. Also if SHOWADD is TRUE (1), the \+\ at thebeginning of the return text will be omitted (since it offers onlyredundant information). | 
| vs:Input_Parameter-8994_02 | INCUND | LITERAL |  | true | Optional Boolean parameter determines whether Undictated and Untranscribed documents should be returned along with Unsigneddocuments, when the CONTEXT is passed as 2. | 