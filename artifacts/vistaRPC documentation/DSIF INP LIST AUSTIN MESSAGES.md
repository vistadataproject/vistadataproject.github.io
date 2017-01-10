---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF INP LIST AUSTIN MESSAGES 

 property | value 
--- | --- 
 label | DSIF INP LIST AUSTIN MESSAGES
 tag | LISTMESS
 routine | [DSIFPAY6](http://code.osehra.org/dox/Routine_DSIFPAY6_source.html)
 return value type | GLOBAL ARRAY
 description | Retrieve a list of Austin messages for Pricer adjustments.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | FROM DATE | LITERAL | 7 | true | Date to start from in FM format. | 
| vs:Input_Parameter-8994_02 | STOP DATE | LITERAL | 7 | true | Date to stop listing messages in FM format (today - defaultif not entered). | 