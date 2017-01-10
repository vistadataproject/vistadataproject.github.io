---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; NUPA USER CLASS 

 property | value 
--- | --- 
 label | NUPA USER CLASS
 tag | UC
 routine | [NUPABCL1](http://code.osehra.org/dox/Routine_NUPABCL1_source.html)
 return value type | SINGLE VALUE
 description | Checks if a user is in a certain TIU User Class.  Useful to determine if the nurse doing the assessment is a student.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | CLASS | LITERAL |  | true | Class to check if the user is in, such as STUDENT. | 