---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF CNSLTS DISCONTINUE 

 property | value 
--- | --- 
 label | DSIF CNSLTS DISCONTINUE
 tag | DISCON
 routine | [DSIFCNS1](http://code.osehra.org/dox/Routine_DSIFCNS1_source.html)
 return value type | SINGLE VALUE
 description | This RPC allows for the discontinuing of a selected Consult. Cloned from ORQQCN DISCONTINUE

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DSIFCIEN | LITERAL |  | true | This is the Consult IEN that needs to be discontinued. | 
| vs:Input_Parameter-8994_02 | DSIFPROV | LITERAL |  | true | Provider who Discontinued or Denied consult. | 
| vs:Input_Parameter-8994_02 | DSIFDT | LITERAL |  | true | This is the date the consult was discontinued or denied. | 
| vs:Input_Parameter-8994_02 | DSIFACTM | LITERAL | 2 | true | Flag used to determine if Consult was DISCONTINUED or DENIED. 'DC' - Discontinued'DY' - Denied | 
| vs:Input_Parameter-8994_02 | DSIFCOM | LIST | 80 |  | The array of comments associated with the discontinue/deny for the consult. | 