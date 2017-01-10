---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; GMV TEAM PATIENTS 

 property | value 
--- | --- 
 label | GMV TEAM PATIENTS
 tag | TEAMPT
 routine | [GMVUTL3](http://code.osehra.org/dox/Routine_GMVUTL3_source.html)
 return value type | ARRAY
 description | This procedure retrieves patients assigned to a given team.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | GMVTEAM | LITERAL | 30 | true | GMVTEAM is the internal entry number of the selected team (File 100.21). | 