---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGGACTION LOG 

 property | value 
--- | --- 
 label | MAGGACTION LOG
 tag | LOGACT
 routine | [MAGGTU6](http://code.osehra.org/dox/Routine_MAGGTU6_source.html)
 return value type | SINGLE VALUE
 description | Call from Delphi to log an action performed on the image. Actions are logged the IMAGE ACCESS LOG file  ^MAG(2006.95

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DATA | LITERAL | 245 | true | '^' delimited string contains the following:'^' piece     description   1   ACCESS TYPE -  A|B|C|D|E   2   USER        -  DUZ   3   IMAGE       -  MAGIEN   4   USER INTERFACE SOFTWARE   - STRING   5   PATIENT     -  DFN   6   IMAGE COUNT   7   ADDITIONAL DATA | 