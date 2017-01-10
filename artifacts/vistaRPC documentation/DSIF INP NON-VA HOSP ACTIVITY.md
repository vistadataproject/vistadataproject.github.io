---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF INP NON-VA HOSP ACTIVITY 

 property | value 
--- | --- 
 label | DSIF INP NON-VA HOSP ACTIVITY
 tag | START
 routine | [DSIFRPT1](http://code.osehra.org/dox/Routine_DSIFRPT1_source.html)
 return value type | GLOBAL ARRAY
 description | This is an RPC version of the NON-VA HOSPITAL ACTIVITY report.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | FBENDDT | LITERAL | 7 | true | Last Day of the Month for the report (Required, FileMan format) | 
| vs:Input_Parameter-8994_02 | FBK | LITERAL | 1 | true | Report Hospital Type (Required, 1 = Public Hospital, 2 = Private Hospital, 3 = Federal Hospital) | 