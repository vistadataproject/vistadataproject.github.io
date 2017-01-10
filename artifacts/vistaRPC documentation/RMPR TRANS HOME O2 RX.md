---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; RMPR TRANS HOME O2 RX 

 property | value 
--- | --- 
 label | RMPR TRANS HOME O2 RX
 tag | EN
 routine | [RMPR9S8P](http://code.osehra.org/dox/Routine_RMPR9S8P_source.html)
 return value type | ARRAY
 description | RX information for screen 8 of the GUI 2319 Home Oxygen. Pass: IEN of File 660 RESULTS(0)=THE NUMBER OF PRESCRIPTIONSRESULTS(1)=DATE PRESCRIPTION WRITTENRESULTS(2)=DATE PRESCRIPTION EXPIRES

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | IEN | LITERAL | 50 | true |  | 