---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ANRVJ1_RPC_MAIN 

 property | value 
--- | --- 
 label | ANRVJ1_RPC_MAIN
 tag | RPC
 routine | [ANRVJ1](http://code.osehra.org/dox/Routine_ANRVJ1_source.html)
 return value type | GLOBAL ARRAY
 description | This is the main entry point for calling line tags in routine ANRVJ1.  The format is:        Parameter 1 = OPTION (name of the line tag to call)        Parameter 2 = DFN (value being passed in)        Parameter 3 = DATA (any additional values to be passed in)

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| OPTION | LITERAL | 10 | true | Routine Line tag you wish to call. | 
| DFN | LITERAL |  | true | Parameter variable to be passed into routine tag. | 
| DATA | LITERAL |  | true | Any additional parameters to be passed into the routine line tag. | 