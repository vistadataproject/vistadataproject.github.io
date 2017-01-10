---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; NUPA CAREPLAN PROBLEM HISTORY 

 property | value 
--- | --- 
 label | NUPA CAREPLAN PROBLEM HISTORY
 tag | HIST
 routine | [NUPABCL1](http://code.osehra.org/dox/Routine_NUPABCL1_source.html)
 return value type | GLOBAL ARRAY
 description | Provides the history for a selected problem & intervention in a patient's care plan for the current admission.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DA  | LITERAL |  | true | Three piece variable.  Pieces are: 1. IEN of problem from file 1927.2. 2. IEN of intervention from file 1927.24. 3. IEN of the Care Plan from file 1927.4. | 