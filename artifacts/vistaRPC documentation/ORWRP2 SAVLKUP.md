---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWRP2 SAVLKUP 

 property | value 
--- | --- 
 label | ORWRP2 SAVLKUP
 tag | SAVLKUP
 routine | [ORWRP2](http://code.osehra.org/dox/Routine_ORWRP2_source.html)
 return value type | SINGLE VALUE
 description | This saves the last Adhoc Health Summary lookup used by a user in CPRS.


### Method description

 property | value 
--- | --- 
 Method comment | save Adhoc lookup selection

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| VAL | LITERAL | 10 | true | This is the value passed to the parameter ORWRP ADHOC LOOKUP  0: Name  1: Abbreviation  2: Display Header | 