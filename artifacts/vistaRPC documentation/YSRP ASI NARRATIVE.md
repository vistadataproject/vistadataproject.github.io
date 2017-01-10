---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; YSRP ASI NARRATIVE 

 property | value 
--- | --- 
 label | YSRP ASI NARRATIVE
 tag | ASINAR
 routine | [YSASRPWP](http://code.osehra.org/dox/Routine_YSASRPWP_source.html)
 return value type | GLOBAL ARRAY
 description | This procedure prints the selected ASI in narrative form.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | YSASDA | LITERAL | 30 | true | YSASDA is a pointer to the Addiction Severity Index file #604. | 